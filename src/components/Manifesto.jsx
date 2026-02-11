import { useRef } from "react";
import { SplitWords } from '../utils/SplitText.jsx';

function Manifesto({ refs }) {
  return (
    <section className="manifesto" ref={refs.manifestoRef}>
      <div className="mbg" />
      <div style={{ position: "relative", zIndex: 2 }}>
        <span className="mq">"</span>
        <blockquote className="mt">
          <SplitWords text="Somos los socios estratégicos para el desarrollo de nuevos negocios en Paraguay — construyendo el futuro desde hace más de siete décadas." />
        </blockquote>
        <div className="mr" />
      </div>
    </section>
  );
}

export default Manifesto;
