import React from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from "react-icons/fa";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  // Colors
  const bgColor = "bg-gradient-to-b from-gray-900 to-gray-800";
  const hoverStyle = "hover:bg-gray-700";

  return (
    <div
      className={`flex flex-col h-screen text-gray-200 shadow-lg border-r border-gray-700
        transition-width duration-500 ease-in-out
        ${bgColor} ${isExpanded ? "w-64" : "w-16"}`}
      style={{ transitionProperty: "width" }} // smoother width transition
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-full py-6 border-b border-gray-700">
        {isExpanded ? (
          <h1 className="text-xl font-bold tracking-wide select-none text-white drop-shadow-lg">
            Session Uploader
          </h1>
        ) : (
          <span className="text-3xl select-none">📁</span>
        )}
      </div>

      {/* Toggle button */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-full py-4 cursor-pointer focus:outline-none group"
      >
        <FaBars
          className={`text-white text-xl transition-transform duration-300 ${
            isExpanded ? "rotate-90" : "rotate-0"
          } group-hover:text-blue-400`}
        />
        {isExpanded && (
          <span className="ml-4 text-white font-semibold select-none tracking-wide">
            Menu
          </span>
        )}
      </button>

      {/* Navigation links */}
      <nav className="flex flex-col mt-4 flex-1 overflow-y-auto">
        {[
          { label: "Home", icon: <FaHome />, href: "/" },
          { label: "About", icon: <FaInfoCircle />, href: "/about" },
          { label: "Contact", icon: <FaEnvelope />, href: "/contact" },
          { label: "PDFs", icon: "📄", href: "/pdf" },
          // { label: "Videos", icon: "📹", href: "/videos" },
          { label: "Settings", icon: "⚙️", href: "/settings" },
        ].map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            className={`flex items-center px-5 py-3 transition-colors duration-200
              rounded-r-lg
              ${hoverStyle} ${
              isExpanded ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-lg select-none">{icon}</span>
            {isExpanded && (
              <span className="ml-4 text-white font-medium select-none">{label}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="py-3 px-5 border-t border-gray-700 text-gray-400 text-xs select-none text-center">
        {isExpanded ? "© 2025 Session Uploader" : "© 25"}
      </footer>
    </div>
  );
};

export default Sidebar;
