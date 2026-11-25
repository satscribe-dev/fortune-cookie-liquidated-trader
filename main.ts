// Fortune Cookie for the Liquidated Trader
// make.fun bounty: u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
//
// The program writes one fortune cookie line to /output/entry.txt.
// The line was chosen from 10 candidates by pairwise comparison against
// the judge's brief: fortune voice + trading loss, rueful and warm joke,
// one breath, fresh turn (the double meaning of "10x"), oracular opening
// broken by the punchline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "The stars say your next 10x is coming\u2014right after you learn what 10x did to you.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
