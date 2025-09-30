import { Progress } from "antd";
import React from "react";
import { FaHeart, FaStar, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHeart className="text-emerald-600 text-3xl" />,
    title: "Customer Satisfaction",
    description:
      "We prioritize our guests' happiness and comfort, ensuring a memorable and enjoyable stay with our dedicated service.",
  },
  {
    icon: <FaStar className="text-emerald-600 text-3xl" />,
    title: "High-Quality Service",
    description:
      "Our team is committed to providing a luxurious experience with impeccable attention to detail, from clean rooms to personalized assistance.",
  },
  {
    icon: <FaShieldAlt className="text-emerald-600 text-3xl" />,
    title: "Secure Environment",
    description:
      "Your safety is our top concern. We maintain a secure and safe environment so you can relax without any worries.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Reasons List */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <div className="inline-block bg-white px-2 py-1 rounded-md shadow-sm mb-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Our Skills
            </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-base mb-8">
            Our mission is to provide an unparalleled experience with a focus on
            your comfort, security, and satisfaction.
          </p>
          <div className="space-y-4">
            <div>
              <div className=" flex flex-row justify-between items-center">
                <span className=" text-primary text-base font-bold">
                  Services
                </span>
                <span className=" text-primary text-base font-bold">95%</span>
              </div>
              <Progress percent={95} showInfo={false} strokeColor={"#1f8f6a"} />
            </div>

            <div>
              <div className=" flex flex-row justify-between items-center">
                <span className=" text-primary text-base font-bold">
                  Chef Master
                </span>
                <span className=" text-primary text-base font-bold">85%</span>
              </div>
              <Progress percent={85} showInfo={false} strokeColor={"#1f8f6a"} />
            </div>

            <div>
              <div className=" flex flex-row justify-between items-center">
                <span className=" text-primary text-base font-bold">Design</span>
                <span className=" text-primary text-base font-bold">92%</span>
              </div>
              <Progress percent={92} showInfo={false} strokeColor={"#1f8f6a"} />
            </div>

            <div>
              <div className=" flex flex-row justify-between items-center">
                <span className=" text-primary text-ase font-bold">
                  IT Solution
                </span>
                <span className=" text-primary text-base font-bold">98%</span>
              </div>
              <Progress percent={98} showInfo={false} strokeColor={"#1f8f6a"} />
            </div>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative">
            <img
              src="https://www.shutterstock.com/image-photo/maldives-island-beach-tropical-landscape-600nw-2547983501.jpg"
              alt="Luxury hotel room"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-emerald-600 opacity-20 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
