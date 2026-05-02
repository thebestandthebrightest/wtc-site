import Image from "next/image";

import { CreationsGrid } from "../../components/CreationsGrid";
import { PageShell } from "../../components/PageShell";
import { creationsDoodles } from "../../components/site-data";

export default function CreationsPage() {
  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        {creationsDoodles.map((d) => (
          <Image
            key={d.src}
            className="creations-doodle"
            src={d.src}
            alt={d.alt}
            width={d.width}
            height={d.height}
            style={d.style}
          />
        ))}
        <CreationsGrid />
      </section>
    </PageShell>
  );
}
