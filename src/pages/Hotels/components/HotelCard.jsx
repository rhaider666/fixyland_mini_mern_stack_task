import React from 'react';
import { FaUserFriends, FaBed, FaBath } from 'react-icons/fa'; // Importing icons from react-icons/fa

const HotelCard = ({
  data
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 max-w-[300px] mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="w-full h-48 object-cover" // Fixed height for consistency, adjust as needed
        />
        {/* Price Tag */}
        <div className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md">
          ${data?.price}/Night
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{data?.title}</h3>

        {/* Room Details */}
        <div className="flex items-center space-x-4 text-gray-700 mb-3">
          <div className="flex items-center space-x-2">
            <FaUserFriends className="text-emerald-600 text-sm" />
            <span className="text-sm">{data?.accommodations?.guests} Guests</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBed className="text-emerald-600 text-sm" />
            <span className="text-sm">{data?.accommodations?.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath className="text-emerald-600 text-sm" />
            <span className="text-sm">{data?.accommodations?.bathrooms} Bath</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          {data?.description}
        </p>

        {/* Read More Button */}
        <a
          href={"#"}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
        >
          Read More
          <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HotelCard;