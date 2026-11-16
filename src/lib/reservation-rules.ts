/**
 * Čista domenska pravila rezervacija (bez ovisnosti o bazi ili okolini).
 *
 * Modul namjerno nema importa i koristi samo TypeScript sintaksu koja se može
 * izbrisati (type stripping), kako bi ga `node --test` mogao izravno učitati.
 */

/** Rok otkazivanja: najkasnije 1 h prije isteka preuzimanja (F-011, UC-05). */
export const CANCELLATION_DEADLINE_MINUTES = 60;

const MS_PER_MINUTE = 60 * 1000;

export interface OfferAvailabilitySnapshot {
  status: string;
  availableQuantity: number;
}

export type RuleResult = { ok: true } | { ok: false; error: string };

/** Količina mora biti pozitivan cijeli broj. */
export function isValidReservationQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity > 0;
}

/**
 * Ponuda se može rezervirati samo ako je ACTIVE i ima dovoljno dostupne količine.
 */
export function checkOfferAvailability(
  offer: OfferAvailabilitySnapshot,
  quantity: number
): RuleResult {
  if (offer.status !== "ACTIVE" || offer.availableQuantity < quantity) {
    return { ok: false, error: "Ponuda više nije dostupna u traženoj količini." };
  }
  return { ok: true };
}

/**
 * Ukupan iznos rezervacije = cijena * količina, zaokruženo na cente
 * (stupac je Decimal(10, 2)). Donacijske ponude (cijena 0) daju iznos 0.
 */
export function calculateTotalAmount(price: number, quantity: number): number {
  return Math.round(price * quantity * 100) / 100;
}

/**
 * Otkazivanje je dopušteno ako je do isteka rezervacije ostalo najmanje 60 minuta.
 */
export function isCancellationAllowed(expiresAt: Date, now: Date = new Date()): boolean {
  const remainingMs = expiresAt.getTime() - now.getTime();
  return remainingMs >= CANCELLATION_DEADLINE_MINUTES * MS_PER_MINUTE;
}
