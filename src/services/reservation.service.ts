import { prisma } from "@/lib/prisma";
import { generatePickupCode, hashPickupCode } from "@/lib/pickup-code";

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
  if (input.quantity <= 0 || !Number.isInteger(input.quantity)) {
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
    if (offer.status !== "ACTIVE" || offer.availableQuantity < input.quantity) {
      throw new Error("Ponuda više nije dostupna u traženoj količini.");
    }
    if (offer.expiresAt.getTime() <= Date.now()) {
      throw new Error("Rok za preuzimanje ponude je istekao.");
    }

    const totalAmount = Number(offer.price) * input.quantity;
    const newAvailableQuantity = offer.availableQuantity - input.quantity;

    // 2. Decrement available quantity atomically
    await tx.offer.update({
      where: { id: offer.id },
      data: {
        availableQuantity: newAvailableQuantity,
        status: newAvailableQuantity === 0 ? "RESERVED" : "ACTIVE",
      },
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

  if (!reservation) {
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
    },
  });
}

export async function getUserReservations(userId: string) {
  return prisma.reservation.findMany({
    where: { userId },
    include: {
      store: {
        select: { id: true, name: true, address: true, phone: true },
      },
      items: {
        include: {
          offer: {
            select: { id: true, title: true, offerType: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}
