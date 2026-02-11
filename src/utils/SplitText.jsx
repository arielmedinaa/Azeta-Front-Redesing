export function SplitChars({ text }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} className="gsap-char"
          style={{ display: "inline-block", willChange: "transform,opacity" }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

export function SplitWords({ text }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i}
          style={{ display: "inline-block", overflow: "hidden", lineHeight: "1.1",
                   verticalAlign: "top" }}>
          <span className="gsap-word"
            style={{ display: "inline-block", willChange: "transform,opacity",
                     marginRight: "0.3em" }}>
            {word}
          </span>
        </span>
      ))}
    </>
  );
}
