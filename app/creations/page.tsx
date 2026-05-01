import Image from "next/image";

import { PageShell } from "../../components/PageShell";
import { creationsDoodles, creationsGallery } from "../../components/site-data";

export default function CreationsPage() {
  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        {creationsDoodles.map((asset) => (
          <Image
            key={asset.src}
            className="creations-doodle"
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            sizes={`${asset.width}px`}
            style={asset.style}
          />
        ))}
        <div className="creations-page__header">
          <h1 className="page-heading">Creations</h1>
          <p className="creations-page__note">
            A quiet gallery of pieces made through Wellness Through Clay sessions.
          </p>
        </div>
        <div className="creations-grid" aria-label="Clay creations gallery">
          {creationsGallery.map((piece) => (
            <figure className="creations-piece" key={piece.key}>
              <div className="creations-piece__media">
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
