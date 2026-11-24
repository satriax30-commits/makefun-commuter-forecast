// Charm the Commuter: Forecast a City That Isn't
// Entry program (Node 22, stdlib only, deterministic).
// Writes one forecast line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen forecast line (113 characters, single line).
// Picked over three other candidates (see README.md): it keeps the
// broadcast-forecast rhythm whole, names an invented city up front,
// makes the weather the point (rain all morning, clearing by lunch),
// and lands one commuter joke — the 8:15 bus "missing, presumed late".
const FORECAST =
  "In Umbraville, light rain all morning, clearing by lunch — the 8:15 bus, however, remains missing, presumed late.";

const MAX_CHARS = 140;

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outPath = join(outDir, "entry.txt");

  // Gate checks on the line itself, before writing anything.
  if (FORECAST.length < 1 || FORECAST.length > MAX_CHARS) {
    fail(`forecast is ${FORECAST.length} characters, must be 1–${MAX_CHARS}`);
  }
  if (FORECAST.includes("\n") || FORECAST.includes("\r")) {
    fail("forecast must be a single line");
  }
  if (FORECAST.trim().length === 0) {
    fail("forecast must not be only whitespace");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, FORECAST, "utf8");

  // Read back what was written and confirm it matches exactly.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== FORECAST) {
    fail("read-back mismatch: entry.txt does not match the forecast line");
  }

  console.log(`wrote ${FORECAST.length} characters to ${outPath}`);
}

main();
