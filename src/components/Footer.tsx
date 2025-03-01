"use client";

import { FaTwitter, FaTelegramPlane, FaDiscord, FaChartBar, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiOutlineBook, AiOutlineEdit, AiOutlinePlayCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] py-8 sm:py-16 px-4 sm:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout (1 column) */}
        <div className="flex flex-col space-y-10 md:hidden">
          {/* Logo & App Download */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://krystal.app/assets/images/logos/krystal.svg"
              className="w-28 sm:w-32 h-auto"
              alt="Krystal Logo"
            />
            
            {/* Download Buttons */}
            <div className="flex flex-col space-y-3 w-full max-w-[200px] mx-auto">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-full h-auto"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-full h-auto"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="./image/Apk.png"
                  alt="Download APK"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>

          {/* Social Links + Docs (Grid Layout) */}
          <div className="grid grid-cols-2 gap-6">
    {/* Social Media Links */}
    <div className="flex flex-col space-y-3 text-white text-sm">
      <h3 className="font-semibold text-[#00FFA3] mb-2 text-center">Connect</h3>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <FaTwitter className="text-lg text-blue-400" />
        <span>Twitter</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <FaTelegramPlane className="text-lg text-blue-300" />
        <span>Telegram</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <FaDiscord className="text-lg text-indigo-400" />
        <span>Discord</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <FaChartBar className="text-lg text-orange-400" />
        <span>Debank</span>
      </a>
    </div>
    
    {/* Docs & More Resources */}
    <div className="flex flex-col space-y-3 text-white text-sm">
      <h3 className="font-semibold text-[#00FFA3] mb-2 text-center">Resources</h3>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <AiOutlineBook className="text-lg" />
        <span>Documentation</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <AiOutlineEdit className="text-lg" />
        <span>Blog</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-2 hover:text-[#00FFA3] transition">
        <AiOutlinePlayCircle className="text-lg" />
        <span>Videos</span>
      </a>
    </div>
  </div>
          
          {/* More Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-[#00FFA3] transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-blue-500 hover:text-[#00FFA3] transition">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-red-500 hover:text-[#00FFA3] transition">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Desktop Layout (4 columns) */}
        <div className="hidden md:flex md:flex-row justify-between items-start">
          {/* Left Section - Logo & App Download */}
          <div className="flex flex-col items-start space-y-4">
            {/* Krystal Logo */}
            <img
              src="https://krystal.app/assets/images/logos/krystal.svg"
              className="w-36 h-auto"
              alt="Krystal Logo"
            />
            <br />
            
            {/* Download Buttons */}
            <div className="flex flex-col space-y-2">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-40"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-40"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="./image/Apk.png"
                  alt="Download APK"
                  className="w-40"
                />
              </a>
            </div>
          </div>

          {/* Middle Section - Social Media Links */}
          <div className="flex flex-col space-y-3 text-white text-sm ml-0 lg:ml-20">
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaTwitter className="text-lg text-blue-400" />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaTelegramPlane className="text-lg text-blue-300" />
              <span>Telegram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaDiscord className="text-lg text-indigo-400" />
              <span>Discord</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaChartBar className="text-lg text-orange-400" />
              <span>Debank</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaFacebook className="text-lg text-blue-600" />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaLinkedin className="text-lg text-blue-500" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <FaYoutube className="text-lg text-red-500" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Right Section - Docs & Illustration */}
          <div className="flex flex-col space-y-3 text-white text-sm">
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <AiOutlineBook className="text-lg" />
              <span>Documentation</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <AiOutlineEdit className="text-lg" />
              <span>Blog</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-[#00FFA3] transition">
              <AiOutlinePlayCircle className="text-lg" />
              <span>Videos</span>
            </a>
          </div>

          {/* Astronaut Image */}
          <div>
            <img
              src="https://krystal.app/assets/images/illustration/Krystal_Victory.svg"
              alt="Krystal Astronaut"
              className="w-60 lg:w-70 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-white text-sm sm:text-base mt-8 sm:mt-10 pt-6 border-t border-gray-800">Krystal © 2024</div>
    </footer>
  );
}