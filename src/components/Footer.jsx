import { useRef } from "react";
import { NAV, CONTACT } from '../data/constants';
import * as Icons from "react-icons/md";

function Footer({ refs }) {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={15} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0, marginTop: 2 }} /> : null;
  };

  return (
    <footer className="foot" ref={refs.footerRef}>
      <div className="fg">
        <div className="fc">
          <div className="logo" style={{ marginBottom: "1.25rem" }}>
            <div className="lm">AZ</div>
            <span className="lw">Grupo Azeta</span>
          </div>
          <p className="ft">Comprometidos con el desarrollo económico y social del Paraguay.</p>
        </div>
        <div className="fc">
          <div className="fct">Navegación</div>
          {NAV.map(n => <span key={n} className="fl">{n}</span>)}
        </div>
        <div className="fc">
          <div className="fct">Contacto</div>
          {CONTACT.map(c => (
            <div key={c.l} className="fcr">
              {getIcon(c.Icon)}
              <div>
                <span className="fcl">{c.l}</span>
                <span className="fcv" style={{ whiteSpace: "pre-line" }}>{c.v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fb">
        <span className="copy">© 2026 Azeta · Todos los derechos reservados</span>
        <span className="copy" style={{ color: "rgba(201,168,76,0.3)" }}>Asunción · Paraguay</span>
      </div>
    </footer>
  );
}

export default Footer;
