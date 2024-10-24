import React, { useState } from "react";
import logo from "../assets/moon_logo.png"; // Replace with the correct path to your logo

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 md:p-6 lg:p-8">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="logo"
          className="h-16 w-24 object-contain md:h-20 md:w-28 lg:h-24 lg:w-40"
        />
      </div>

      {/* Desktop Button Section */}
      <div className="hidden md:flex space-x-4 mx-auto">
        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Home
        </button>
        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          About
        </button>
        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Services
        </button>
        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Menu
        </button>
      </div>

      {/* Mobile Slide-over Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center md:hidden">
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <button className="block w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-md">
              Home
            </button>
            <button className="block w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-md">
              About
            </button>
            <button className="block w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-md">
              Services
            </button>
            <button className="block w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-md">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
