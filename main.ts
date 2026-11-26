// Charm the Commuter: one line of weather for a city that isn't.
//
// program/v1: this program writes exactly one text to /output/entry.txt and nothing else.
// Deterministic: the same bytes on every run (the grader runs it twice and compares).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry. A single plain string literal, 140 characters at most.
//
// Chosen over four alternatives (see evidence/RESULT.md): the ferry tracked by ear keeps
// broadcast-forecast grammar, names the place, and gives the town one piece of its own life.
// Tightened twice: "is coming in by sound" -> "arrives by sound" (every word earning its place).
const FORECAST = 'Quill Harbor, 9°: fog so thick the 6:15 ferry arrives by sound.';

// The grader mounts the output directory at /output and names it in MAKEFUN_OUTPUT_DIR;
// fall back to /output so the program also runs where the mount is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), FORECAST, 'utf8');
