export function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="site-footer__link"
        href="https://www.instagram.com/ru_wellness_clay/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          className="icon-instagram"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
        <span>Instagram</span>
      </a>
      <a className="site-footer__plain" href="mailto:wellnessclay845@gmail.com">
        Email
      </a>
    </footer>
  );
}
