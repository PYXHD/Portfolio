import { useState, useEffect } from "react";

export default function useViewportHeight() {
  const getHeight = () => window.innerHeight;

  const [viewportHeight, setViewportHeight] = useState(getHeight());

  useEffect(() => {
    const handleResize = () => setViewportHeight(getHeight());

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return viewportHeight;
}
