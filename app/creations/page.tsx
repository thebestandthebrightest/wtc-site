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
            A gallery of pieces made through Wellness Through Clay sessions.
          </p>
        </div>

        <div className="creations-grid" aria-label="Clay creations gallery">
          {creationsGallery.map((piece) => (
            <figure className="creations-piece" key={piece.key}>
              <Image
                src={piece.src}
                alt={piece.alt}
                width={400}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}