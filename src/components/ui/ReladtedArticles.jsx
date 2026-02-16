import React from 'react';
import { Link } from "react-router-dom";

/* componente para articulos relacionados al final de la pagina*/

/*Funcion para excoger albumes de forma aleatoria */
export const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const RelatedArticles = ({album}) => {
  return (
    <section className="w-full bg-gray-100 py-5 px-4 pb-10">
          <div className="relative h-48 overflow-hidden">
              <img 
                src={album.imgcard}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
          </div>
        <div className="text-center mt-12">
          <Link to={`/album/${album.id}`}>
          <button className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-110  cursor-pointer">
            Ver mas
          </button>
          </Link>
        </div>
    </section>
    
  );
};

export default RelatedArticles;