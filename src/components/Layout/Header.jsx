// src/components/Header.jsx
import { useState } from "react";
import { Dropdown, Button } from "antd";
import {
  FaFacebook,
  FaBehance,
  FaInstagram,
  FaAngleDown,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import sofa from "../../assets/images/sofa.jpg";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const menuItems = [
  {
    key: "1",
    label: <Link to="/">About Us</Link>,
  },
  {
    key: "2",
    label: <Link to="/hotels">Hotels</Link>,
  },
  {
    key: "3",
    label: <Link to="/error">Error</Link>,
  },
];


export default function Header({ bannerTitle = "About Us" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Green Bar */}
      <div className="bg-[#1f8f6a] text-white text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:gap-6 text-center sm:text-left">
          <span className=" flex flex-row items-center gap-2">
            <div className=" h-1 w-1 bg-yellow-300"></div>7631 Sabina Park, 115
            Devon Isle, USA
          </span>
          <span className=" flex flex-row items-center gap-2">
            <div className=" h-1 w-1 bg-yellow-300"></div>info@domain.com
          </span>
          <span className=" flex flex-row items-center gap-2">
            <div className=" h-1 w-1 bg-yellow-300 mt-1"></div>(+1) 987 654 3210
          </span>
        </div>
        <div className="flex gap-3 mt-2 sm:mt-0">
          <FaFacebook className="cursor-pointer hover:text-gray-200" />
          <BsTwitterX className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
          <FaBehance className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {/* Black Navbar */}
      <nav className="bg-[#272727] text-white  flex items-center justify-between relative">
        {/* Logo */}
        <img src={logo} alt="Fixyland" className=" h-14" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-sm font-medium">
          <Dropdown menu={{ items: menuItems }} placement="bottom">
            <li className="cursor-pointer  flex flex-row items-center gap-1">
              Home <FaAngleDown className=" mt-1" />
            </li>
          </Dropdown>
          <li className="cursor-pointer  flex flex-row items-center gap-1">
            Pages <FaAngleDown className=" mt-1" />
          </li>
          <li className="cursor-pointer  flex flex-row items-center gap-1">
            Rooms & Suites
            <FaAngleDown className=" mt-1" />
          </li>
          <li className="cursor-pointer  flex flex-row items-center gap-1">
            Services
            <FaAngleDown className=" mt-1" />
          </li>
          <li className="cursor-pointer  flex flex-row items-center gap-1">
            Blog
            <FaAngleDown className=" mt-1" />
          </li>
          <li className="cursor-pointer ">Contact</li>
        </ul>

        {/* Book Button */}
        <div className=" hidden lg:flex gap-2 mr-5">
          <div className=" w-8 h-8 rounded-full bg-[#4e5250] flex items-center justify-center">
            <IoIosSearch />
          </div>
          <div className=" w-8 h-8 rounded-full bg-[#4e5250] flex items-center justify-center">
            <RxHamburgerMenu />
          </div>
          <Button
            type="primary"
            className=" bg-yellow-400 text-black font-semibold rounded px-5 py-2 hover:bg-yellow-500"
          >
            Book Your Stay →
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start p-4 lg:hidden z-50">
            <Dropdown menu={{ items: menuItems }} placement="bottom">
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Home <FaAngleDown className=" mt-1" /></li>
          </Dropdown>
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Pages <FaAngleDown className=" mt-1" /></li>
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Rooms & Suites <FaAngleDown className=" mt-1" /></li>
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Services <FaAngleDown className=" mt-1" /></li>
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Blog <FaAngleDown className=" mt-1" /></li>
            <li className="cursor-pointer py-2 flex flex-row items-center gap-1">Contact </li>
            <Button
              type="primary"
              className="mt-4 w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500"
            >
              Book Your Stay →
            </Button>
          </div>
        )}
      </nav>

      {/* Banner Section */}
      <div
        className="relative w-full h-[300px] bg-center flex items-center justify-center lg:justify-start lg:px-40 "
        style={{ backgroundImage: `url(${sofa})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Banner Content */}
        <div className="relative text-center lg:text-left text-white z-10">
          <h1 className="text-4xl font-bold">{bannerTitle}</h1>
          <p className="mt-2 text-sm">
            Home &gt; <span className="">{bannerTitle}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
