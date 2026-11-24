// One-Liner Laugh Lab — entry for make.fun
// Writes one short funny line (the robot vacuum's excuse after eating a sock)
// to /output/entry.txt. The bounty gate accepts UTF-8 text of 1-200
// characters that is not only whitespace, so the program checks its own
// line against that gate before writing it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I beeped twice. It wouldn't move. Natural selection did the rest.";

if (LINE.trim().length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line fails the gate: must be one line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
