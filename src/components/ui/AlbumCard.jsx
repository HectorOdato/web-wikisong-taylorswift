import React from "react";
import { Link } from "react-router-dom";



const AlbumCard = ({Album}) => {
  return (
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center max-w-xs">
      <img src={Album.img} alt={Album.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2>{Album.title}</h2>
      <p>{Album.año}</p>
      <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors"><Link to={`/album/${Album.id}`}>Ver canciones</Link></button>
    </div>
    
  );
};

export default AlbumCard;