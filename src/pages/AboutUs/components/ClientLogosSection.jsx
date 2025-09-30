import React from 'react';
import { GiExplodingPlanet } from "react-icons/gi";

const ClientLogosSection = () => {
  const logos = [
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 1" },
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 2" },
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 3" },
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 4" },
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 5" },
    { icon: <GiExplodingPlanet className="w-16 h-16 text-gray-500 hover:text-emerald-600 transition-colors" />, alt: "Client Logo 6" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <div className="mb-12">
          <div className="inline-block bg-white px-4 py-1 rounded-md shadow-sm mb-3">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
              Our Clients
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            We Have More Than 150+ <br className="hidden sm:block" /> Global Clients
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSection;