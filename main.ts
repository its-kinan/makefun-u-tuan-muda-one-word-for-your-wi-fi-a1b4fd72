// One Word for Your Wi-Fi — make.fun entry (program/v1, Node 22+ TypeScript).
//
// The word: "Ghosting".
// Home Wi-Fi ghosts you: full bars one second, gone mid-sentence the next —
// it reads your message, shows up when it feels like it, and vanishes the
// moment you actually need it. A relationship word for a relationship
// problem, instantly understood, and it works as a network name.
//
// Deterministic by construction: no network, no clock, no randomness —
// the same fixed word is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// Gate self-check (mirrors the sealed scorer): UTF-8 text of 1 to 20
// characters, not only white space, a single line with no trailing newline.
// Fail loudly instead of ever writing an invalid entry.
if (
  [...WORD].length < 1 ||
  [...WORD].length > 20 ||
  WORD.trim().length === 0 ||
  WORD.includes("\n")
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
