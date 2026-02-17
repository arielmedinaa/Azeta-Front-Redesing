import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function AzetaEmpresas() {
  const [gsapReady, setGsapReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const refs = {
    heroRef,
    titleRef,
    subtitleRef,
    contentRef,
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

      const tl = gsap.timeline({ delay: 0.15 });

      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".gsap-char");
        tl.fromTo(chars,
          { y: 130, opacity: 0, rotationX: -85, transformOrigin: "50% 100% -40px" },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.025, ease: "power4.out" }, 0.35);
      }

      if (subtitleRef.current) {
        const words = subtitleRef.current.querySelectorAll(".gsap-word");
        tl.fromTo(words,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.055, ease: "power3.out" }, 1.0);
      }

      if (contentRef.current) {
        gsap.fromTo(contentRef.current.querySelectorAll(".gsap-word"),
          { y: 38, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.035, ease: "power3.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 78%" } });
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
      <div className="hero" ref={heroRef}>
        <div className="hc">
          <div className="ht" ref={titleRef} style={{ perspective: "900px" }}>
            <div className="hr">EMPRESAS</div>
          </div>
          <div className="hs" ref={subtitleRef}>
            <div className="hvl" />
            <p className="hsub">
              Conoce nuestras empresas del grupo
            </p>
          </div>
        </div>
      </div>
      
      <div ref={contentRef} style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p className="gsap-word" style={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "center", marginBottom: "2rem" }}>
          Grupo Azeta está conformado por 17 empresas que operan sinérgicamente en diferentes sectores económicos de Paraguay, generando valor y desarrollo sostenible.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
          {Array.from({ length: 17 }, (_, i) => (
            <div key={i} className="gsap-word" style={{ 
              padding: "2rem", 
              background: "rgba(201,168,76,0.1)", 
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "8px",
              textAlign: "center"
            }}>
              <h3 style={{ marginBottom: "1rem", color: "#c9a84c" }}>Empresa {i + 1}</h3>
              <p>Descripción de la empresa del grupo Azeta</p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer refs={refs} />
    </div>
  );
}
