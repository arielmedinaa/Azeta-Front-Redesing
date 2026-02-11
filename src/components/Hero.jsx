import { useRef } from "react";
import { SplitChars, SplitWords } from '../utils/SplitText.jsx';

function Hero({ refs }) {
  return (
    <section className="hero" ref={refs.heroRef}>
      <div className="grid-tex" />

      <div ref={refs.pLayer1} className="pb" style={{
        top: "-8%", right: "-14%", width: "72vw", height: "72vw",
        border: "1px solid rgba(201,168,76,0.07)", borderRadius: "50%" }} />
      <div ref={refs.pLayer1} className="pb" style={{
        top: "4%", right: "-6%", width: "46vw", height: "46vw",
        border: "1px solid rgba(201,168,76,0.04)", borderRadius: "50%" }} />
      
      <div ref={refs.pLayer2} className="pb" style={{
        top: "-25%", right: "-8%", width: "62vw", height: "85vh",
        background: "radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.07) 0%, transparent 65%)" }} />
      
      <div ref={refs.pLayer3} className="pb" style={{
        inset: 0,
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 58px,rgba(201,168,76,0.025) 58px,rgba(201,168,76,0.025) 59px)" }} />

      <div ref={refs.floatA} className="pb" style={{
        top: "22%", right: "21%", width: 110, height: 110,
        border: "1px solid rgba(201,168,76,0.13)" }} />
      <div ref={refs.floatB} className="pb" style={{
        top: "52%", right: "13%", width: 36, height: 36,
        background: "rgba(201,168,76,0.09)" }} />

      <div className="hc">
        <div ref={refs.hLineRef} className="gr" style={{ marginBottom: "1.8rem" }} />
        <div ref={refs.hBadgeRef} className="badge">
          <span className="bdot" />
          Grupo empresarial · Fundado 1950 · Asunción, Paraguay
        </div>

        <div className="ht" ref={refs.hTitleRef} style={{ perspective: "900px" }}>
          <div className="hr"><SplitChars text="GRUPO" /></div>
          <div className="hr">
            <SplitChars text="AZETA" />
            <span className="gdot" />
          </div>
        </div>

        <div className="hs" ref={refs.hSubRef}>
          <div className="hvl" />
          <p className="hsub">
            <SplitWords text="Somos un grupo empresarial comprometido con el desarrollo económico y social del Paraguay." />
          </p>
        </div>
      </div>

      <div className="si" ref={refs.hScrollRef}>
        <span className="sil">Scroll</span>
        <div className="sit"><div className="sif" /></div>
      </div>
    </section>
  );
}

export default Hero;
