import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Componente para hacer ScrollTo es decir al ingresar a cada pagina esta se muestra desde su inicio*/
/*useLocation para pedir pathname de la pagina en que me encuentro y useEffect para ejecutar la logica, 
returt null para solo usar la logica y ocultar el componente */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;