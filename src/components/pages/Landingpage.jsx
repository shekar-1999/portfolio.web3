import React from "react";
import { FaYoutube, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="relative w-full h-full md:mt-10 mt-16 ">
      {/* Full-Page Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]  inset-0   overflow-hidden"
      >
        <source src="./bgv3.mp4" type="video/mp4" />
      </video>

      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-6 sm:px-8 md:px-16 lg:px-24 text-white max-w-screen-xl overflow-hidden">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Hello,</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
            SHEKAR here!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            👋 Hey there! I'm <span className="font-semibold text-white">SHEKAR</span>, an
            <span className="text-blue-400"> AI-Enabled React Developer</span> ,
            <span className="text-blue-400"> Frontend Developer and Full Stack Developer</span> passionate about building seamless, user-friendly web applications.
            Skilled in <span className="text-blue-400">React.js, Tailwind CSS, Redux Toolkit, MERN Stack, AWS, SQL,</span> and
            <span className="text-blue-400"> Financial Analysis</span>, I specialize in crafting high-performance digital experiences.
            Let's innovate and create something amazing together! 🚀
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.youtube.com/@Zero_Knowledge" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl hover:text-red-500 transition" />
            </a>
            <a href="https://www.instagram.com/shekar_kadari/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-3xl hover:text-orange-500 transition" />
            </a>
            <a href="https://x.com/home">
              <FaSquareXTwitter className="text-3xl hover:text-black transition" />
            </a>
            <a href="mailto:shekarkadari1999@gmail.com">
              <FaFacebook className="text-3xl hover:text-blue-500 transition" />
            </a>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="/resume.pdf"
              download="ResumeFullstack.pdf"
              className="rounded-lg bg-white text-black w-32 h-10 font-semibold shadow-md hover:bg-gray-200 flex items-center justify-center"
            >
              Resume
            </a>
            <a
              href="mailto:shekarkadari1999@gmail.com"
              className="rounded-lg bg-white text-black h-10 w-64 font-semibold shadow-md hover:bg-gray-200 flex items-center justify-center"
            >
              shekarkadari1999@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center overflow-hidden w-full">
        <img
        src="imagehero.png"
        alt="Shekar"
        className="max-w-xs md:max-w-md lg:max-w-lg h-auto p-6 rounded-2xl shadow-lg object-cover object-top"
      />
      </div>


      </section>
    </div>
  );
};

export default LandingPage;
