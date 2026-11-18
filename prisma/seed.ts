/**
 * Prisma seed – demonstracijski podaci za M1.
 *
 * Pokretanje: `npx prisma db seed` (ili `scripts/seed-database.sh`).
 * Skripta je idempotentna: ponovno pokretanje ažurira iste korisnike i
 * profile te iznova kreira demo ponude i rezervaciju.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DAY_MS = 24 * 60 * 60 * 1000;

const CATEGORIES = [
  { name: "Pekarski proizvodi", slug: "pekarski-proizvodi" },
  { name: "Slastice", slug: "slastice" },
  { name: "Voće i povrće", slug: "voce-i-povrce" },
  { name: "Mliječni proizvodi", slug: "mlijecni-proizvodi" },
];

const MEMBERSHIP_PLANS = [
  { id: "seed-plan-mjesecna", name: "Mjesečna članarina", type: "MONTHLY", price: 19.99, durationDays: 30 },
  { id: "seed-plan-godisnja", name: "Godišnja članarina", type: "YEARLY", price: 199.0, durationDays: 365 },
];

// Izmišljeni demo podaci; e-mail adrese su na rezerviranoj domeni example.com.
const STORES = [
  {
    key: "mlinar",
    email: "pekara.mlinar@example.com",
    name: "Pekara Mlinar",
    address: "Ilica 45, 10000 Zagreb",
    latitude: 45.8132,
    longitude: 15.9667,
    phone: "+385 1 555 0101",
    description: "Pekara u centru grada; svaki dan nakon 18 h nudi višak peciva i kruha.",
  },
  {
    key: "eko",
    email: "vocarna.eko@example.com",
    name: "Voćarna Eko",
    address: "Trg Petra Krešimira IV. 3, 10000 Zagreb",
    latitude: 45.8105,
    longitude: 15.9935,
    phone: "+385 1 555 0202",
    description: "Voće i povrće iz lokalnog uzgoja; višak se nudi po sniženoj cijeni.",
  },
] as const;

async function seedCategories() {
  for (const category of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name },
      create: category,
    });
  }
}

async function seedMembershipPlans() {
  for (const plan of MEMBERSHIP_PLANS) {
    await prisma.membershipPlan.upsert({
      where: { id: plan.id },
      update: plan,
      create: plan,
    });
  }
}

async function seedBuyer() {
  return prisma.user.upsert({
    where: { email: "kupac@example.com" },
    update: { name: "Ana Kupac", role: "BUYER" },
    create: { email: "kupac@example.com", name: "Ana Kupac", role: "BUYER" },
  });
}

/** Prodajno mjesto s aktivnom mjesečnom članarinom (bez nje ne može objaviti ponudu, P-01). */
async function seedStore(data: (typeof STORES)[number]) {
  const user = await prisma.user.upsert({
    where: { email: data.email },
    update: { name: data.name, role: "SELLER" },
    create: { email: data.email, name: data.name, role: "SELLER" },
  });

  const profile = {
    name: data.name,
    address: data.address,
    latitude: data.latitude,
    longitude: data.longitude,
    phone: data.phone,
    description: data.description,
  };
  const store = await prisma.store.upsert({
    where: { userId: user.id },
    update: profile,
    create: { userId: user.id, ...profile },
  });

  const membership = {
    storeId: store.id,
    planId: "seed-plan-mjesecna",
    status: "ACTIVE" as const,
    validUntil: new Date(Date.now() + 30 * DAY_MS),
  };
  await prisma.membership.upsert({
    where: { id: `seed-membership-${data.key}` },
    update: membership,
    create: { id: `seed-membership-${data.key}`, ...membership },
  });

  return store;
}

/** Odobrena humanitarna organizacija – samo odobrena vidi ponude za donaciju (UC-06). */
async function seedCharity() {
  const user = await prisma.user.upsert({
    where: { email: "kruh.sv.ante@example.com" },
    update: { name: "Humanitarna udruga Kruh sv. Ante", role: "CHARITY" },
    create: { email: "kruh.sv.ante@example.com", name: "Humanitarna udruga Kruh sv. Ante", role: "CHARITY" },
  });

  const profile = {
    name: "Humanitarna udruga Kruh sv. Ante",
    registrationNumber: "DEMO-0001",
    isApproved: true,
    address: "Sveti Duh 31, 10000 Zagreb",
    phone: "+385 1 555 0303",
  };
  return prisma.charity.upsert({
    where: { userId: user.id },
    update: profile,
    create: { userId: user.id, ...profile },
  });
}

