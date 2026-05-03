import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import WalletSection from "./components/WalletSection";
import PassportSection from "./components/PassportSection";
import CtaSection from "./components/CtaSection";
import PlatformsSection from "./components/PlatformsSection";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

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

    const glow = document.querySelector(".cursor-glow");
    if (glow) {
      window.addEventListener("pointermove", (e) => {
        glow.style.setProperty("--x", `${e.clientX}px`);
        glow.style.setProperty("--y", `${e.clientY}px`);
      });
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-animate='fade']", { autoAlpha: 0, y: 18 });
    gsap.set("[data-animate='rise']", { autoAlpha: 0, y: 48 });
    gsap.set(".char", { yPercent: 120, rotateX: -45, autoAlpha: 0 });

    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.9 })
      .to(
        ".hero-media",
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1.3 },
        0.15
      )
      .to(
        ".hero .char",
        { yPercent: 0, rotateX: 0, autoAlpha: 1, duration: 0.7, stagger: 0.012 },
        0.35
      )
      .to(
        ".hero [data-animate='fade']",
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
        0.55
      );

    document
      .querySelectorAll("[data-animate='fade'], [data-animate='rise']")
      .forEach((item) => {
        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 84%" },
        });
      });

    document
      .querySelectorAll("section:not(.hero) [data-split]")
      .forEach((heading) => {
        gsap.to(heading.querySelectorAll(".char"), {
          yPercent: 0,
          rotateX: 0,
          autoAlpha: 1,
          duration: 0.62,
          stagger: 0.008,
          ease: "power4.out",
          scrollTrigger: { trigger: heading, start: "top 78%" },
        });
      });

    const hero = document.querySelector(".hero");
    const media = document.querySelector(".hero-media");
    if (hero && media) {
      const moveX = gsap.quickTo(media, "x", { duration: 0.7, ease: "power3.out" });
      const moveY = gsap.quickTo(media, "y", { duration: 0.7, ease: "power3.out" });
      const rotate = gsap.quickTo(media, "rotate", { duration: 0.8, ease: "power3.out" });
      const rotateX = gsap.quickTo(media, "rotateX", { duration: 0.9, ease: "power3.out" });
      const rotateY = gsap.quickTo(media, "rotateY", { duration: 0.9, ease: "power3.out" });

      const onMove = (e) => {
        const b = hero.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width - 0.5;
        const y = (e.clientY - b.top) / b.height - 0.5;
        moveX(x * 34);
        moveY(y * 22);
        rotate(x * 5.5);
        rotateX(y * -5);
        rotateY(x * 6);
      };
      const onLeave = () => {
        moveX(0); moveY(0); rotate(0); rotateX(0); rotateY(0);
      };

      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);

      return () => {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <WalletSection />
        <PassportSection />
        <CtaSection />
        <PlatformsSection />
      </main>
      <Footer />
    </>
  );
}
