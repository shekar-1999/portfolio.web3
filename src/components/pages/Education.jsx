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



const Education = () => {
  const educationData = [
    {
      degree: "MBA-Finance",
      institution: "Osmania University",
      year: "2023 - 2025",
      grade: "CGPA: 8.5/10",
      certificate: "MBA-1.jpg"
    },
    {
      degree: "MCA",
      institution: "Wesley PG College",
      year: "2021 - 2023",
      grade: "CGPA: 7.62/10",
      certificate: "MCA-MEMO.jpg"
    },
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      institution: "TKR College Of Engineering And Technology",
      year: "2016 - 2020",
      grade: "CGPA: 6.45/10",
      certificate: "B.TECH MEMO.jpg"
    },
    {
      degree: "Senior Secondary Education (Class 12)",
      institution: "Telangana State Board Of Intermediate Education",
      year: "2015 - 2016",
      grade: "Percentage: 93.5%",
      certificate: "INTER MEMO.jpg"
    },
    {
      degree: "Secondary Education (Class 10)",
      institution: "Board of Secondary Education Andhra Pradesh",
      year: "2013 - 2014",
      grade: "Percentage: 82%",
      certificate: "10 MEMO.jpg"
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
    <div id="education"  className="min-h-screen bg-gray-900 text-white p-8 bg-cover bg-center" style={{ backgroundImage: "url('/BgEducation.jpg')" }}>
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} data-aos="fade-up" data-aos-duration="500"  data-aos-offset="150"  data-aos-delay={`${index*100+200}`} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform relative">
            <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
            <p className="text-lg mt-2 text-gray-300">{edu.institution}</p>
            <p className="mt-1 text-gray-400">{edu.year}</p>
            <p className="mt-1 font-semibold text-green-400">{edu.grade}</p>
            <a href={edu.certificate} download className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">Certificate
              <FaDownload />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Education;
