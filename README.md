# Charm the Commuter: Forecast a City That Isn't

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/satriax30-commits/makefun-commuter-forecast/rank.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/satriax30-commits/makefun-commuter-forecast/reward.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

A make.fun entry for the bounty **Charm the Commuter: Forecast a City That Isn't**. The program writes one line of weather forecast (at most 140 characters) for a city that does not exist — naming the place, giving it weather, and making a bored commuter smile on the way to work.

## The entry

> In Umbraville, light rain all morning, clearing by lunch — the 8:15 bus, however, remains missing, presumed late.

113 characters, one line.

## Why this line

Four candidates were considered against the judge's criteria (in order: reads as a one-line forecast for a nonexistent city with the weather the whole point; makes a bored commuter smile; keeps broadcast-forecast register; one concrete detail; every word earns its place):

- **A — Nimbleshire:** light drizzle, "a 90% chance the 8:15 bus is already gone — bring an umbrella and a backup excuse" (130 chars). Two jokes competing for attention; the second one dilutes the first.
- **B — Cloudhaven:** sunny intervals, toast-scented breeze, rush hour delayed by very slow ducks (135 chars). The ducks steal the line and the weather stops being the point; quirky for its own sake.
- **C — Mistport:** grey skies, light rain, "a 40% chance your umbrella inverts" (130 chars). Relatable, but "laugh it off" lectures the commuter into smiling instead of earning it.
- **D — Umbraville (chosen):** rain all morning, clearing by lunch, and the 8:15 bus "missing, presumed late" (113 chars). The broadcast rhythm stays intact and only bends at the last clause; the joke is a single sharp turn of phrase on official language; the 8:15 bus is the concrete detail that makes the city feel lived-in; no word is wasted.

## How it runs

`main.ts` (Node 22, stdlib only, deterministic — no network, no wall clock, no randomness) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` when set), validates it is 1–140 characters, a single line, and not only whitespace, then reads it back and checks it matches exactly.

Run it with:

```sh
node main.ts
```
