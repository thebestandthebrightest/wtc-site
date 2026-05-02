import Link from "next/link";

export function Logo() {
  return (
    <Link className="site-logo" href="/" aria-label="Wellness Through Clay home">
      <span className="site-logo__text">Wellness Through Clay</span>
    </Link>
  );
}
