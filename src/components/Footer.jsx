import { content } from "../content";

const { cta, footer, nav } = content;

export default function Footer() {
  return (
    <footer className="site-footer">
      <img
        className="footer-bg-img"
        src="assets/footer-bg.png"
        alt=""
        aria-hidden="true"
      />
      <div className="footer-inner section-shell">
        <div className="footer-glass">
          <div className="footer-cta-row">
            <div className="footer-card-copy">
              <h2>{cta.title}</h2>
              <p>{cta.body}</p>
            </div>
            <div className="footer-card-action">
              <a className="button button-primary" href="#waitlist">
                <span>{cta.primaryCta}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h13m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="gradient-rule footer-rule" aria-hidden="true"></div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-brand-block">
            <a className="brand footer-brand-wordmark" href="#">
              <img className="brand-logo" src="assets/blocrate-logo.png" alt="Blocrate" />
            </a>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>

          <div className="footer-social" role="list" aria-label="Social links">
            {footer.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`ph ${s.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
