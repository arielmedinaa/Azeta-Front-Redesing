import { useRef } from "react";
import { SplitChars } from '../utils/SplitText.jsx';
import { SECTORS } from '../data/constants';
import * as Icons from "react-icons/md";

function Sectors({ refs }) {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={22} /> : null;
  };

  return (
    <section className="sectors" ref={refs.sectorsRef}>
      <div className="sec-hd">
        <div>
          <div className="ey">Nuestros Sectores</div>
          <div className="sec-title">
            <div style={{ overflow: "hidden", display: "block" }}><SplitChars text="17" /></div>
            <div style={{ overflow: "hidden", display: "block" }}><SplitChars text="EMPRESAS" /></div>
          </div>
        </div>
        <p className="sec-desc">
          17 empresas en 9 sectores de la economía nacional, construyendo sinergias que
          amplifican el impacto de cada modelo de negocio.
        </p>
      </div>

      <div className="sg">
        {SECTORS.map(({ Icon, name, tag }, i) => (
          <div key={i} className="sector-card">
            <div className="sc-top">
              <div className="sc-icon">{getIcon(Icon)}</div>
              <span className="sc-tag">{tag}</span>
            </div>
            <div className="sc-name">{name}</div>
            <div className="sc-arrow">
              <span>Ver empresas</span>
              <Icons.MdArrowOutward size={14} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sectors;
