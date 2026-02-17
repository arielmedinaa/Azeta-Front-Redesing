import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../data/constants';

function Navigation({ scrolled }) {
  const location = useLocation();
  
  const getRoutePath = (navItem) => {
    switch(navItem) {
      case 'Inicio': return '/';
      case 'Nosotros': return '/nosotros';
      case 'Empresas': return '/empresas';
      case 'Trabaja con Nosotros': return '/trabaja';
      case 'RSE': return '/rse';
      case 'Contacto': return '/contacto';
      default: return '/';
    }
  };

  return (
    <nav className={`nav ${scrolled ? "sc" : ""}`}>
      <div className="logo">
        <div className="lm">AZ</div>
        <span className="lw">Grupo Azeta</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em",
          color: "rgba(201,168,76,0.4)", textTransform: "uppercase" }}>PY · ES</span>
        <div style={{ width: 28, height: 1, background: "rgba(201,168,76,0.3)" }} />
      </div>
    </nav>
  );
}

export default Navigation;
