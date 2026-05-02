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
    .sort()
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
