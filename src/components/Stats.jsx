import { STATS } from '../data/constants';

function Stats({ refs }) {
  return (
    <section className="stats" ref={refs.statsRef}>
      <div className="wm">AZETA</div>
      <div className="sg-3">
        {STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="sn">{s.n}</div>
            <div className="sl">{s.l}</div>
            <p className="sd">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
