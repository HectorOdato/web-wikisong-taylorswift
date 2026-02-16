import React from 'react';
import AlbumCard from '../../components/ui/AlbumCard.jsx';
import albums from '../../data/AlbumsData.js';
import { AboutMe } from '../HomePage/components/AboutMe.jsx';
import SectionDivider from '../../components/ui/SectionDivider.jsx';
import { PageBackground } from "../../components/layout/PageBackground.jsx";

function Home() {
return (
    <main className={`min-h-screen flex flex-col relative ${PageBackground.font_white}`}>
        <section className="relative mx-auto h-full overflow-hidden">
            <img 
                src="https://res.cloudinary.com/deijzj2mb/image/upload/v1769836854/wp13390081-taylor-swift-the-eras-tour-desktop-hd-wallpapers_ekat4s.jpg" 
                alt="welcome" 
                className='w-full h-80 lg:h-full md:h-full object-cover' 
            />
            <div className='absolute pl-5 xl:max-w-4xl mx-auto gap-2 inset-0 flex flex-col justify-center xl:right-200 lg:gap-8 lg:bottom-50 text-shadow-2xs'>
                <h2 className='text-white text-3xl lg:text-6xl md:text-3xl xl:text-8xl font-bold animate-fade-horizontal-left delay-300 playfair-display-title'>
                    Bienvenido/a
                </h2>
                <p className='text-white text-xl lg:text-3xl md:text-xl xl:text-5xl font-bold animate-fade-horizontal-left delay-600 poppins-regular'>
                    Un viaje por la música, las emociones y las eras de Taylor Swift
                </p>
            </div>
            
        </section>
        <SectionDivider title="Eras" />
        
        <section className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5">
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
