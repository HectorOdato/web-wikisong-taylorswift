import { useEffect, useRef, useState } from "react";

/* Componente para tener animacion al hacer scroll sobre el contenido de la pagina */
/* UseState en false oculta el contenido , visible en true se muestra al scrollear*/
/* IntersectionObserver una api del navegador para ver si un elemento entra en el viewport */
/* cuando el objeto entry que se refire al elemento html observado entra (entry.isIntersecting) = setVisible true  */
/* { threshold: 0.2 } para que el elemento aparezca cuando este al menos al 20% de la pantalla*/
/*  observer.disconnect() elimina el observer al finalizar el scroll*/

function RevealSection({ children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setVisible(true);
        }
        },
        { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
    }, []);

    return (
    <div
        ref={ref}
        className={`transition-all duration-700 ease-out 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
    >
        {children}
    </div>
    );
}

export default RevealSection