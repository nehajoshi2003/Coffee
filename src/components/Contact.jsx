// Contact.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import bgContact from './images/contact-bg.jpg';

const Contact = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6" 
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contact Form Container */}
      <div className="relative bg-[#c6b79b] bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-3xl md:h-[616px] md:mt-[70px]">
        <h1 
          className="text-3xl font-bold text-center mb-6 text-[#371c09] sm:text-4xl"
          style={{
            fontFamily: 'Montserrat Alternates, serif',
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          Contact Us
        </h1>
        
        {/* Contact Info */}
        <div className="text-center mb-2 text-sm sm:text-base">
          <p className="text-gray-700">📍 ABCD, Hubli</p>
          <p className="text-gray-700">
            📞 <a href="tel:+919876543210" className="text-brown-600 font-semibold">123456789</a>
          </p>
          <p className="text-gray-700">
            📧 <a href="mailto:contact@coffeehub.com" className="text-brown-600 font-semibold">contact@something.com</a>
          </p>
          <p className="text-gray-700">🕒 Mon-Sun: 8 AM - 10 PM</p>
          <div className="flex justify-center space-x-6 mt-2 text-[#371c09] text-xl sm:text-2xl">
          <a href="#" className="hover:text-brown-800 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-brown-800 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-brown-800 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-brown-800 transition"><FaWhatsapp /></a>
        </div>
        </div>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500 sm:p-4" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500 sm:p-4" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-brown-500 sm:h-40 sm:p-4" 
            required
          ></textarea>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-[#371c09] text-[18px] sm:text-[20px] hover:bg-[#a17859] hover:text-[#371c09] rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Social Media - Now Inside the Box */}
       
      </div>
    </div>
  );
};

export default Contact;
