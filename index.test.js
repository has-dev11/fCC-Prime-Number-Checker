
const PrimeChecker = require("./index");
const assert = require("node:assert/strict");

assert.strictEqual(
  PrimeChecker.isPrime(5),
  true,
);

assert.strictEqual(
  PrimeChecker.isPrime(8),
  false,
);

assert.strictEqual(
  PrimeChecker.isPrime(11),
  true,
);

assert.strictEqual(
  PrimeChecker.isPrime(1),
  false,
);

assert.strictEqual(
  PrimeChecker.isPrime(-5),
  false,
);