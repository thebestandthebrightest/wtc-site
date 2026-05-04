import fs from "fs";
import path from "path";

import { CreationsGrid } from "../../components/CreationsGrid";
import { PageShell } from "../../components/PageShell";

function altFromFilename(filename: string): string {
  return "Clay " + filename.replace(/\.png$/i, "").replace(/-/g, " ");
}

export default function CreationsPage() {
  const dir = path.join(process.cwd(), "public/assets/creations/clear-bg");

const preferredOrder = [
  // ROW 1 — HERO (strong, balanced)
  "alien.png",
  "axolotl.png",
  "frog-cowboy.png",
  "monster.png",

  // ROW 2 — COLORFUL + COMPACT (no clipping)
  "duck-pond.png",
  "forest-dish.png",
  "panda-pond.png",
  "lemon-dish.png",

  // ROW 3 — ANIMALS (varied but stable)
  "elephant.png",
  "manta-ray.png",
  "sea-turtle.png",
  "dog-dish.png",

  // ROW 4 — FUN / WEIRD (smaller pieces belong here)
  "fish-cigarette.png",
  "snake.png",
  "gremlin.png",
  "green-figure.png",

  // ROW 5 — TALL PIECES (safe to scroll now)
  "fruit-vase.png",
  "leaf-vase.png",
  "scorpion-cup.png",
  "elephant-cup.png",

  // ROW 6 — STATEMENT / SHAPES
  "mushroom.png",
  "sun-tile.png",
  "red-flower.png",
  "sun-spiral.png",

  // ROW 7 — LIGHT / PLAYFUL END
  "strawberry-dish.png",
  "waffles-and-butter.png",
  "watermelon.png",
  "torso-sculpture.png"
];

  const pieces = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".png"))
    .sort((a, b) => {
      const ai = preferredOrder.indexOf(a);
      const bi = preferredOrder.indexOf(b);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    })
    .map((f) => ({
      key: f,
      src: `/assets/creations/clear-bg/${f}`,
      alt: altFromFilename(f),
    }));

  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        <CreationsGrid pieces={pieces} />
      </section>
    </PageShell>
  );
}