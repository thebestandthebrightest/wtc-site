"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks, type NavKey } from "./site-data";

export function SiteHeader({ active }: { active?: NavKey }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
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

        <div className="site-header__mobile-bar">
          <button
            type="button"
            className="site-header__menu-button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay${menuOpen ? " mobile-nav-overlay--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        id="mobile-navigation-menu"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="mobile-nav-overlay__header">
          <button
            type="button"
            className="mobile-nav-overlay__close"
            aria-label="Close navigation"
            onClick={(event) => {
              event.stopPropagation();
              setMenuOpen(false);
            }}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-nav-overlay__nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active === link.key ? "page" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                setMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
