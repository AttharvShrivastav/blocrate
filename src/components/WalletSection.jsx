import { content } from "../content";

const { wallet } = content;

export default function WalletSection() {
  return (
    <section className="wallet-section section-shell" id="features">
      {wallet.cards.map((card, i) => (
        <article
          key={i}
          className={`wallet-card wallet-card--${card.layout}`}
          data-animate="rise"
        >
          <div className="wallet-visual" aria-hidden="true">
            <img src={card.image} alt="" />
          </div>
          <div className="wallet-copy">
            <h2 className="split" data-split>
              {card.title}
            </h2>
            <p>{card.body}</p>
            {card.secondary && <p>{card.secondary}</p>}
          </div>
          <div className="gradient-rule card-rule" aria-hidden="true"></div>
        </article>
      ))}
    </section>
  );
}
