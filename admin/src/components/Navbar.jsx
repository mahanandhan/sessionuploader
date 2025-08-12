import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* Optional Logo */}
          <div className="w-8 h-8">
            <img src="nmlogo.jpg" alt="nm_courses" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
            Session Uploader
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-6 py-3 space-y-2">
          <a
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
