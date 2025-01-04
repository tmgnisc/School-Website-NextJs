import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#FF1493] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div>
          <img
            src="/a.png" 
            alt="Logo"
            className="w-20 mb-4"
          />
          <h3 className="font-bold text-lg mb-2">Pragati School</h3>
          <p className="text-sm leading-relaxed">
            Pragat is not just a school but an educational dimension here to set you apart with the finest learning experience.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#academic-life" className="hover:underline">Academic Life</a></li>
            <li><a href="#news-and-events" className="hover:underline">About us</a></li>
            <li><a href="#about" className="hover:underline">Principal's Message</a></li>
            <li><a href="#admission" className="hover:underline">Admission</a></li>
            <li><a href="#career" className="hover:underline">Career Opportunity</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#downloads" className="hover:underline">Downloads</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <HiOutlineLocationMarker className="text-red-500" />
              <span>Batulechaur, Pokhara-16</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail className="text-red-500" />
              <span>info@pragatischool.edu.np</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlinePhone className="text-red-500" />
              <span>061-443204,444766,443338</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-red-500" />
            <FaInstagram className="text-xl cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-red-500" />
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
