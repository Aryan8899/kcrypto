import { FaDiscord, FaTelegram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <br />
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-[#0b0f19] relative">
        {/* Logo and Text Container */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://krystal.app/assets/images/logos/krystal-pure.svg" 
            alt="Krystal Logo" 
            className="h-6 sm:h-8"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-primary">krystal</h1>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Navigation Container (Rounded Black Box) - Desktop */}
        <div className="hidden md:flex items-center space-x-6 bg-[#141A26] px-6 py-2 rounded-full shadow-lg relative">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-all flex items-center"
            >
              Products <span className="ml-1">▾</span>
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-[#1A202C] shadow-md rounded-xl p-3 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#2D3748] rounded-lg transition-all"
                >
                  Feature 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#2D3748] rounded-lg transition-all"
                >
                  Feature 2
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-white hover:text-primary transition-all">
            Investors
          </a>
          <a href="#" className="text-white hover:text-primary transition-all">
            Docs
          </a>

          {/* Social Icons */}
          <RxCross2 className="text-white text-xl cursor-pointer" />
          <FaDiscord className="text-blue-500 text-xl cursor-pointer" />
          <FaTelegram className="text-blue-400 text-xl cursor-pointer" />
        </div>

        {/* "Launch App" Button - Desktop */}
        <button className="hidden md:block bg-green-600 text-black px-6 py-2 rounded-full font-semibold shadow-md">
          Launch App
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#141A26] shadow-lg rounded-b-lg z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-white py-2 border-b border-gray-700">Products</a>
              <a href="#" className="text-white py-2 border-b border-gray-700">Investors</a>
              <a href="#" className="text-white py-2 border-b border-gray-700">Docs</a>
              <div className="flex space-x-4 py-2">
                <RxCross2 className="text-white text-xl cursor-pointer" />
                <FaDiscord className="text-blue-500 text-xl cursor-pointer" />
                <FaTelegram className="text-blue-400 text-xl cursor-pointer" />
              </div>
              <button className="bg-green-600 text-black px-6 py-2 rounded-full font-semibold shadow-md w-full">
                Launch App
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}