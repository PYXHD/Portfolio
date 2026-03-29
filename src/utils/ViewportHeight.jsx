import { useState, useEffect } from "react";

function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  return vh;
}

export default useViewportHeight;
