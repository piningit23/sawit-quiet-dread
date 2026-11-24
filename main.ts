// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
// Writes the comment to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "LGTM. Tests pass, the diff is clean, and in six months someone will read this function and sigh quietly. Probably me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), comment, "utf8");
