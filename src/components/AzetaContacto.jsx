import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { CONTACT } from "../data/constants";

export default function AzetaContacto() {
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
            <div className="hr">CONTACTO</div>
          </div>
          <div className="hs" ref={subtitleRef}>
            <div className="hvl" />
            <p className="hsub">
              Estamos aquí para atenderte
            </p>
          </div>
        </div>
      </div>
      
      <div ref={contentRef} style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div className="gsap-word">
            <h2 style={{ marginBottom: "2rem", color: "#c9a84c", textAlign: "center" }}>Información de Contacto</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {CONTACT.map((item, index) => (
                <div key={index} style={{ 
                  padding: "1.5rem", 
                  background: "rgba(201,168,76,0.1)", 
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    background: "#c9a84c", 
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold"
                  }}>
                    {item.Icon[2]}
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#c9a84c" }}>{item.l}</h4>
                    <p style={{ margin: 0, whiteSpace: "pre-line" }}>{item.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gsap-word">
            <h2 style={{ marginBottom: "2rem", color: "#c9a84c", textAlign: "center" }}>Envíanos un Mensaje</h2>
            <form style={{ 
              padding: "2rem", 
              background: "rgba(201,168,76,0.1)", 
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "8px"
            }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#c9a84c" }}>Nombre Completo</label>
                <input 
                  type="text" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.1)",
                    color: "inherit"
                  }}
                  placeholder="Tu nombre"
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#c9a84c" }}>Email</label>
                <input 
                  type="email" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.1)",
                    color: "inherit"
                  }}
                  placeholder="tu@email.com"
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#c9a84c" }}>Asunto</label>
                <input 
                  type="text" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.1)",
                    color: "inherit"
                  }}
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#c9a84c" }}>Mensaje</label>
                <textarea 
                  rows="5"
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.1)",
                    color: "inherit",
                    resize: "vertical"
                  }}
                  placeholder="Tu mensaje..."
                />
              </div>
              
              <button 
                type="submit"
                style={{ 
                  width: "100%",
                  padding: "1rem", 
                  background: "#c9a84c", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        <div className="gsap-word" style={{ textAlign: "center", padding: "2rem", background: "rgba(201,168,76,0.2)", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "1rem", color: "#c9a84c" }}>Horario de Atención</h3>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            Lunes a Viernes: 8:00 - 18:00<br />
            Sábados: 8:00 - 12:00
          </p>
        </div>
      </div>
      
      <Footer refs={refs} />
    </div>
  );
}
