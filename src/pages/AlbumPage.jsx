import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import SongCard from "../components/ui/SongCard.jsx";
import albums from "../data/albums.js";
import DescriptionsCard from "../components/ui/DescriptionCard.jsx";


function AlbumPage() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === id);


  if (!album) {
    return <div>Álbum no encontrado</div>;
  }

  return (
    <div className="min-h-screen relative bg-black">
      <div className={`absolute inset-0 ${album.background} z-0`} ></div>
      <Header className="relative z-10" />
      <div className="max-w-7xl w-auto relative z-10 mx-auto p-6 mb-6">
        <img src={album.banner} alt={album.title} className="rounded-lg" />
      </div>
      <DescriptionsCard description={album.descripcion} src={album.imglogo} alt={album.title} title={album.title} año={album.año} />
      <div className=" relative z-10 max-w-5xl mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Canciones:</h2>
        <div className="space-y-2">
          {album.songs.map((song, index) => (
            <SongCard key={index} song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;