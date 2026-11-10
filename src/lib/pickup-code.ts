import crypto from "node:crypto";

const SAFE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

/**
 * Generates an unambiguous, cryptographically secure pickup code.
 */
export function generatePickupCode(length = 6): string {
  const bytes = crypto.randomBytes(length);
  let code = "";
  for (let i = 0; i < length; i++) {
    code += SAFE_ALPHABET[bytes[i] % SAFE_ALPHABET.length];
  }
  return code;
}

/**
 * Computes a standard SHA-256 hash for secure storage (NF-04).
 */
export function hashPickupCode(code: string): string {
  const normalized = code.trim().toUpperCase();
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

/**
 * Verifies a candidate pickup code against a stored SHA-256 hash.
 */
export function verifyPickupCode(candidate: string, storedHash: string): boolean {
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
