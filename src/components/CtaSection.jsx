import { content } from "../content";

const { cta } = content;

export default function CtaSection() {
  return (
    <section className="cta-section section-shell" id="waitlist">
      <img className="cta-bg" src={cta.image} alt="" aria-hidden="true" />
      <div className="cta-card" data-animate="rise">
        <div className="cta-copy">
          <h2 className="split" data-split>
            {cta.title}
          </h2>
          <p>{cta.body}</p>
        </div>
        <div className="cta-actions">
          <a className="button button-ghost" href="#features">
            {cta.secondaryCta}
          </a>
          <a className="button button-primary" href="#waitlist">
            <span>{cta.primaryCta}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
