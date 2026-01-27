import React from 'react';
import Header from '../components/layout/Header';
import AlbumCard from '../components/ui/AlbumCard.jsx';
import albums from '../data/albums.js';
import { AboutMe } from '../components/ui/AboutMe.jsx';
import SectionDivider from '../components/ui/SectionDivider.jsx';

function Home() {
    return (
        <div className="min-h-screen relative bg-black">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-orange-900/70 to-black z-5"></div>
            <div className="flex justify-center mx-auto pt-10 pb-10">
                <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1769483226/pinot_noir_ezdwef.png" alt="welcome" className='relative z-10 w-350 h-150 rounded-xl' />
            </div>
            <SectionDivider title="Eras" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-7xl mx-auto">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </div>
            <SectionDivider title="Sobre Mí" />
            <div className='mt-20 relative z-10'>
                <AboutMe />
            </div>
        </div>
    );
}


export default Home;
