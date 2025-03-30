import React from "react";
import { FaDownload } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 5000,  // Animation duration (1000ms = 1 second)
  easing: "ease-in-out",  // Smooth transition effect
  offset: 100,  // Animation starts when 100px away from the viewport
  delay: 100,  // Delay before the animation starts
  once: false,  // Animation runs only once (set false to repeat)
});

const Resume = () => {
  return (
    <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="100">
    <div
      id="resume"
      className="min-h-screen bg-gray text-white px-6 py-12 flex flex-col items-center justify-center bg-cover bg-center border border-b-blue-500"
      style={{ backgroundImage: "url('')" }}
    >
     
      <div className="w-full max-w-2xl md:w-3/4 lg:w-1/2 flex flex-col h-auto md:h-96 bg-gray-800 rounded-2xl items-center justify-center shadow-2xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 md:mb-6 text-center">
          My Resume
        </h2>
        <p className="text-sm md:text-lg text-gray-400 text-center max-w-xl mb-4 md:mb-6">
          Here is my resume showcasing my skills, experience, and education. You can download the PDF version below.
        </p>
        <a
          href="https://docs.google.com/document/d/1OBMFje4L1r3_xFJcLC0vNPqlZJyHIk7d/edit?usp=drivesdk&ouid=117483743460365083757&rtpof=true&sd=true"
          download
          className="bg-blue-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-2 text-sm md:text-lg font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
      </div>
    </div>
    
  );
};

export default Resume;
