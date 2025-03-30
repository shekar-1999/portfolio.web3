import React, { useState } from 'react';

const Otherskills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { 
      name: 'Excel', 
      img: 'https://www.pngitem.com/pimgs/m/225-2259475_office-365-excel-logo-hd-png-download.png', 
      desc: 'I use Excel for data analysis, creating pivot tables, and automating reports using VBA and advanced formulas.' 
    },
    { 
      name: 'Power BI', 
      img: 'https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo-700x394.png', 
      desc: 'I leverage Power BI to build interactive dashboards and visualize business insights, helping in decision-making through data storytelling.' 
    },
    { 
      name: 'Linux', 
      img: 'https://tse1.mm.bing.net/th?id=OIP.n5WIRqHHac8fSzRExZTjcgHaHa&pid=Api&P=0&h=180', 
      desc: 'I work with Linux for server management, shell scripting, and deploying applications in cloud environments.' 
    },
    { 
      name: 'Git', 
      img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', 
      desc: 'I use Git for version control, managing repositories, and collaborating on projects using GitHub and GitLab.' 
    },
    { 
      name: 'Docker', 
      img: 'https://www.docker.com/wp-content/uploads/2023/10/Moby-logo.png', 
      desc: 'I use Docker to containerize applications, ensuring consistency across development, testing, and production environments.' 
    },
    { 
      name: 'AWS', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 
      desc: 'I utilize AWS for cloud infrastructure, deploying applications using EC2, S3, and Lambda for scalable solutions.' 
    }
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className="p-6 border border-amber-400">
      <h1 className="text-2xl text-blue-500 text-center md:text-left">Other Technologies</h1>

      {/* Cards Container */}
      <div className="p-6 mt-2 border border-amber-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="w-[230px] rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center border border-b-blue-700 cursor-pointer"
            onClick={() => openModal(skill)}
          >
            <img className="w-20 h-20 rounded-lg" src={skill.img} alt={skill.name} />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-800">{skill.name}</h2>
              <p className="text-gray-600 mt-1 text-sm">Click to view details</p>    
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="relative bg-white w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-6 rounded-lg shadow-2xl text-gray-900">
            <button
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-blue-600 text-center">{selectedSkill.name}</h2>
            <img className="w-32 h-32 mx-auto mt-4 rounded-md" src={selectedSkill.img} alt={selectedSkill.name} />
            <p className="text-gray-700 text-center mt-4">{selectedSkill.desc}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Otherskills;
