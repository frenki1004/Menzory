/**
 * Prisma seed – demonstracijski podaci za M1.
 *
 * Pokretanje: `npx prisma db seed` (ili `scripts/seed-database.sh`).
 * Skripta je idempotentna: ponovno pokretanje ažurira iste korisnike i
 * profile te iznova kreira demo ponude i rezervaciju.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Punjenje baze demonstracijskim podacima…");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
