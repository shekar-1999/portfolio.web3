import React, { useState } from "react";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 5000,  // Animation duration (1000ms = 1 second)
  easing: "ease-in-out",  // Smooth transition effect
  offset: 100,  // Animation starts when 100px away from the viewport
  delay: 100,  // Delay before the animation starts
  once: false,  // Animation runs only once (set false to repeat)
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message
  const [isSending, setIsSending] = useState(false); // Disable button while sending

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(""); // Reset status before sending

    emailjs
      .send(
        "service_6gvufhp", // Your Service ID
        "template_a2ve0ic", // Your Template ID
        formData, // User input data
        "bRbm8kw53Oa8o4v_i" // Your Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id="contact" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="100">
    <form onSubmit={sendEmail} className="max-w-lg mx-auto bg-gray- p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4 text-center rounded-lg  bg-gray-800 p-2">Contact Me</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
      {status && (
        <p className={`mt-4 text-center font-semibold ${status.includes("✅") ? "text-green-400" : "text-red-400"}`}>
          {status}
        </p>
      )}
    </form>
    </div>
  );
};

export default ContactForm;
