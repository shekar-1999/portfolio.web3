import React, { useState } from "react";

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "AWS Cloud Practitioner",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      desc: "Earned AWS Cloud Practitioner certification, validating my foundational knowledge of AWS cloud concepts, security, and architecture.",
      link: "https://www.credly.com/badges/803fcea4-63b8-4747-aecf-88846ff59bd1",
    },
    {
      name: "Python Certification",
      img: "https://tse4.mm.bing.net/th?id=OIP.KnOS3vOcNhLla8LSZw4TugHaHa&pid=Api&P=0&h=180",
      desc: "Achieved Python certification, covering core programming concepts, OOP, data structures, and real-world applications.",
      link: "https://www.your-python-certificate-link.com",
    },
    {
      name: "MERN Stack Certification",
      img: "https://tse1.mm.bing.net/th?id=OIP._ggMNrZ2kucjAv4h-hVo8wHaEK&pid=Api&P=0&h=180",
      desc: "Certified in MERN stack development, demonstrating expertise in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      link: "https://www.your-mern-stack-certificate-link.com",
    },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div id="certificates" className="p-6 border border-blue-400">
      <h1 className="text-2xl text-blue-600 font-semibold">My Certifications</h1>

      {/* Certificates Grid */}
      <div className="p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center border border-gray-300 cursor-pointer"
            onClick={() => openModal(certificate)}
          >
            <img className="w-28 h-28 rounded-lg" src={certificate.img} alt={certificate.name} />
            <div className="p-4 flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold text-gray-800">{certificate.name}</h2>
              <p className="text-gray-600 mt-2 text-center">Click to view details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center">{selectedCertificate.name}</h2>
            <img className="w-32 h-32 mx-auto mt-4" src={selectedCertificate.img} alt={selectedCertificate.name} />
            <p className="text-gray-700 text-center mt-4">{selectedCertificate.desc}</p>
            <div className="flex justify-center mt-4">
              <a
                href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mr-4"
              >
                View Certificate
              </a>
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

export default Certificates;
