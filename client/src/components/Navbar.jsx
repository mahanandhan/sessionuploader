import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <div className="w-10 h-10">
            <img src="nmlogo.jpg" alt="nm_courses" className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
            Session Uploader
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="relative group transition-colors duration-300 hover:text-blue-600"
              >
                {item}
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer group"
        >
          {/* Hamburger bars with smooth transition to X */}
          <span
            className={`block absolute h-1 w-6 bg-gray-700 rounded transform transition duration-300 ease-in-out origin-center
            ${menuOpen ? "rotate-45" : "-translate-y-2.5"}`}
          />
          <span
            className={`block absolute h-1 w-6 bg-gray-700 rounded transition duration-300 ease-in-out
            ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block absolute h-1 w-6 bg-gray-700 rounded transform transition duration-300 ease-in-out origin-center
            ${menuOpen ? "-rotate-45" : "translate-y-2.5"}`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3 font-semibold text-gray-700">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
