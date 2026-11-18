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

async function main() {
  console.log("Punjenje baze demonstracijskim podacima…");

  await seedCategories();
  await seedMembershipPlans();
  const buyer = await seedBuyer();
  const [mlinar, eko] = await Promise.all(STORES.map(seedStore));
  const charity = await seedCharity();

  console.log(`Korisnici: ${buyer.email}, ${mlinar.name}, ${eko.name}, ${charity.name}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
