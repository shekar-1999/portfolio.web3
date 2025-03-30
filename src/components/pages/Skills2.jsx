import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 5000,  // Animation duration (1000ms = 1 second)
  easing: "ease-in-out",  // Smooth transition effect
  offset: 100,  // Animation starts when 100px away from the viewport
  delay: 100,  // Delay before the animation starts
  once: false,  // Animation runs only once (set false to repeat)
});


const Skills2 = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const techDetails = {
    node: {
      title: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development.",
      projects: [
        "Developed REST APIs for an e-commerce platform.",
        "Implemented real-time chat application using WebSockets.",
        "Built a scalable authentication system with JWT.",
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.5gf2JQQmWla-GU-WXTrGcgHaE8&pid=Api&P=0&h=180",
    },
    express: {
      title: "Express.js",
      description: "Express is a minimal and flexible Node.js web framework for building robust APIs.",
      projects: [
        "Created a URL shortener service using Express and MongoDB.",
        "Developed middleware for authentication and logging.",
        "Built a RESTful API for a social media app.",
      ],
      image: "https://tse1.mm.bing.net/th?id=OIP.1ji9NLQl3sOXktSoEYnt3wHaHa&pid=Api&P=0&h=180",
    },
    django: {
      title: "Python-Django",
      description: "Django is a high-level Python web framework that encourages rapid development and clean design.",
      projects: [
        "Developed a blogging platform with Django and PostgreSQL.",
        "Implemented role-based access control in a web app.",
        "Created an API for handling user authentication and payments.",
        "Proficient in NumPy, Pandas, and Matplotlib for data manipulation, analysis, and visualization.",
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.eNKt0Z9LMIVccFDae3tGzwHaD4&pid=Api&P=0&h=180",
    },
    mysql: {
      title: "MySQL",
      description: "MySQL is an open-source relational database management system for structured data storage.",
      projects: [
        "Designed a normalized database schema for an inventory system.",
        "Optimized complex queries for better performance.",
        "Implemented stored procedures and triggers for data automation.",
      ],
      image: "https://tse1.mm.bing.net/th?id=OIP.lIIc_svaWdGdEJuEk7TBlgHaHa&pid=Api&P=0&h=180",
    },
  };

  return (
    <>
      <div className="p-6 border border-amber-400">
        <h1 className="text-2xl text-blue-500 text-center md:text-left">Backend Technologies</h1>
        <div className="p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 sm:space-x-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {Object.keys(techDetails).map((tech) => (
            <div
              key={tech} data-aos="slide-right" data-aos-duration="1000"  data-aos-offset="100"  data-aos-delay={`${tech*100+200}`}
              className="w-[230px] rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center border border-b-blue-700  cursor-pointer"
              onClick={() => setSelectedTech(tech)}
            >
              <img className="w-20 h-20 rounded-lg" src={techDetails[tech].image} alt={techDetails[tech].title} />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-gray-800">{techDetails[tech].title}</h2>
                <p className="text-gray-600 mt-1 text-sm">Click to view details</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTech && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="relative bg-white w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-6 rounded-lg shadow-2xl text-gray-900">
            <button
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedTech(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-blue-600">{techDetails[selectedTech].title}</h2>
            <p className="mt-4 text-sm">{techDetails[selectedTech].description}</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700 text-sm">
              {techDetails[selectedTech].projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills2;
