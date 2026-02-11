import { useRef } from "react";
import { SplitWords } from '../utils/SplitText.jsx';

function About({ refs }) {
  return (
    <section className="about" ref={refs.aboutRef}>
      <div className="about-in">
        <div className="an-col">
          <div className="an-ring" />
          <div className="an" ref={refs.aboutNumRef}>70+</div>
          <span className="an-lbl">años de trayectoria</span>
        </div>
        <div>
          <div className="ey">Sobre nosotros</div>
          <h2 className="ah">
            Una plataforma que{" "}
            <em style={{ color: "#C9A84C" }}>sinergiza</em>{" "}
            múltiples modelos de negocio
          </h2>
          <div ref={refs.aboutTxtRef}>
            <p className="ab">
              <SplitWords text="Con más de 70 años, el Grupo AZETA es una plataforma empresarial que sostiene, sinergiza y amplifica múltiples modelos de negocios dentro de un proceso orgánico logrando inteligencia de mercado, escala de negociación, atracción y capacitación de recursos humanos." />
            </p>
            <p className="ab" style={{ marginTop: "1.2rem" }}>
              <SplitWords text="Nuestra experiencia desarrollando negocios sustentables y rentables nos ha convertido en los socios estratégicos para el desarrollo de nuevos negocios en Paraguay." />
            </p>
          </div>
          <div ref={refs.aboutLineRef} className="gr" style={{ marginTop: "2.5rem", maxWidth: 220 }} />
        </div>
      </div>
    </section>
  );
}

export default About;
