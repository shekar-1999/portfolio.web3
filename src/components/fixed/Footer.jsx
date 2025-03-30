import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-screen text-white py-6 mt-8 overflow-x-hidden">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold">Connect with Me</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/kadari-shekar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/shekar-1999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:shekarkadari1999@gmail.com" className="text-gray-400 hover:text-red-400 transition">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">&copy; {new Date().getFullYear()} SHEKAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
