import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
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
        <Navbar active={active} />
        <Logo />
        {children}
        <Footer />
      </div>
    </div>
  );
}
