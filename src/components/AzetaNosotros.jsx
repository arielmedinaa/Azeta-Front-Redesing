import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Stats from "./Stats";
import Sectors from "./Sectors";
import Manifesto from "./Manifesto";
import Footer from "./Footer";

export default function AzetaNosotros() {
  const [gsapReady, setGsapReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const heroRef = useRef(null);
  const hTitleRef = useRef(null);
  const hSubRef = useRef(null);
  const hBadgeRef = useRef(null);
  const hLineRef = useRef(null);
  const hScrollRef = useRef(null);
  const pLayer1 = useRef(null);
  const pLayer2 = useRef(null);
  const pLayer3 = useRef(null);
  const floatA = useRef(null);
  const floatB = useRef(null);
  const aboutRef = useRef(null);
  const aboutNumRef = useRef(null);
  const aboutTxtRef = useRef(null);
  const aboutLineRef = useRef(null);
  const statsRef = useRef(null);
  const sectorsRef = useRef(null);
  const manifestoRef = useRef(null);
  const footerRef = useRef(null);

  const refs = {
    heroRef,
    hTitleRef,
    hSubRef,
    hBadgeRef,
    hLineRef,
    hScrollRef,
    pLayer1,
    pLayer2,
    pLayer3,
    floatA,
    floatB,
    aboutRef,
    aboutNumRef,
    aboutTxtRef,
    aboutLineRef,
    statsRef,
    sectorsRef,
    manifestoRef,
    footerRef,
  };

  useEffect(() => {
    const load = src => new Promise(res => {
      if (document.querySelector(`script[src="${src}"]`)) return res();
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      document.head.appendChild(s);
    });

    load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
      .then(() => load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"))
      .then(() => setGsapReady(true));
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!gsapReady) return;
    const { gsap } = window;
    const ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    const ctx = gsap.context(() => {

      gsap.to(pLayer1.current, { y: "18%", ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2.2 } });
      gsap.to(pLayer2.current, { y: "45%", x: "-6%", ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.3 } });
      gsap.to(pLayer3.current, { y: "75%", ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.7 } });
      gsap.to(floatA.current, { x: 70, y: -90, rotation: 30, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.8 } });
      gsap.to(floatB.current, { x: -50, y: 55, rotation: -18, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.1 } });

      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(hBadgeRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0);

      tl.fromTo(hLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: "expo.inOut", transformOrigin: "left" }, 0.2);

      if (hTitleRef.current) {
        const chars = hTitleRef.current.querySelectorAll(".gsap-char");
        tl.fromTo(chars,
          { y: 130, opacity: 0, rotationX: -85, transformOrigin: "50% 100% -40px" },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.025, ease: "power4.out" }, 0.35);
      }

      if (hSubRef.current) {
        const words = hSubRef.current.querySelectorAll(".gsap-word");
        tl.fromTo(words,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.055, ease: "power3.out" }, 1.0);
      }

      tl.fromTo(hScrollRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 1.5);

      gsap.to(aboutNumRef.current, { y: -100, ease: "none",
        scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "bottom top", scrub: 1.4 } });
      gsap.fromTo(aboutLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut",
        transformOrigin: "left",
        scrollTrigger: { trigger: aboutRef.current, start: "top 72%" } });
      if (aboutTxtRef.current) {
        gsap.fromTo(aboutTxtRef.current.querySelectorAll(".gsap-word"),
          { y: 38, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.035, ease: "power3.out",
            scrollTrigger: { trigger: aboutTxtRef.current, start: "top 78%" } });
      }

      if (statsRef.current) {
        statsRef.current.querySelectorAll(".stat-item").forEach((el, i) => {
          gsap.fromTo(el,
            { x: i % 2 === 0 ? -110 : 110, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.95, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 83%" } });
        });
        gsap.to(statsRef.current.querySelector(".wm"), { x: "-10%", ease: "none",
          scrollTrigger: { trigger: statsRef.current, start: "top bottom", end: "bottom top", scrub: 1.1 } });
      }

      if (sectorsRef.current) {
        gsap.fromTo(sectorsRef.current.querySelectorAll(".gsap-char"),
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power4.out",
            scrollTrigger: { trigger: sectorsRef.current, start: "top 85%" } });
        gsap.fromTo(sectorsRef.current.querySelectorAll(".sector-card"),
          { y: 110, opacity: 0, scale: 0.86 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: { amount: 1, from: "start" },
            ease: "power3.out",
            scrollTrigger: { trigger: sectorsRef.current.querySelector(".sg"), start: "top 80%" } });
      }

      if (manifestoRef.current) {
        gsap.fromTo(manifestoRef.current.querySelectorAll(".gsap-word"),
          { y: 55, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.05, stagger: 0.055, ease: "power3.out",
            scrollTrigger: { trigger: manifestoRef.current, start: "top 78%" } });
        gsap.to(manifestoRef.current.querySelector(".mbg"), { y: -70, scale: 1.18, ease: "none",
          scrollTrigger: { trigger: manifestoRef.current, start: "top bottom", end: "bottom top", scrub: 1.6 } });
      }

      if (footerRef.current) {
        gsap.fromTo(footerRef.current.querySelectorAll(".fc"),
          { y: 55, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 88%" } });
      }

    });
    return () => ctx.revert();
  }, [gsapReady]);

  return (
    <div className="root">
      <Navigation scrolled={scrolled} />
      <Hero refs={refs} />
      <About refs={refs} />
      <Stats refs={refs} />
      <Sectors refs={refs} />
      <Manifesto refs={refs} />
      <Footer refs={refs} />
    </div>
  );
}
