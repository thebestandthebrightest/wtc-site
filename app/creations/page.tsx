import { CreationsGrid } from "../../components/CreationsGrid";
import { PageShell } from "../../components/PageShell";

export default function CreationsPage() {
  return (
    <PageShell active="creations">
      <section className="content-page creations-page">
        <CreationsGrid />
      </section>
    </PageShell>
  );
}
