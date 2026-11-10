const test = require("node:test");
const assert = require("node:assert");

test("health response shape contract", () => {
  const healthData = {
    status: "ok",
    app: "SpasiZalogaj",
    timestamp: new Date().toISOString(),
  };

  assert.strictEqual(healthData.status, "ok");
  assert.strictEqual(healthData.app, "SpasiZalogaj");
  assert.ok(typeof healthData.timestamp === "string");
});
