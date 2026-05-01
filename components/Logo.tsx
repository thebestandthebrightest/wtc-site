import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="site-logo" href="/" aria-label="Wellness Through Clay home">
      <Image
        src="/assets/logo/wtc-logo.png"
        alt="Wellness Through Clay logo"
        width={64}
        height={64}
      />
    </Link>
  );
}
