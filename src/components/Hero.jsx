import { content } from "../content";

const { hero } = content;

export default function Hero() {
  return (
    <section className="hero section-shell group" id="home">
      {/* The Beam Element */}
      <div className="border-beam" aria-hidden="true"></div>

      <div className="hero-media" data-parallax="hero-media">
        <img src="assets/hero-bg.png" alt="" />
      </div>

      <div className="hero-copy" style={{ position: "relative", zIndex: 20 }}>
        <h1 className="split" data-split>
          {hero.title}
        </h1>
      </div>

      <div 
        className="hero-aside" 
        data-animate="fade" 
        style={{ position: "relative", zIndex: 20 }}
      >
        <p>{hero.body}</p>
        <div className="button-row">
          <a className="button button-ghost" href="#features">
            {hero.secondaryCta}
          </a>
          <a className="button button-primary" href="#waitlist">
            <span>{hero.primaryCta}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="gradient-rule hero-rule" aria-hidden="true"></div>
    </section>
  );
}