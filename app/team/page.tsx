import Image from "next/image";

import { PageShell } from "../../components/PageShell";
import { teamMembers } from "../../components/site-data";

export default function TeamPage() {
  return (
    <PageShell active="team">
      <section className="content-page team-page">
        <div className="team-page__intro">
          <h1 className="page-heading">Our Team</h1>
          <p className="team-page__lede">
            We bring different perspectives to the table, but we’re united by a
            love for purposeful work, thoughtful design, and real connection.
          </p>
        </div>
        <div className="team-spotlights">
          {teamMembers.map((member, idx) => (
            <section
              className={`team-spotlight${idx % 2 === 1 ? " team-spotlight--reversed" : ""}`}
              key={member.name}
            >
              <div className="team-spotlight__inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.imageSrc ?? ""}
                  alt={`${member.name} team portrait`}
                  className="team-portrait"
                />
                <div className="team-copy">
                  <h2 className="team-card__name">{member.name}</h2>
                  <p className="team-card__meta">{member.meta}</p>
                  <p
                    className={`team-card__bio${
                      member.bio === "Bio forthcoming."
                        ? " team-card__bio--muted"
                        : ""
                    }`}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
        <section className="team-photo-section">
          <h2 className="team-photo-section__title">Team Photos</h2>
          <div className="team-photo-section__grid">
            <figure className="team-photo-figure">
              <figcaption className="team-photo-figure__label">Team &apos;26</figcaption>
              <div className="team-photo-section__image">
                <Image
                  src="/assets/team/wtc-team-2026.png"
                  alt="Wellness Through Clay 2026 team photo"
                  width={1860}
                  height={1390}
                  sizes="(max-width: 1200px) 100vw, 960px"
                  className="team-photo"
                />
              </div>
            </figure>
            <figure className="team-photo-figure">
              <figcaption className="team-photo-figure__label">Team &apos;25</figcaption>
              <div className="team-photo-section__image">
                <Image
                  src="/assets/team/wtc-team-2025.png"
                  alt="Wellness Through Clay 2025 team photo"
                  width={1860}
                  height={1390}
                  sizes="(max-width: 1200px) 100vw, 960px"
                  className="team-photo"
                />
              </div>
            </figure>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
