import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 5000,  // Animation duration (1000ms = 1 second)
  easing: "ease-in-out",  // Smooth transition effect
  offset: 100,  // Animation starts when 100px away from the viewport
  delay: 100,  // Delay before the animation starts
  once: false,  // Animation runs only once (set false to repeat)
});

const MyWork = () => {
  const workData = [
    {
      title: "Software Developer Intern",
      company: "XYZ Tech Solutions",
      duration: "Jan 2023 - June 2023",
      description: "Worked on developing a full-stack web application using React.js and Node.js.",
      link: "https://xyztech.com/project"
    },
    {
      title: "Frontend Developer",
      company: "Spy D Technology",
      duration: "Jun 2024 - Present",
      description: "Building modern, responsive UI components using React.js and Tailwind CSS.",
      link: "https://www.linkedin.com/company/spydtechnology/posts/?feedView=all"
    },
    {
      title: "E-commerce Platform",
      company: "Personal Project",
      duration: "2022",
      description: "Developed an e-commerce platform with integrated payment gateway and user authentication.",
      link: "https://insatncashflow-loan-app.netlify.app/"
    }
  ];

  return (
    <div id="my work" className="min-h-screen bg-g text-white p-8 bg-cover bg-center" style={{ backgroundImage: "url('/BgWork.jpg')" }}>
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">My Work</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {workData.map((work, index) => (
          <div key={index} data-aos="fade-down-left" data-aos-duration="500"  data-aos-offset="150"  data-aos-delay={`${index*100+200}`} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform relative">
            <h3 className="text-2xl font-semibold text-blue-400">{work.title}</h3>
            <p className="text-lg mt-2 text-gray-300">{work.company}</p>
            <p className="mt-1 text-gray-400">{work.duration}</p>
            <p className="mt-1 text-gray-300">{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
