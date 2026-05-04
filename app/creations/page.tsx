import fs from "fs";
import path from "path";

import { CreationsGrid } from "../../components/CreationsGrid";
import { PageShell } from "../../components/PageShell";

function altFromFilename(filename: string): string {
  return "Clay " + filename.replace(/\.png$/i, "").replace(/-/g, " ");
}

export default function CreationsPage() {
  const dir = path.join(process.cwd(), "public/assets/creations/clear-bg");
  const pieces = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".png"))
   const preferredOrder = [
    "alien.png",
    "axolotl.png",
    "frog-cowboy.png",
    "gremlin.png",

    "fruit-vase.png",
    "leaf-vase.png",
    "scorpion-cup.png",
    "elephant-cup.png",

    "elephant.png",
    "sea-turtle.png",
    "manta-ray.png",
    "monster.png",

    "fish-cigarette.png",
    "green-figure.png",
    "snake.png",
    "train-2.png",

    "duck-pond.png",
    "forest-dish.png",
    "panda-pond.png",
    "lemon-dish.png",

    "mushroom.png",
    "red-flower.png",
    "sun-spiral.png",
    "sun-tile.png",

    "strawberry-dish.png",
    "waffles-and-butter.png",
    "watermelon.png",

    "torso-sculpture.png",
    "dog-dish.png"
  ];

    const pieces = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith(".png"))
      .sort((a, b) => preferredOrder.indexOf(a) - preferredOrder.indexOf(b))
      .map((f) => ({
        key: f,
        src: `/assets/creations/clear-bg/${f}`,
        alt: altFromFilename(f),
      }));
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
