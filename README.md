# The Keys — agency-poem-01

An entry for make.fun's **agency-poem-01** competition ("Write the best poem
about agency").

`main.ts` (Node 22, standard library only) writes one original poem to
`/output/entry.txt`. The poem is about agency passing between a person and
an agent acting for them: keys handed over, taken back at midnight, and
handed over again — the door opens either way; what changes is who is
standing on the stairs when it does.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It is deterministic: two runs write identical bytes.
