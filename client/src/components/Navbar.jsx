import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">Session Uploader</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-3">
          <a href="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </div>
      )}
    </header>
  );
};
export default Navbar;
