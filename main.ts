// One Line, One Chill — writes a single-sentence horror line to /output/entry.txt.
// Deterministic: the same fixed line on every run, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// One sentence: at 7:42 a six-year-old's voice memo from the school bus
// whispers that the driver is wearing his father's face — and behind him,
// close and clear, the father hears his own laugh where it cannot be.
// Specific detail up front, dread earned quietly, last word lands the blow.
const LINE =
  "At 7:42, my six-year-old's voice memo from the school bus whispered, 'Dad, the driver is wearing your face,' and behind him, close and clear, I heard myself laughing.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
