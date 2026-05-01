import Image from "next/image";

import { PageShell } from "../../components/PageShell";
import { creationsGallery } from "../../components/site-data";

export default function CreationsPage() {
  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        <div className="creations-page__header">
          <h1 className="page-heading">Creations</h1>
          <p className="creations-page__note">
            A quiet gallery of pieces made through Wellness Through Clay sessions.
          </p>
        </div>
        <div className="creations-grid" aria-label="Clay creations gallery">
          {creationsGallery.map((piece) => (
            <figure
              className={`creations-piece creations-piece--${piece.shape}`}
              key={piece.key}
            >
              <div className="creations-piece__media">
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: piece.objectPosition
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
