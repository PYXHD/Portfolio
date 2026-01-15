import { useState, useEffect } from "react";

export default function Ripple({ x, y }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 600); // correspond à la durée de l'animation
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <span
      className="ripple"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}
