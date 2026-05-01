import Link from "next/link";

import { navLinks, type NavKey } from "./site-data";

export function Navbar({ active }: { active?: NavKey }) {
  return (
    <nav className="site-navbar" aria-label="Primary">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={active === link.key ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
