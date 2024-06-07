// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold">FindersFee</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <Link to="/" className="block hover:underline" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/services" className="block hover:underline" onClick={toggleMobileMenu}>Services</Link>
          <Link to="/about" className="block hover:underline" onClick={toggleMobileMenu}>About</Link>
          <Link to="/login" className="block hover:underline" onClick={toggleMobileMenu}>Login</Link>
          <Link to="/signup" className="block hover:underline" onClick={toggleMobileMenu}>Sign Up</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
