import Image from "next/image";

import { PageShell } from "../../components/PageShell";
import { teamMembers } from "../../components/site-data";

function teamMemberSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function TeamPage() {
  const teamRows = teamMembers.reduce<Array<typeof teamMembers>>((rows, member, index) => {
    if (index % 2 === 0) {
      rows.push([member]);
    } else {
      rows[rows.length - 1]?.push(member);
    }

    return rows;
  }, []);

  return (
    <PageShell active="team">
      <section className="content-page team-page">
        <div className="team-hero">
        </div>
        <div className="team-grid">
          {teamRows.map((row, rowIndex) => (
            <div
              className={`team-row team-row--${rowIndex + 1}${
                row.length === 1 ? " team-row--single" : ""
              }`}
              key={`team-row-${rowIndex + 1}`}
            >
              {row.map((member) => (
                <section className="team-spotlight" key={member.name}>
                  <div className="team-spotlight__inner">
                    <div className="team-portrait-slot">
                      <div className="team-portrait-frame">
                        <div
                          className={`team-portrait-canvas team-portrait-canvas--${teamMemberSlug(
                            member.name
                          )}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={member.imageSrc ?? ""}
                            alt={`${member.name} team portrait`}
                            className="team-portrait"
                          />
                        </div>
                      </div>
                    </div>
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
