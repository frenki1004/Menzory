const test = require("node:test");
const assert = require("node:assert");

function validateOfferInput(input) {
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

test("validateOfferInput accepts valid offer", () => {
  const now = Date.now();
  const input = {
    title: "Svježi kruh i peciva",
    price: 2.5,
    originalPrice: 6.0,
    quantity: 5,
    isDonation: false,
    pickupStart: new Date(now + 3600000),
    pickupEnd: new Date(now + 7200000),
  };
  const res = validateOfferInput(input);
  assert.strictEqual(res.valid, true);
});

test("validateOfferInput rejects empty title", () => {
  const now = Date.now();
  const input = {
    title: "   ",
    price: 2.5,
    quantity: 5,
    pickupStart: new Date(now + 3600000),
    pickupEnd: new Date(now + 7200000),
  };
  const res = validateOfferInput(input);
  assert.strictEqual(res.valid, false);
  assert.strictEqual(res.error, "Naziv ponude je obavezan.");
});

test("validateOfferInput rejects discounted price higher than original", () => {
  const now = Date.now();
  const input = {
    title: "Kolači",
    price: 10.0,
    originalPrice: 8.0,
    quantity: 2,
    pickupStart: new Date(now + 3600000),
    pickupEnd: new Date(now + 7200000),
  };
  const res = validateOfferInput(input);
  assert.strictEqual(res.valid, false);
  assert.strictEqual(res.error, "Snižena cijena mora biti manja od redovne cijene.");
});

test("validateOfferInput rejects past pickup time", () => {
  const now = Date.now();
  const input = {
    title: "Sendviči",
    price: 3.0,
    quantity: 1,
    pickupStart: new Date(now - 7200000),
    pickupEnd: new Date(now - 3600000),
  };
  const res = validateOfferInput(input);
  assert.strictEqual(res.valid, false);
  assert.strictEqual(res.error, "Kraj preuzimanja mora biti u budućnosti.");
});

test("validateOfferInput accepts donation offer with zero price", () => {
  const now = Date.now();
  const input = {
    title: "Donacija voća",
    price: 0,
    quantity: 10,
    isDonation: true,
    pickupStart: new Date(now + 3600000),
    pickupEnd: new Date(now + 7200000),
  };
  const res = validateOfferInput(input);
  assert.strictEqual(res.valid, true);
});
