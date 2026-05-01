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
          {teamMembers.map((member, index) => {
            const reverse = index % 2 === 1;
            const textOnly = !member.imageSrc;

            return (
              <article
                className={`team-spotlight${
                  reverse ? " team-spotlight--reverse" : ""
                }${textOnly ? " team-spotlight--text-only" : ""}`}
                key={`${member.name}-${member.role}`}
              >
                {member.imageSrc ? (
                  <div className="team-spotlight__media">
                    <div className="team-spotlight__frame">
                      <Image
                        src={member.imageSrc}
                        alt={member.imageAlt ?? `${member.name} portrait`}
                        fill
                        sizes="(max-width: 960px) 100vw, 520px"
                        style={{
                          objectFit: "cover",
                          objectPosition: member.imagePosition ?? "center top"
                        }}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="team-spotlight__content">
                  <h2 className="team-card__name">{member.name}</h2>
                  <h3 className="team-card__role">{member.role}</h3>
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
              </article>
            );
          })}
        </div>
        <section className="team-photo-section">
          <h2 className="team-photo-section__title">Team 2025</h2>
          <div className="team-photo-section__image">
            <Image
              src="/assets/team/wtc-team-2025.png"
              alt="Wellness Through Clay team photo"
              width={1860}
              height={1390}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="team-photo"
            />
          </div>
        </section>
      </section>
    </PageShell>
  );
}
