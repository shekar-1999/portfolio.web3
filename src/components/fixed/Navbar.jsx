import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} offset={-80} className="text-xl sm:text-2xl font-bold">
          KADARI SHEKAR
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm lg:text-base">
          {["Skills", "My Work", "Resume", "Education", "Contact", "Certificates"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-blue-400 transition">
              <Link to={item.toLowerCase()} smooth={true} duration={500} offset={-80}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="https://www.linkedin.com/in/kadari-shekar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-lg lg:text-xl hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/shekar-1999" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-lg lg:text-xl hover:text-gray-400 transition" />
          </a>
          <a href="mailto:shekarkadari1999@gmail.com">
            <FaEnvelope className="text-lg lg:text-xl hover:text-red-400 transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white text-2xl p-2"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg">
          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-4 right-6 text-3xl text-white"
          >
            <FaTimes />
          </button>

          {/* Mobile Menu Links */}
          {["Skills", "My Work", "Resume", "Education", "Contact", "Certificates"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}

          {/* Social Links */}
          <div className="flex space-x-5 mt-4">
            <a href="https://linkedin.com/in/kadari-shekar" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/shekar-1999" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-400 transition" />
            </a>
            <a href="mailto:shekarkadari1999@gmail.com">
              <FaEnvelope className="text-xl hover:text-red-400 transition" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
