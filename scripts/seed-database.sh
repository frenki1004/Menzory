#!/usr/bin/env bash
# Puni bazu iz DATABASE_URL demonstracijskim podacima (prisma/seed.ts).
set -euo pipefail
cd "$(dirname "$0")/.."
echo "Seeding database with demo data..."
npx prisma db seed
