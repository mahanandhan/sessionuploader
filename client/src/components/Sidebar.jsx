import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`h-screen bg-blue-600 text-white flex flex-col items-center ${
        isExpanded ? "w-64" : "w-15"
      } transition-all duration-300 border-r border-gray-300`}
    >
        <br />
        <br />
        <br />
      {/* Menu toggle button */}
      <button
        className="p-4 hover:bg-blue-500 w-full flex items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars className="text-xl" />
        {isExpanded && <span className="ml-4">Menu</span>}
      </button>

      {/* Navigation links */}
      <nav className="mt-6 w-full">
        <a
          href="/"
          className="flex items-center p-4 hover:bg-blue-500"
        >
          <FaHome className="text-xl" />
          {isExpanded && <span className="ml-4">Home</span>}
        </a>
        <a
          href="/about"
          className="flex items-center p-4 hover:bg-blue-500"
        >
          <FaInfoCircle className="text-xl" />
          {isExpanded && <span className="ml-4">About</span>}
        </a>
        <a
          href="/contact"
          className="flex items-center p-4 hover:bg-blue-500"
        >
          <FaEnvelope className="text-xl" />
          {isExpanded && <span className="ml-4">Contact</span>}
        </a>
        {/* Add more links as needed */}
        <a href="/pdf" className="flex items-center p-3 hover:bg-blue-500">
          <span className="text-xl">📄</span>  
            {isExpanded && <span className="ml-4">PDFs</span>}
        </a>
        <a href="/videos" className="flex items-center p-3 hover:bg-blue-500">
          <span className="text-xl">🎥</span>  
            {isExpanded && <span className="ml-4">Videos</span>}
        </a>
      </nav>
    </div>
  );
};
export default Sidebar;