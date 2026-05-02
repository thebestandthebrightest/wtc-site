import Link from "next/link";

import { PageShell } from "../components/PageShell";
import { HomeDoodles } from "../components/HomeDoodles";

export default function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        <HomeDoodles />
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