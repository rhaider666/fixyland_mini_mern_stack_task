import React from 'react';
import { PlusOutlined } from '@ant-design/icons'

const StaffCard = ({
  data
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto">
      {/* Image Section */}
      <div className="relative h-60 w-60">
        <img
          src={data?.imageUrl}
          alt={data?.name}
          className="w-full h-full object-cover object-top" // object-top helps keep faces visible
        />
        {/* Plus Button */}
        <div className="absolute bottom-4 right-4">
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-white"
          >
            <PlusOutlined className="text-xl" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">{data?.name}</h3>
        <div className="flex items-center mb-0"> {/* Adjusted margin-bottom to make the line closer */}
          <div className="w-5 h-0.5 bg-emerald-600 mr-2"></div> {/* The green line */}
          <p className="text-gray-600 text-base capitalize">{data?.role}</p>
        </div>
      </div>
    </div>

  )
}

export default StaffCard
