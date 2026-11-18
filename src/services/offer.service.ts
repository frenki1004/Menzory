import { prisma } from "@/lib/prisma";
import type { OfferType, OfferStatus } from "@prisma/client";

export interface CreateOfferInput {
  storeId: string;
  categoryId?: string | null;
  title: string;
  description?: string | null;
  offerType: OfferType;
  price: number;
  originalPrice?: number | null;
  quantity: number;
  isDonation?: boolean;
  pickupStart: Date;
  pickupEnd: Date;
}

export interface OfferFilter {
  q?: string;
  categoryId?: string;
  categorySlug?: string;
  storeId?: string;
  maxPrice?: number;
  isDonation?: boolean;
}

/** Podaci o prodajnom mjestu koje treba prikaz ponude (StoreSummary). */
const storeSummarySelect = {
  id: true,
  name: true,
  address: true,
  phone: true,
  latitude: true,
  longitude: true,
} as const;

const categorySelect = { id: true, name: true, slug: true } as const;

export function validateOfferInput(input: CreateOfferInput): { valid: boolean; error?: string } {
  if (!input.title || input.title.trim().length === 0) {
    return { valid: false, error: "Naziv ponude je obavezan." };
  }
  if (input.quantity <= 0 || !Number.isInteger(input.quantity)) {
    return { valid: false, error: "Količina mora biti pozitivan cijeli broj." };
  }
  if (!input.isDonation && input.price <= 0) {
    return { valid: false, error: "Cijena mora biti veća od nule ako ponuda nije donacija." };
  }
  if (input.originalPrice != null && input.originalPrice <= input.price) {
    return { valid: false, error: "Snižena cijena mora biti manja od redovne cijene." };
  }
  if (input.pickupStart >= input.pickupEnd) {
    return { valid: false, error: "Vrijeme početka preuzimanja mora biti prije kraja preuzimanja." };
  }
  if (input.pickupEnd.getTime() <= Date.now()) {
    return { valid: false, error: "Kraj preuzimanja mora biti u budućnosti." };
  }
  return { valid: true };
}

export async function createOffer(input: CreateOfferInput) {
  const validation = validateOfferInput(input);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  return prisma.offer.create({
    data: {
      storeId: input.storeId,
      categoryId: input.categoryId ?? null,
      title: input.title.trim(),
      description: input.description?.trim() ?? null,
      offerType: input.offerType,
      price: input.price,
      originalPrice: input.originalPrice ?? null,
      quantity: input.quantity,
      availableQuantity: input.quantity,
      isDonation: input.isDonation ?? false,
      pickupStart: input.pickupStart,
      pickupEnd: input.pickupEnd,
      expiresAt: input.pickupEnd,
      status: "ACTIVE",
    },
  });
}

export async function getActiveOffers(filter?: OfferFilter) {
  const now = new Date();
  const q = filter?.q?.trim();
  return prisma.offer.findMany({
    where: {
      status: "ACTIVE",
      availableQuantity: { gt: 0 },
      pickupEnd: { gt: now },
      ...(filter?.categoryId ? { categoryId: filter.categoryId } : {}),
      ...(filter?.categorySlug ? { category: { slug: filter.categorySlug } } : {}),
      ...(filter?.storeId ? { storeId: filter.storeId } : {}),
      ...(filter?.isDonation !== undefined ? { isDonation: filter.isDonation } : {}),
      ...(filter?.maxPrice ? { price: { lte: filter.maxPrice } } : {}),
      // Pretraga po nazivu ponude ili nazivu prodajnog mjesta (FZ-17).
      ...(q
        ? {
            OR: [
              { title: { contains: q, mode: "insensitive" as const } },
              { store: { name: { contains: q, mode: "insensitive" as const } } },
            ],
          }
        : {}),
    },
    include: {
      store: { select: storeSummarySelect },
      category: { select: categorySelect },
    },
    orderBy: { pickupEnd: "asc" },
  });
}

export async function getOfferById(id: string) {
  return prisma.offer.findUnique({
    where: { id },
    include: {
      store: { select: storeSummarySelect },
      category: { select: categorySelect },
    },
  });
}
