import { content } from "../content";

const { hero } = content;

export default function ProofStrip() {
  return (
    <section className="proof-strip section-shell" aria-label="Trusted by">
      {hero.proof.map((item) => (
        <span key={item} data-animate="fade">
          {item}
        </span>
      ))}
    </section>
  );
}
