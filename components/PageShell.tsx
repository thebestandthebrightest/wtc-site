import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";
import type { NavKey } from "./site-data";

export function PageShell({
  active,
  children
}: {
  active?: NavKey;
  children: ReactNode;
}) {
  return (
    <div className="page-shell">
      <div className="page-shell__inner">
        <SiteHeader active={active} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
