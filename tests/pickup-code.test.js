const test = require("node:test");
const assert = require("node:assert");
const crypto = require("node:crypto");

// Minimal standalone implementation mirroring src/lib/pickup-code.ts for node:test runner
const SAFE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

function generatePickupCode(length = 6) {
  const bytes = crypto.randomBytes(length);
  let code = "";
  for (let i = 0; i < length; i++) {
    code += SAFE_ALPHABET[bytes[i] % SAFE_ALPHABET.length];
  }
  return code;
}

function hashPickupCode(code) {
  const normalized = code.trim().toUpperCase();
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function verifyPickupCode(candidate, storedHash) {
  const candidateHash = hashPickupCode(candidate);
  try {
    return crypto.timingSafeEqual(
      Buffer.from(candidateHash, "hex"),
      Buffer.from(storedHash, "hex")
    );
  } catch {
    return false;
  }
}

test("generatePickupCode produces 6-character safe alphanumeric codes", () => {
  const code = generatePickupCode();
  assert.strictEqual(code.length, 6);
  assert.match(code, /^[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{6}$/);
});

test("generatePickupCode produces distinct random codes", () => {
  const code1 = generatePickupCode();
  const code2 = generatePickupCode();
  assert.notStrictEqual(code1, code2);
});

test("hashPickupCode produces consistent SHA-256 hex digest", () => {
  const code = "AB2345";
  const hash1 = hashPickupCode(code);
  const hash2 = hashPickupCode("ab2345"); // case-insensitive check
  assert.strictEqual(hash1.length, 64);
  assert.strictEqual(hash1, hash2);
});

test("verifyPickupCode correctly validates matching and rejects non-matching codes", () => {
  const code = "XYZ892";
  const storedHash = hashPickupCode(code);

  assert.strictEqual(verifyPickupCode(code, storedHash), true);
  assert.strictEqual(verifyPickupCode("xyz892", storedHash), true);
  assert.strictEqual(verifyPickupCode("WRONG1", storedHash), false);
  assert.strictEqual(verifyPickupCode("", storedHash), false);
});
