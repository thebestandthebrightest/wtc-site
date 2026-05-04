import Image from "next/image";

import { PageShell } from "../../components/PageShell";

export default function SignUpPage() {
  return (
    <PageShell active="sign-up">
      <section className="content-page signup-page">
        <div className="map-container fade-up delay-1">
          <Image
            className="signup-map"
            src="/assets/maps/wtc-location-map.png"
            alt="Wellness Through Clay Rutgers New Brunswick location map"
            width={2000}
            height={1125}
            sizes="(max-width: 960px) 100vw, 68vw"
          />
        </div>

        <div className="signup-aside fade-up delay-2">
            <p>
              The sign up form will be released in Fall 2026. Follow our{" "}
              <a
                href="https://www.instagram.com/ru_wellness_clay/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
              for updates.
            </p>
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
              <strong>Instagram:</strong>
              <br />
              <a href="https://instagram.com/RU_Wellness_Clay" target="_blank" rel="noreferrer">
                @RU_Wellness_Clay
              </a>
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
