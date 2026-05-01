import { PageShell } from "../../components/PageShell";
import { aboutParagraphs } from "../../components/site-data";

export default function AboutPage() {
  return (
    <PageShell active="about">
      <section className="content-page about-page">
        <h1 className="page-heading">About</h1>
        <div className="about-copy">
          <p>
            {aboutParagraphs[0][0]}
            <span className="about-copy__underline">{aboutParagraphs[0][1]}</span>
          </p>
          <p>
            <span className="about-copy__underline">{aboutParagraphs[1][0]}</span>
          </p>
          <p>
            {aboutParagraphs[2][0]}
            <span className="about-copy__underline">{aboutParagraphs[2][1]}</span>
            {aboutParagraphs[2][2]}
          </p>
          <p>{aboutParagraphs[3][0]}</p>
          <p>{aboutParagraphs[4][0]}</p>
          <p>
            <span className="about-copy__underline">{aboutParagraphs[5][0]}</span>
          </p>
          <p>{aboutParagraphs[6][0]}</p>
          <p>{aboutParagraphs[7][0]}</p>
          <p>{aboutParagraphs[8][0]}</p>
          <p>{aboutParagraphs[9][0]}</p>
        </div>
      </section>
    </PageShell>
  );
}
