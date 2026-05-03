import { useEffect, useRef } from "react";
import { content } from "../content";

const { passport } = content;

export default function PassportSection() {
  const phoneRef = useRef(null);

  useEffect(() => {
    const phone = phoneRef.current;
    const gsap = window.gsap;
    if (!phone || !gsap) return;

    gsap.set(phone, { transformPerspective: 900 });

    const rotX = gsap.quickTo(phone, "rotateX", { duration: 0.55, ease: "power3.out" });
    const rotY = gsap.quickTo(phone, "rotateY", { duration: 0.55, ease: "power3.out" });

    const onMove = (e) => {
      const b = phone.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - 0.5;
      const y = (e.clientY - b.top) / b.height - 0.5;
      rotX(y * -11);
      rotY(x * 15);
    };

    const onLeave = () => {
      rotX(0);
      rotY(0);
    };

    phone.addEventListener("pointermove", onMove);
    phone.addEventListener("pointerleave", onLeave);

    return () => {
      phone.removeEventListener("pointermove", onMove);
      phone.removeEventListener("pointerleave", onLeave);
    };
  }, []);

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
        <div className="passport-phone" ref={phoneRef} data-animate="rise">
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
