import React, { useEffect, useState } from 'react'
import { getExperts } from '../../../lib/api';
import StaffCard from './StaffCard';

const StaffSection = () => {
    const [loading, setLoading] = useState(false);
      const [staffs, setStaffs] = useState([]);
    
      const fetchingStaff = async () => {
        try {
          setLoading(true);
          const res = await getExperts();
          setStaffs(res.record);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchingStaff();
      }, []);
  return (
    <div>
      <div className=" bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
           <div className="inline-block bg-white px-2 py-1 rounded-md shadow-sm mb-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Fixyland Staff
            </p>
          </div>
            <h2 className="text-3xl text-black font-bold mt-4">
              Expert Staff Persons
            </h2>
          </div>

          {loading ? (
            <div>Loading..</div>
          ) : (
            <div
              className={`flex gap-4 overflow-x-auto hide-scrollbar ${
                staffs.length <= 3 ? "lg:justify-center" : ""
              }`}
            >
              {staffs.map((ele, index) => (
                <div key={index} className="flex-shrink-0">
                  <StaffCard data={ele}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StaffSection
