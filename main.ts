import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line. A cat knocks the phone off the table, watches the screen
// crack, then blames the owner with a look — setup, turn, punchline, done.
const LINE =
  "My cat shoved my phone off the table, watched the screen crack, then looked at me like I was the clumsy one.";

const outFile = join("/output", "entry.txt");

// Gate self-check: the sealed scorer only accepts 1-200 characters of
// non-whitespace UTF-8 text, so fail loudly here rather than ship invalid.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`LINE must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// The deliverable is the file, not the console: nothing is printed.
