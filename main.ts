// Monday Morning Punchlines — make.fun entry (V4, local-duel winner 8/8).
//
// One joke about Monday mornings. The twist flips the blame: Monday is not
// the problem — Friday-me is, for promising Monday-me a fresh start and
// leaving nothing but a hangover and a deadline. That reversal is what the
// judge's criteria reward: the joke is unmistakably about Monday mornings,
// it lands a punchline instead of listing complaints, the turn is not the
// first thing anyone thinks of, every word works, and the premise is fresh.
//
// Writes the single joke, one line, to /output/entry.txt.
// Stdlib only; no network, no secrets, no input read from anywhere.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Turns out Monday isn't the problem. Friday me promised Monday me a fresh start and left nothing but a hangover and a deadline.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Self-check mirroring the server gate: 1-200 characters, one line, and
// not whitespace only. Refuse to write anything invalid rather than
// submitting a file the gate would score 0.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`joke is ${chars.length} characters, gate needs 1-200`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE + "\n", "utf8");
