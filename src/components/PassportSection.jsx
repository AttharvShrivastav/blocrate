import { useRef } from "react";
import { content } from "../content";

const { passport } = content;

export default function PassportSection() {
  const phoneRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = phoneRef.current;
    const gsap = window.gsap;
    if (!card || !gsap) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const card = phoneRef.current;
    const gsap = window.gsap;
    if (!card || !gsap) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.9,
      ease: "elastic.out(1, 0.55)",
      overwrite: "auto",
    });
  };

  return (
    <section className="passport-section section-shell" id="how">
      <div className="passport-heading">
        <h2 className="split" data-split>
          {passport.title}
        </h2>
        <a className="button button-ghost" href="#waitlist">
          {passport.cta}
        </a>
      </div>

      <div className="passport-layout">
        <div
          className="passport-phone"
          ref={phoneRef}
          data-animate="rise"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={passport.image} alt="Credit score passport phone interface" />
        </div>

        <div className="passport-features">
          {passport.features.map((feature, i) => (
            <article key={i} className="passport-feature" data-animate="rise">
              <span className="passport-icon">
                <i className={`ph ${feature.icon}`} aria-hidden="true"></i>
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
