import { useRef, useEffect } from "react";

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const mv = e => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", mv);

    let raf;
    const tick = () => {
      rx.current += (pos.current.x - rx.current) * 0.11;
      ry.current += (pos.current.y - ry.current) * 0.11;
      if (ring.current) {
        ring.current.style.left = rx.current + "px";
        ring.current.style.top = ry.current + "px";
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", mv);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: "fixed", width: 8, height: 8, background: "#C9A84C",
        borderRadius: "50%", pointerEvents: "none", zIndex: 10000,
        transform: "translate(-50%,-50%)", mixBlendMode: "difference",
      }} />
      <div ref={ring} style={{
        position: "fixed", width: 40, height: 40,
        border: "1px solid rgba(201,168,76,0.55)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%,-50%)",
      }} />
    </>
  );
}

export default Cursor;
