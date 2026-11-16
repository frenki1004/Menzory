const { describe, test } = require("node:test");
const assert = require("node:assert/strict");

// Čista domenska pravila učitavaju se izravno iz izvornog koda (Node type stripping),
// bez Prisme i bez žive baze.
const {
  CANCELLATION_DEADLINE_MINUTES,
  isValidReservationQuantity,
  checkOfferAvailability,
  calculateTotalAmount,
  isCancellationAllowed,
} = require("../src/lib/reservation-rules.ts");

const MINUTE = 60 * 1000;
const NOW = new Date("2026-11-20T12:00:00.000Z");
const minutesFromNow = (minutes) => new Date(NOW.getTime() + minutes * MINUTE);

describe("Validacija količine rezervacije", () => {
  test("prihvaća pozitivne cijele brojeve", () => {
    for (const quantity of [1, 2, 10, 250]) {
      assert.equal(isValidReservationQuantity(quantity), true, `količina ${quantity}`);
    }
  });

  test("odbija nulu", () => {
    assert.equal(isValidReservationQuantity(0), false);
  });

  test("odbija negativne brojeve", () => {
    assert.equal(isValidReservationQuantity(-1), false);
    assert.equal(isValidReservationQuantity(-5), false);
  });

  test("odbija decimalne vrijednosti", () => {
    assert.equal(isValidReservationQuantity(1.5), false);
    assert.equal(isValidReservationQuantity(0.5), false);
  });

  test("odbija NaN i beskonačnost", () => {
    assert.equal(isValidReservationQuantity(Number.NaN), false);
    assert.equal(isValidReservationQuantity(Number.POSITIVE_INFINITY), false);
  });
});

describe("Dostupnost ponude", () => {
  const activeOffer = { status: "ACTIVE", availableQuantity: 5 };

  test("dopušta rezervaciju aktivne ponude s dovoljnom količinom", () => {
    assert.deepEqual(checkOfferAvailability(activeOffer, 3), { ok: true });
  });

  test("dopušta rezervaciju cijele preostale količine", () => {
    assert.deepEqual(checkOfferAvailability(activeOffer, 5), { ok: true });
  });

  test("odbija količinu veću od dostupne", () => {
    const result = checkOfferAvailability(activeOffer, 6);
    assert.equal(result.ok, false);
    assert.equal(result.error, "Ponuda više nije dostupna u traženoj količini.");
  });

  test("odbija ponudu čiji status nije ACTIVE", () => {
    for (const status of ["RESERVED", "EXPIRED", "CANCELLED"]) {
      const result = checkOfferAvailability({ status, availableQuantity: 5 }, 1);
      assert.equal(result.ok, false, `status ${status}`);
    }
  });
});

describe("Rok otkazivanja: najkasnije 1 h prije isteka (F-011, UC-05)", () => {
  test("rok iznosi 60 minuta", () => {
    assert.equal(CANCELLATION_DEADLINE_MINUTES, 60);
  });

  test("dopušta otkazivanje kada je ostalo više od 60 minuta", () => {
    assert.equal(isCancellationAllowed(minutesFromNow(120), NOW), true);
    assert.equal(isCancellationAllowed(minutesFromNow(61), NOW), true);
  });

  test("dopušta otkazivanje kada je ostalo točno 60 minuta (granica)", () => {
    assert.equal(isCancellationAllowed(minutesFromNow(60), NOW), true);
  });

  test("odbija otkazivanje kada je ostalo manje od 60 minuta", () => {
    assert.equal(isCancellationAllowed(minutesFromNow(59), NOW), false);
    assert.equal(isCancellationAllowed(new Date(minutesFromNow(60).getTime() - 1), NOW), false);
    assert.equal(isCancellationAllowed(minutesFromNow(1), NOW), false);
  });

  test("odbija otkazivanje nakon isteka rezervacije", () => {
    assert.equal(isCancellationAllowed(NOW, NOW), false);
    assert.equal(isCancellationAllowed(minutesFromNow(-30), NOW), false);
  });

  test("bez zadanog vremena koristi trenutno vrijeme", () => {
    assert.equal(isCancellationAllowed(new Date(Date.now() + 3 * 60 * MINUTE)), true);
    assert.equal(isCancellationAllowed(new Date(Date.now() + 10 * MINUTE)), false);
  });
});

describe("Izračun ukupnog iznosa", () => {
  test("totalAmount = cijena * količina", () => {
    assert.equal(calculateTotalAmount(2.5, 3), 7.5);
    assert.equal(calculateTotalAmount(4, 1), 4);
  });

  test("zaokružuje na cente bez grešaka pomičnog zareza", () => {
    assert.equal(calculateTotalAmount(0.1, 3), 0.3);
    assert.equal(calculateTotalAmount(1.15, 3), 3.45);
  });

  test("donacijska ponuda (cijena 0) ima iznos točno 0", () => {
    assert.equal(calculateTotalAmount(0, 1), 0);
    assert.equal(calculateTotalAmount(0, 10), 0);
    assert.ok(Object.is(calculateTotalAmount(0, 10), 0));
  });
});
