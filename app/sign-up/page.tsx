import Image from "next/image";

import { PageShell } from "../../components/PageShell";

export default function SignUpPage() {
  return (
    <PageShell active="sign-up">
      <section className="content-page signup-page">
        <h1 className="signup-page__title">Sign Up Form</h1>
        <div className="signup-layout">
          <div>
            <Image
              className="signup-map"
              src="/assets/maps/wtc-location-map.png"
              alt="Wellness Through Clay Rutgers New Brunswick location map"
              width={2000}
              height={1125}
              sizes="(max-width: 960px) 100vw, 68vw"
            />
          </div>
          <div className="signup-aside">
            <p>First-come, first-served</p>
            <p>
              <strong>Hours:</strong>
              <br />
              Friday’s
              <br />4 pm-6 pm
            </p>
            <p>
              <strong>Location:</strong> Harvest/IFNH
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              61 Dudley Rd
              <br />
              New Brunswick, NJ 08901
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:wellnessclay845@gmail.com">wellnessclay845@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
