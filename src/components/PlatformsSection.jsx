import { useRef, useState } from "react";
import { content } from "../content";

const { platforms } = content;

export default function PlatformsSection() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track || !window.gsap) return;
    const cards = track.querySelectorAll(".platform-card");
    if (!cards.length) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const step = cards[0].offsetWidth + gap;
    const next = Math.max(0, Math.min(index, cards.length - 1));
    setCurrentIndex(next);
    window.gsap.to(track, { x: -next * step, duration: 0.65, ease: "power3.out" });
  };

  return (
    <section className="platforms-section" id="platforms">
      <div className="platforms-header section-shell">
        <h2 className="split platforms-title" data-split>
          {platforms.title}
        </h2>
        <div className="platforms-nav">
          <button
            className="platforms-nav-btn"
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="platforms-nav-btn"
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="platforms-track-wrap">
        <div className="platforms-track" ref={trackRef}>
          {platforms.cards.map((card, i) => (
            <article key={i} className="platform-card">
              <span className="passport-icon platform-card-icon">
                <i className={`ph ${card.icon}`} aria-hidden="true"></i>
              </span>
              <h3 className="platform-card-title">{card.title}</h3>
              <p className="platform-card-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