/**
 * Preuzimanje danas od 17:00 do 20:00. Ako je do 20:00 ostalo manje od sat
 * vremena, koristi se sutrašnji dan, tako da se demo rezervacija još može
 * i otkazati (pravilo od 1 h, F-011).
 */
function pickupWindow() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(20, 0, 0, 0);
  if (end.getTime() - now.getTime() < 60 * 60 * 1000) {
    end.setDate(end.getDate() + 1);
  }
  const start = new Date(end);
  start.setHours(17, 0, 0, 0);
  return { pickupStart: start, pickupEnd: end, expiresAt: end };
}

/** Briše stare demo ponude i rezervacije seedanih prodajnih mjesta prije ponovnog kreiranja. */
async function clearStoreDemoData(storeIds: string[]) {
  await prisma.reservation.deleteMany({ where: { storeId: { in: storeIds } } });
  await prisma.offer.deleteMany({ where: { storeId: { in: storeIds } } });
}

async function seedOffers(mlinarId: string, ekoId: string) {
  const categoryId = async (slug: string) =>
    (await prisma.category.findUniqueOrThrow({ where: { slug } })).id;
  const window = pickupWindow();

  const offers = [
    {
      storeId: mlinarId,
      categoryId: await categoryId("pekarski-proizvodi"),
      title: "Kroasani i peciva mix",
      description: "Mješavina kroasana, kifli i peciva od današnjeg pečenja.",
      offerType: "INDIVIDUAL" as const,
      price: 3.0,
      originalPrice: 6.0,
      quantity: 8,
    },
    {
      storeId: mlinarId,
      categoryId: await categoryId("pekarski-proizvodi"),
      title: "Dnevni paket kruha",
      description: "Paket iznenađenja: dva do tri kruha različitih vrsta.",
      offerType: "SURPRISE_BAG" as const,
      price: 2.5,
      originalPrice: 5.0,
      quantity: 5,
    },
    {
      storeId: mlinarId,
      categoryId: await categoryId("slastice"),
      title: "Paket iznenađenja – slastice",
      description: "Kolači i slatka peciva; točan sadržaj ovisi o današnjem višku.",
      offerType: "SURPRISE_BAG" as const,
      price: 5.0,
      originalPrice: 10.0,
      quantity: 3,
    },
    {
      storeId: ekoId,
      categoryId: await categoryId("voce-i-povrce"),
      title: "Jabuke i agrumi 3 kg",
      description: "Jabuke, naranče i mandarine s manjim estetskim nedostacima.",
      offerType: "INDIVIDUAL" as const,
      price: 3.5,
      originalPrice: 7.0,
      quantity: 6,
    },
    {
      storeId: ekoId,
      categoryId: await categoryId("voce-i-povrce"),
      title: "Sezonsko povrće za juhu",
      description: "Mrkva, celer, poriluk i krumpir, oko 2 kg.",
      offerType: "INDIVIDUAL" as const,
      price: 2.0,
      originalPrice: 4.0,
      quantity: 4,
    },
    // Ponuda isključivo za donaciju (F-006): cijena 0 €, vidljiva samo humanitarnim organizacijama.
    {
      storeId: mlinarId,
      categoryId: await categoryId("pekarski-proizvodi"),
      title: "Kruh i peciva za donaciju",
      description: "Neprodani kruh i peciva namijenjeni humanitarnim organizacijama.",
      offerType: "INDIVIDUAL" as const,
      price: 0,
      originalPrice: null,
      quantity: 20,
      isDonation: true,
    },
  ];

  for (const offer of offers) {
    await prisma.offer.create({
      data: { ...offer, availableQuantity: offer.quantity, ...window },
    });
  }
  return { count: offers.length, pickupEnd: window.pickupEnd };
}

async function main() {
  console.log("Punjenje baze demonstracijskim podacima…");

  await seedCategories();
  await seedMembershipPlans();
  const buyer = await seedBuyer();
  const [mlinar, eko] = await Promise.all(STORES.map(seedStore));
  const charity = await seedCharity();

  console.log(`Korisnici: ${buyer.email}, ${mlinar.name}, ${eko.name}, ${charity.name}`);

  await clearStoreDemoData([mlinar.id, eko.id]);
  const offers = await seedOffers(mlinar.id, eko.id);
  console.log(`Ponude: ${offers.count} (preuzimanje do ${offers.pickupEnd.toLocaleString("hr-HR")})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
