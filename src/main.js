import { content } from "./content.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <section class="hero section-shell" id="home">
    <div class="hero-media" data-parallax="hero-media">
      <img src="assets/hero-bg.png" alt="" />
    </div>

    <div class="hero-copy">
      <h1 class="split" data-split>${content.hero.title}</h1>
    </div>

    <div class="hero-aside" data-animate="fade">
      <p>${content.hero.body}</p>
      <div class="button-row">
        <a class="button button-ghost" href="#features">${content.hero.secondaryCta}</a>
        <a class="button button-primary" href="#waitlist">
          <span>${content.hero.primaryCta}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
    <div class="gradient-rule hero-rule" aria-hidden="true"></div>
  </section>

  <section class="proof-strip section-shell" aria-label="Trusted by">
    ${content.hero.proof.map((item) => `<span data-animate="fade">${item}</span>`).join("")}
  </section>

  <section class="wallet-section section-shell" id="features">
    ${content.wallet.cards
      .map(
        (card) => `
          <article class="wallet-card wallet-card--${card.layout}" data-animate="rise">
            <div class="wallet-visual" aria-hidden="true">
              <img src="${card.image}" alt="" />
            </div>
            <div class="wallet-copy">
              <h2 class="split" data-split>${card.title}</h2>
              <p>${card.body}</p>
              ${card.secondary ? `<p>${card.secondary}</p>` : ""}
            </div>
            <div class="gradient-rule card-rule" aria-hidden="true"></div>
          </article>
        `
      )
      .join("")}
  </section>

  <section class="passport-section section-shell" id="how">
    <div class="passport-heading">
      <h2 class="split" data-split>${content.passport.title}</h2>
      <a class="button button-ghost" href="#waitlist">${content.passport.cta}</a>
    </div>
    <div class="passport-layout">
      <div class="passport-phone" data-animate="rise">
        <img src="${content.passport.image}" alt="Credit score passport phone interface" />
      </div>
      <div class="passport-features">
        ${content.passport.features
          .map(
            (feature) => `
              <article class="passport-feature" data-animate="rise">
                <span class="passport-icon"><i class="ph ${feature.icon}" aria-hidden="true"></i></span>
                <div>
                  <h3>${feature.title}</h3>
                  <p>${feature.body}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="cta-section section-shell" id="waitlist">
    <div class="cta-card" data-animate="rise">
      <img class="cta-bg" src="${content.cta.image}" alt="" />
      <div class="cta-copy">
        <h2 class="split" data-split>${content.cta.title}</h2>
        <p>${content.cta.body}</p>
      </div>
      <div class="cta-actions">
        <a class="button button-ghost" href="#features">${content.cta.secondaryCta}</a>
        <a class="button button-primary" href="#waitlist">
          <span>${content.cta.primaryCta}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section class="platforms-section" id="platforms">
    <div class="platforms-header section-shell">
      <h2 class="split platforms-title" data-split>${content.platforms.title}</h2>
      <div class="platforms-nav">
        <button class="platforms-nav-btn" id="platforms-prev" aria-label="Previous">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="platforms-nav-btn" id="platforms-next" aria-label="Next">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
    <div class="platforms-track-wrap">
      <div class="platforms-track">
        ${content.platforms.cards
          .map(
            (card) => `
              <article class="platform-card">
                <span class="passport-icon platform-card-icon"><i class="ph ${card.icon}" aria-hidden="true"></i></span>
                <h3 class="platform-card-title">${card.title}</h3>
                <p class="platform-card-body">${card.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <img class="footer-bg-img" src="assets/footer-bg.png" alt="" aria-hidden="true" />
    <div class="footer-inner section-shell">

      <div class="footer-glass">

        <div class="footer-cta-row">
          <div class="footer-card-copy">
            <h2 class="split" data-split>${content.cta.title}</h2>
            <p>${content.cta.body}</p>
          </div>
          <div class="footer-card-action">
            <a class="button button-primary" href="#waitlist">
              <span>${content.cta.primaryCta}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div class="gradient-rule footer-rule" aria-hidden="true"></div>

        <nav class="footer-nav" aria-label="Footer navigation">
          ${content.nav.map((item) => `<a href="#">${item}</a>`).join("")}
        </nav>

        <div class="footer-brand-block">
          <a class="brand footer-brand-wordmark" href="#">
            Blocrate&nbsp;<i aria-hidden="true"></i>
          </a>
          <p class="footer-tagline">${content.footer.tagline}</p>
        </div>

        <div class="footer-social" role="list" aria-label="Social links">
          ${content.footer.social.map((s) => `
            <a href="${s.href}" aria-label="${s.label}" role="listitem" target="_blank" rel="noopener">
              <i class="ph ${s.icon}" aria-hidden="true"></i>
            </a>
          `).join("")}
        </div>

      </div>

    </div>
  </footer>
`;

const splitText = () => {
  document.querySelectorAll("[data-split]").forEach((node) => {
    const words = node.textContent.trim().split(/\s+/);
    node.innerHTML = words
      .map(
        (word) =>
          `<span class="word">${[...word]
            .map((char) => `<span class="char">${char}</span>`)
            .join("")}</span>`
      )
      .join(" ");
  });
};

const initCursorGlow = () => {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;
  window.addEventListener("pointermove", (event) => {
    glow.style.setProperty("--x", `${event.clientX}px`);
    glow.style.setProperty("--y", `${event.clientY}px`);
  });
};

const initHeroMouseParallax = () => {
  const hero = document.querySelector(".hero");
  const media = document.querySelector(".hero-media");
  const moveX = gsap.quickTo(media, "x", { duration: 0.7, ease: "power3.out" });
  const moveY = gsap.quickTo(media, "y", { duration: 0.7, ease: "power3.out" });
  const rotate = gsap.quickTo(media, "rotate", { duration: 0.8, ease: "power3.out" });
  const rotateX = gsap.quickTo(media, "rotateX", { duration: 0.9, ease: "power3.out" });
  const rotateY = gsap.quickTo(media, "rotateY", { duration: 0.9, ease: "power3.out" });

  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    moveX(x * 34);
    moveY(y * 22);
    rotate(x * 5.5);
    rotateX(y * -5);
    rotateY(x * 6);
  });

  hero.addEventListener("pointerleave", () => {
    moveX(0);
    moveY(0);
    rotate(0);
    rotateX(0);
    rotateY(0);
  });
};

const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("[data-animate='fade']", { autoAlpha: 0, y: 18 });
  gsap.set("[data-animate='rise']", { autoAlpha: 0, y: 48 });
  gsap.set(".char", { yPercent: 120, rotateX: -45, autoAlpha: 0 });

  gsap.timeline({ defaults: { ease: "power4.out" } })
    .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.9 })
    .to(".hero-media", { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1.3 }, 0.15)
    .to(".hero .char", { yPercent: 0, rotateX: 0, autoAlpha: 1, duration: 0.7, stagger: 0.012 }, 0.35)
    .to(".hero [data-animate='fade']", { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.55);

  document.querySelectorAll("[data-animate='fade'], [data-animate='rise']").forEach((item) => {
    gsap.to(item, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 84%",
      },
    });
  });

  document.querySelectorAll("section:not(.hero) [data-split]").forEach((heading) => {
    gsap.to(heading.querySelectorAll(".char"), {
      yPercent: 0,
      rotateX: 0,
      autoAlpha: 1,
      duration: 0.62,
      stagger: 0.008,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 78%",
      },
    });
  });

};

const initPlatformsCarousel = () => {
  const track = document.querySelector(".platforms-track");
  if (!track) return;

  const cards = document.querySelectorAll(".platform-card");
  let currentIndex = 0;

  const getCardStep = () => {
    const card = cards[0];
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    return card.offsetWidth + gap;
  };

  const goTo = (index) => {
    currentIndex = Math.max(0, Math.min(index, cards.length - 1));
    gsap.to(track, {
      x: -currentIndex * getCardStep(),
      duration: 0.65,
      ease: "power3.out",
    });
  };

  document.getElementById("platforms-prev").addEventListener("click", () => goTo(currentIndex - 1));
  document.getElementById("platforms-next").addEventListener("click", () => goTo(currentIndex + 1));
};

splitText();
initCursorGlow();
initHeroMouseParallax();
initAnimations();
initPlatformsCarousel();
