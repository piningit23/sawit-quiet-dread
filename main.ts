// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
// Writes the comment to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "LGTM. Tests pass, the diff is clean, and in six months someone will open this file, sigh, and quietly close it again. Probably me.";

// The gate only accepts one line of 1-140 characters: fail loudly here
// rather than shipping a comment the scorer would refuse.
if (comment.length < 1 || comment.length > 140 || comment.includes("\n")) {
  throw new Error(
    `comment must be one line of 1-140 characters, got ${comment.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), comment, "utf8");
