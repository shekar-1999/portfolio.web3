import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 5000,  // Animation duration (1000ms = 1 second)
  easing: "ease-in-out",  // Smooth transition effect
  offset: 100,  // Animation starts when 100px away from the viewport
  delay: 300,  // Delay before the animation starts
  once: false,  // Animation runs only once (set false to repeat)
});


const Skills1 = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Data for different technologies
  const techDetails = {
    react: {
      title: "React.js",
      description: "I have extensive experience with React.js, building scalable and interactive web applications.",
      projects: [
        "Developed an Employee Management System with CRUD operations.",
        "Created a Recipe Finder app with Redux and API integration.",
        "Implemented an OTP verification system for user authentication.",
        "Built a Loan Application Portal with local storage management.",
      ],
      image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    javascript: {
      title: "JavaScript",
      description: "Proficient in JavaScript, working with ES6+ features, event-driven programming, and asynchronous handling.",
      projects: [
        "Developed interactive UI components using vanilla JavaScript.",
        "Built an API-based weather app using Fetch API and Promises.",
        "Created a dynamic form validation system using RegEx.",
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.btmLuIewxr1xXFZFEKGwxwHaKv&pid=Api&P=0&h=180",
    },
    tailwind: {
      title: "Tailwind CSS",
      description: "Experienced in using Tailwind CSS for fast and responsive UI development.",
      projects: [
        "Designed modern UI components with Tailwind utility classes.",
        "Created fully responsive layouts without custom CSS.",
        "Integrated Tailwind with React.js projects for better styling.",
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.qSHjvlKmg4IUmF7QnN3UZwHaHa&pid=Api&P=0&h=180",
    },
    html: {
      title: "HTML",
      description: "Expertise in HTML5, semantic markup, and SEO-friendly web structure.",
      projects: [
        "Developed landing pages with optimized HTML structures.",
        "Created accessible forms with proper field validation.",
        "Implemented SVG graphics and Canvas API for rich UI experiences.",
      ],
      image: "https://tse3.mm.bing.net/th?id=OIP.7rwMEjcw2fwJgJJivM6CVAHaHa&pid=Api&P=0&h=180",
    },
    css: {
      title: "CSS",
      description: "Proficient in modern CSS techniques, animations, and responsive design.",
      projects: [
        "Created fluid, mobile-friendly designs using Flexbox and Grid.",
        "Built animations with CSS transitions and keyframes.",
        "Designed themes with CSS custom properties (variables).",
      ],
      image: "https://tse4.mm.bing.net/th?id=OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa&pid=Api&P=0&h=180",
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-blue-500 font-bold">Frontend Technologies</h1>
      
      {/* Cards Container - Responsive */}
      <div className="p-6 mt-4 border border-amber-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(techDetails).map((tech ,index) => (
          <div
            key={index}  data-aos="slide-left" data-aos-duration="1000"  data-aos-offset="100"  data-aos-delay={`${index*100+200}`}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center border border-b-blue-700 cursor-pointer"
            onClick={() => setSelectedTech(tech)}
          >
            <img className="w-16 h-16 rounded-lg" src={techDetails[tech].image} alt={techDetails[tech].title} />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-800">{techDetails[tech].title}</h2>
              <p className="text-gray-600 text-sm mt-2">Click to view details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTech && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 px-4">
          {/* Full-Page Background Video */}
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="./bgv.mp4" type="video/mp4" />
          </video>

          {/* Modal Content */}
          <div className="relative bg-transparent border border-b-amber-800 max-w-[90%] sm:max-w-lg md:max-w-3xl w-full p-6 rounded-lg shadow-2xl backdrop-blur-lg text-white">
            <button
              className="absolute top-4 right-6 text-gray-600 hover:text-white text-2xl"
              onClick={() => setSelectedTech(null)}
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-300">{techDetails[selectedTech].title}</h2>
            <p className="mt-4 text-sm sm:text-base">{techDetails[selectedTech].description}</p>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base">
              {techDetails[selectedTech].projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills1;
