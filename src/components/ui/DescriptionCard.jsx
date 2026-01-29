import React from "react";

const DescriptionsCard = ({ src,alt, description, title, año }) => {
    return (
        <div className="flex items-center justify-center space-x-6  rounded-lg max-w-7xl mx-auto">
            <div>
                <img className="w-75 h-75 rounded-lg " src={src} alt={alt}/>
            </div>
            <div className="flex flex-col p-4 w-2/3">
            <h1 className="text-3xl font-bold mb-4 text-white">{title} ({año})</h1>
            <p className="text-white">{description}</p>
            </div>
        </div>
    );
}

export default DescriptionsCard;