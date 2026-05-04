import Link from "next/link";

import { PageShell } from "../../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell active="about">
      <main className="about-minimal">
        <section className="about-minimal__inner">
          <h1 className="about-minimal__statement">
            There wasn&apos;t a place for clay on campus.
            <span>Now there is.</span>
          </h1>

          <p className="about-minimal__signature">Wellness Through Clay</p>

          <Link href="/sign-up" className="about-minimal__cta">
            Sign up →
          </Link>
        </section>
      </main>
    </PageShell>
  );
}