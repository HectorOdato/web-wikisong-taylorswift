import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import albums from "../data/albums.js";


function AlbumPage() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === id);


  if (!album) {
    return <div>Álbum no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{album.title} ({album.año})</h1>
        <img src={album.img} alt={album.title} className="w-full h-auto mb-4 rounded-lg" />
        <p className="mb-4">{album.descripcion}</p>
        <h2 className="text-2xl font-semibold mb-2">Canciones:</h2>
        <ul>
          {album.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlbumPage;