import React from "react";
import Details from "../components/ui/AlbumDetails";
import { PageBackground } from "../components/layout/PageBackground";


export const BiographyPage = () => {
    return (
        <main className={`min-h-screen ${PageBackground.font_black} text-white p-8`}>
            <section className="flex items-center justify-center mx-auto mt-10 mb-10">
                <div>
                    <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1769978160/taylor-swift-biografia-resumida_hyhgyj.webp" alt="Taylor Swift Biography" className="w-200 h-200 object-cover rounded-xl"/>
                </div>
                <div className="flex flex-col ml-8 p-10 gap-1 ">
                    <h1 className="text-5xl font-bold  w-full mb-5">Taylor Swift, historia y biografía</h1>
                    <p className="text-center">cantante que se convirtió en una de las artistas más influyentes del siglo XXI.</p>
                    <p className="text-center">sus inicios como compositora de musica country y su llegada ala fama</p>
                </div>
            </section>
            
        </main>
    );
}