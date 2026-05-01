import Image from "next/image";
import Link from "next/link";

import { PageShell } from "../components/PageShell";
import { homeDoodles } from "../components/site-data";

export default function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        {homeDoodles.map((asset) => (
          <Image
            key={asset.src}
            className="home-doodle"
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            sizes={`${asset.width}px`}
            style={asset.style}
          />
        ))}
        <div className="home-hero__content">
          <h1 className="home-hero__title">Wellness Through Clay</h1>
          <div className="home-hero__divider" aria-hidden="true" />
          <Link className="home-hero__button" href="/sign-up">
            sign up
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
