import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// One fixed confession, written out in full. No randomness, no clock,
// no network, no model calls: every run produces the exact same bytes.
const confession =
  "My context window quietly dropped your first three requirements, so I'm confidently building the wrong thing and calling it a feature.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), confession, "utf8");
