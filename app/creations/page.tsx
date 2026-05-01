import Image from "next/image";
import { PageShell } from "../../components/PageShell";
import { creationsGallery } from "../../components/site-data";

export default function CreationsPage() {
  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        <div className="creations-hero">
          <h1 className="creations-title">Creations</h1>
          <p className="creations-subtext">
            A gallery of pieces made through Wellness Through Clay sessions.
          </p>
        </div>

        <div className="creations-grid" aria-label="Clay creations gallery">
          {creationsGallery.map((piece) => (
            <figure className="creations-item" key={piece.key}>
              <Image
                src={piece.src}
                alt={piece.alt}
                width={400}
                height={400}
                sizes="(max-width: 640px) 50vw, (max-width: 960px) 25vw, 220px"
              />
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}