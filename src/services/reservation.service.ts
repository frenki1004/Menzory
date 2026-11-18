import { prisma } from "@/lib/prisma";
import { generatePickupCode, hashPickupCode, verifyPickupCode } from "@/lib/pickup-code";
import {
  calculateTotalAmount,
  checkOfferAvailability,
  isValidReservationQuantity,
} from "@/lib/reservation-rules";

export interface CreateReservationInput {
  userId: string;
  offerId: string;
  quantity: number;
}

export interface ConfirmPickupInput {
  storeId: string;
  pickupCode: string;
}

export async function createReservation(input: CreateReservationInput) {
  if (!isValidReservationQuantity(input.quantity)) {
    throw new Error("Količina za rezervaciju mora biti pozitivan cijeli broj.");
  }

  const pickupCode = generatePickupCode();
  const pickupCodeHash = hashPickupCode(pickupCode);

  return prisma.$transaction(async (tx) => {
    // 1. Check offer availability with lock/fresh read (NF-05)
    const offer = await tx.offer.findUnique({
      where: { id: input.offerId },
    });

    if (!offer) {
      throw new Error("Tražena ponuda ne postoji.");
    }
    const availability = checkOfferAvailability(offer, input.quantity);
    if (!availability.ok) {
      throw new Error(availability.error);
    }
    if (offer.expiresAt.getTime() <= Date.now()) {
      throw new Error("Rok za preuzimanje ponude je istekao.");
    }

    const totalAmount = calculateTotalAmount(Number(offer.price), input.quantity);

    // 2. Atomsko smanjenje (NF-05): provjera i umanjenje u jednom UPDATE-u,
    //    pa dvije istovremene rezervacije ne mogu obje uzeti zadnji komad.
    const decremented = await tx.offer.updateMany({
      where: {
        id: offer.id,
        status: "ACTIVE",
        availableQuantity: { gte: input.quantity },
      },
      data: { availableQuantity: { decrement: input.quantity } },
    });
    if (decremented.count === 0) {
      throw new Error("Ponuda više nije dostupna u traženoj količini.");
    }

    // Rasprodana ponuda prelazi u RESERVED.
    await tx.offer.updateMany({
      where: { id: offer.id, availableQuantity: 0 },
      data: { status: "RESERVED" },
    });

    // 3. Create Reservation
    const reservation = await tx.reservation.create({
      data: {
        userId: input.userId,
        storeId: offer.storeId,
        status: "CONFIRMED",
        totalAmount,
        pickupCodeHash,
        pickupCode, // Returned to the buyer in session/app
        expiresAt: offer.expiresAt,
        items: {
          create: {
            offerId: offer.id,
            quantity: input.quantity,
            unitPrice: offer.price,
          },
        },
        payments: {
          create: {
            type: "RESERVATION",
            status: "COMPLETED",
            amount: totalAmount,
            providerReference: `mock-pay-${Date.now()}`,
          },
        },
      },
      include: {
        items: {
          include: { offer: true },
        },
        store: true,
      },
    });

    return reservation;
  });
}

export async function confirmPickup(input: ConfirmPickupInput) {
  const codeHash = hashPickupCode(input.pickupCode);

  const reservation = await prisma.reservation.findFirst({
    where: {
      storeId: input.storeId,
      pickupCodeHash: codeHash,
    },
    include: {
      items: {
        include: { offer: true },
      },
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  // Eksplicitna provjera koda preko spremljenog hasha (NF-04).
  if (!reservation || !verifyPickupCode(input.pickupCode, reservation.pickupCodeHash)) {
    throw new Error("Kod za preuzimanje ne postoji ili ne pripada ovom prodajnom mjestu.");
  }

  if (reservation.status === "COMPLETED") {
    throw new Error("Ova rezervacija je već preuzeta.");
  }

  if (reservation.status === "CANCELLED") {
    throw new Error("Ova rezervacija je otkazana.");
  }

  if (reservation.expiresAt.getTime() <= Date.now()) {
    throw new Error("Rok za preuzimanje ove rezervacije je istekao.");
  }

  // Mark as completed and invalidate plaintext code (NF-04)
  return prisma.reservation.update({
    where: { id: reservation.id },
    data: {
      status: "COMPLETED",
      pickupCode: null,
    },
    include: {
      items: {
        include: { offer: true },
      },
      store: { select: { name: true } },
    },
  });
}

export async function getUserReservations(userId: string) {
  return prisma.reservation.findMany({
    where: { userId },
    include: {
      store: {
        select: { id: true, name: true, address: true, phone: true, latitude: true, longitude: true },
      },
      items: {
        include: {
          offer: {
            select: { id: true, title: true, offerType: true },
          },
        },
      },
      review: { select: { id: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}
