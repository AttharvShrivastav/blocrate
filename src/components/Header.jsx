import { content } from "../content";

const { nav } = content;

export default function Header() {
  return (
    <header className="site-header" data-animate="fade">
      <a className="brand" href="#home" aria-label="Blocrate home">
        <span>Blocrate</span>
        <i aria-hidden="true"></i>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#waitlist">
        Join waitlist
      </a>
      <div className="gradient-rule header-rule" aria-hidden="true"></div>
    </header>
  );
}
