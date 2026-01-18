import { useState, useEffect } from "react";

function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    // On fixe la hauteur à l'ouverture du site
    setVh(window.innerHeight);
  }, []);

  return vh;
}

export default useViewportHeight;
