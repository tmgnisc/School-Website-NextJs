'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/a.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-gray-800 font-semibold text-lg">
            <li>
              <Link href="#about" className="hover:text-[#FF1493] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#academic-life" className="hover:text-[#FF1493] transition duration-300">
                Academic Life
              </Link>
            </li>
            <li>
              <Link href="#curriculum" className="hover:text-[#FF1493] transition duration-300">
                Curriculum
              </Link>
            </li>
            <li>
              <Link href="#admission" className="hover:text-[#FF1493] transition duration-300">
                Admission
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#FF1493] transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white text-gray-800 py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#FF1493]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#academic-life"
                  className="hover:text-[#FF1493]"
                  onClick={() => setIsOpen(false)}
                >
                  Academic Life
                </Link>
              </li>
              <li>
                <Link
                  href="#curriculum"
                  className="hover:text-[#FF1493]"
                  onClick={() => setIsOpen(false)}
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="#admission"
                  className="hover:text-[#FF1493]"
                  onClick={() => setIsOpen(false)}
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#FF1493]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
