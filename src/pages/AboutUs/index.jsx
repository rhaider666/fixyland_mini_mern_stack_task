import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaSwimmingPool, FaBiking, FaUtensils } from "react-icons/fa";
import sofa from "../../assets/images/sofa.jpg";
import ClientLogosSection from "./components/ClientLogosSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import { FaPlay } from "react-icons/fa6";
import StaffSection from "./components/StaffSection";

const AboutUs = () => {
  const stats = [
    { value: "305+", label: "Luxury Rooms" },
    { value: "650+", label: "Regular Guests" },
    { value: "80+", label: "Team Member" },
    { value: "75+", label: "Beaches" },
  ];
  return (
    <div>
      <div className="bg-[#f3f9f7] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <span className="px-3 py-1 text-xs font-medium text-primary bg-white rounded-md">
              LUXURY HOTEL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-snug">
              We Provide Outdoor Activities <br /> To All Visitors
            </h2>
            <p className="text-gray-600 mt-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour, or randomised words which don’t look even.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-8 mt-6">
              <div className="flex items-center gap-3">
                <FaSwimmingPool className="text-emerald-600 text-2xl" />
                <span className="font-semibold">The Best Swimming Pool</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBiking className="text-emerald-600 text-2xl" />
                <span className="font-semibold">The Best Stationary Bike</span>
              </div>
            </div>

            {/* Checklist */}
            <ul className="mt-6 space-y-3">
              {[
                "It is a long fact that a reader will be distracted by the readable",
                "Lorem Ipsum is simply dummy of the printing and industry",
                "There are many variations of Lorem Ipsum majority",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <FaRegCheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition">
              Discover More
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            {/* Top Image */}
            <img
              src={sofa}
              alt="Fireplace"
              className="rounded-xl shadow-lg w-72 md:w-80 h-56 object-cover"
            />

            {/* Bottom Image with Overlay */}
            <div className="absolute -bottom-12 left-10">
              <div className="relative">
                <img
                  src={sofa}
                  alt="Restaurant"
                  className="rounded-xl shadow-lg w-64 md:w-72 h-44 object-cover"
                />
                <div className="absolute  bottom-10 left-10 lg:left-50 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-[200px]">
                  <FaUtensils className="text-emerald-400 mb-2 text-xl" />
                  <h4 className="font-bold text-lg">Restaurants</h4>
                  <p className="text-xs text-gray-200 mt-1">
                    Donec in quis the asd pellentesque velit. Donec id velit
                    arcu posuere blane.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-0 sm:gap-x-12 divide-y sm:divide-y-0 sm:divide-x divide-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center pt-8 sm:pt-0"
            >
              <p className="text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-base text-white tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUsSection />

      <div className=" bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="px-3 py-1 text-xs text-primary font-medium bg-white rounded-md uppercase">
              Amazing Experiene
            </span>
            <h2 className="text-3xl text-white font-bold mt-4">
              Relax and Enjoy Our Hotel and Resort
            </h2>
          </div>

          <div className=" h-50 w-full flex items-center justify-center">
            <div className=" h-14 w-14 rounded-full bg-white flex items-center justify-center">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>

      <StaffSection/>

      <ClientLogosSection />
    </div>
  );
};

export default AboutUs;
