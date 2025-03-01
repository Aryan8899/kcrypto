"use client";

import { useState, useEffect } from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll events to apply different styles
  useEffect(() => {
    const handleScroll = () => {
      // Change header appearance after scrolling down
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled 
          ? "bg-[#0b0f19]/40 backdrop-blur-lg" 
          : "bg-transparent"
      }`}
    >
      
      <div className="lg:mt-5 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8">
        {/* Logo and Text Container - Left Side */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://krystal.app/assets/images/logos/krystal-pure.svg" 
            alt="Krystal Logo" 
            className="h-6 sm:h-8"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-white">krystal</h1>
        </div>

        {/* Center Navigation - Visible on Desktop */}
        <div className="hidden md:flex items-center justify-center">
          <div className={`flex items-center space-x-6 ${
            scrolled 
              ? "bg-[#141A26]/50 backdrop-blur-xl" 
              : "bg-[#141A26]/70"
          } px-6 py-2 rounded-full shadow-lg relative transition-all duration-300`}>
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#00FFA3] transition-all flex items-center"
              >
                Products <span className="ml-1">▾</span>
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-[#1A202C]/80 backdrop-blur-xl shadow-md rounded-xl p-3 z-50 border border-gray-700/30">
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-[#2D3748]/70 rounded-lg transition-all"
                  >
                    Feature 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-[#2D3748]/70 rounded-lg transition-all"
                  >
                    Feature 2
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-[#00FFA3] transition-all">
              Investors
            </a>
            <a href="#" className="text-white hover:text-[#00FFA3] transition-all">
              Docs
            </a>

            {/* Social Icons */}
            <RxCross2 className="text-white text-xl cursor-pointer" />
            <FaDiscord className="text-blue-500 text-xl cursor-pointer hover:text-blue-400 transition-all" />
            <FaTelegram className="text-blue-400 text-xl cursor-pointer hover:text-blue-300 transition-all" />
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* "Launch App" Button - Right Side */}
        <button className="hidden md:block bg-[#00FFA3] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00cc82] transition-all">
          Launch App
        </button>

        {/* Mobile Menu - Full Width */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#141A26]/60 backdrop-blur-xl shadow-lg rounded-b-lg z-50 md:hidden border-t border-gray-700/30">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-white py-2 border-b border-gray-700/50">Products</a>
              <a href="#" className="text-white py-2 border-b border-gray-700/50">Investors</a>
              <a href="#" className="text-white py-2 border-b border-gray-700/50">Docs</a>
              <div className="flex space-x-4 py-2">
                <RxCross2 className="text-white text-xl cursor-pointer" />
                <FaDiscord className="text-blue-500 text-xl cursor-pointer hover:text-blue-400 transition-all" />
                <FaTelegram className="text-blue-400 text-xl cursor-pointer hover:text-blue-300 transition-all" />
              </div>
              <button className="bg-[#00FFA3] text-black px-6 py-2 rounded-full font-semibold shadow-md w-full hover:bg-[#00cc82] transition-all">
                Launch App
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}