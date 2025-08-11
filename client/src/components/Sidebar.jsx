import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Professional color palette
  const bgColor = "bg-gray-900";
  const hoverStyle = "hover:bg-gray-800";

  return (
    <div
      className={`h-screen ${bgColor} text-gray-200 flex flex-col items-center ${
        isExpanded ? "w-64" : "w-16"
      } transition-all duration-300 border-r border-gray-800 shadow-lg`}
    >
      {/* Logo / Brand */}
      <div className="flex items-center justify-center w-full py-6 border-b border-gray-800">
        {isExpanded ? (
          <h1 className="text-lg font-semibold tracking-tight">
            Session Uploader
          </h1>
        ) : (
          <span className="text-xl font-bold mr-4">📁</span>
        )}
      </div>

      {/* Menu toggle button */}
      <button
        className={`p-4 w-full flex items-center ${hoverStyle} transition-all duration-200`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars className="text-base" />
        {isExpanded && <span className="ml-3 font-medium">Menu</span>}
      </button>

      {/* Navigation links */}
      <nav className="mt-2 w-full flex-1">
        <a
          href="/"
          className={`flex items-center p-4 ${hoverStyle} transition-colors duration-200`}
        >
          <FaHome className="text-base" />
          {isExpanded && <span className="ml-3">Home</span>}
        </a>

        <a
          href="/about"
          className={`flex items-center p-4 ${hoverStyle} transition-colors duration-200`}
        >
          <FaInfoCircle className="text-base" />
          {isExpanded && <span className="ml-3">About</span>}
        </a>

        <a
          href="/contact"
          className={`flex items-center p-4 ${hoverStyle} transition-colors duration-200`}
        >
          <FaEnvelope className="text-base" />
          {isExpanded && <span className="ml-3">Contact</span>}
        </a>

        {/* Divider */}
        <div className="border-t border-gray-800 my-3"></div>

        <a
          href="/pdf"
          className={`flex items-center p-4 ${hoverStyle} transition-colors duration-200`}
        >
          <span className="text-base">📄</span>
          {isExpanded && <span className="ml-3">PDFs</span>}
        </a>

        <a
          href="/videos"
          className={`flex items-center p-4 ${hoverStyle} transition-colors duration-200`}
        >
          <span className="text-base">🎥</span>
          {isExpanded && <span className="ml-3">Videos</span>}
        </a>
      </nav>

      {/* Footer */}
      <div className="w-full p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
        {isExpanded ? "© 2025 Session Uploader" : "©25"}
      </div>
    </div>
  );
};

export default Sidebar;
