import React from 'react';
import AlbumCard from '../components/ui/AlbumCard.jsx';
import albums from '../data/AlbumsData.js';
import { AboutMe } from '../components/ui/AboutMe.jsx';
import SectionDivider from '../components/ui/SectionDivider.jsx';
import { PageBackground } from "../components/layout/PageBackground";

function Home() {
    return (
        <main className={`min-h-screen flex flex-col relative ${PageBackground.font_white}`}>
            <section className="relative mx-auto h-full pt-1 pb-10">
                <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1769836854/wp13390081-taylor-swift-the-eras-tour-desktop-hd-wallpapers_ekat4s.jpg" 
                    alt="welcome" 
                    className=' w-full h-full object-cover' />
            <div className='absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-20 max-w-3xl'>
                <h2 className='text-white text-2xl lg:text-6xl font-bold'>Bievenido/a</h2>
                <p className='text-white text-base lg:text-3xl font-bold text-center'>Un viaje por la musica,las emociones y las eras de taylor swift</p>
            </div>
            </section>
            <SectionDivider title="Eras" />
            <section className="relative z-10 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 py-8">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </section>
            <SectionDivider title="Sobre Mí" />
            <section>
            <div className='pb-15 mt-20'>
                <AboutMe />
            </div>
            </section>
        </main>
    );
}


export default Home;
