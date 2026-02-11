import { NAV } from '../data/constants';

function Navigation({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? "sc" : ""}`}>
      <div className="logo">
        <div className="lm">AZ</div>
        <span className="lw">Grupo Azeta</span>
      </div>
      <div className="nl">
        {NAV.map(n => (
          <span key={n} className={`nl-a ${n === "Nosotros" ? "active" : ""}`}>{n}</span>
        ))}
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
