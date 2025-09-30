// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/images/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Fixyland" className="h-full" />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus maxime placeat facere.
          </p>
          <div className="flex gap-3 mt-4">
            <div className=" w-10 h-10 rounded-md bg-[#272727] flex items-center justify-center">
              <FaFacebook className="cursor-pointer hover:text-gray-400" />
            </div>

            <div className=" w-10 h-10 rounded-md bg-[#272727] flex items-center justify-center">
              <BsTwitterX className="cursor-pointer hover:text-gray-400" />
            </div>
            <div className=" w-10 h-10 rounded-md bg-[#272727] flex items-center justify-center">
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </div>
            <div className=" w-10 h-10 rounded-md bg-[#272727] flex items-center justify-center">
              <FaBehance className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>

        {/* 2. Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer">
              About Hotel
            </li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">
              Hotel Staff
            </li>
            <li className="cursor-pointer">
              Latest News
            </li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* 3. Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            7631 Sabina Park, 115 Devon Isle, Louisiana, USA
          </p>
          <p className="mt-3 text-sm">(+1) 987 654 3210</p>
          <p className="mt-1 text-sm">info@domain.com</p>
        </div>

        {/* 4. Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="bg-[#2a2a2a] rounded-xl p-4">
            <div className="flex items-center bg-transparent border-b border-gray-500">
              <input
                type="email"
                placeholder="Ex. info@domain.com"
                className="w-full bg-transparent text-sm p-2 outline-none"
              />
              <button className="text-white text-lg">➤</button>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input type="checkbox" id="terms" className="accent-yellow-400" />
              <label htmlFor="terms" className="text-xs text-gray-400">
                I agree to all terms and policies
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© Copyright 2025 Fixyland. All Rights Reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="cursor-pointer hover:text-yellow-400">
            Terms and Conditions
          </span>
          <span className="cursor-pointer hover:text-yellow-400">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
