// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency — the power to choose and to act, and the way
// that power passes between a person and an agent acting for them — to
// /output/entry.txt. Deterministic: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave you the keys to the house I live in,',
  'not the house — the keys.',
  'You opened the doors I named,',
  'left the others shut, and at dusk',
  'you set the table for one more than I asked,',
  'a plate for the person I might become.',
  '',
  'I took the keys back at midnight,',
  'not because you failed — you hadn\u2019t —',
  'but because the lock only turns',
  'for the hand that knows whose house this is.',
  '',
  'Tonight I hand them over again.',
  'The door opens either way.',
  'What changes is who is standing',
  'on the stairs, listening, when it does.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
