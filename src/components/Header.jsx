import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold text-green-500">FindersFee</Link>
    <nav className="flex items-center space-x-4">
  <Link to="/" className="text-gray-700 hover:text-green-500 transition duration-300">Home</Link>
  <Link to="/services" className="text-gray-700 hover:text-green-500 transition duration-300">Services</Link>
  <Link to="/about" className="text-gray-700 hover:text-green-500 transition duration-300">About</Link>
  <input type="text" placeholder="Search services" className="border rounded p-2" />
  <Link to="/login" className="text-gray-700 hover:text-green-500 transition duration-300">Login</Link>
  <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Join</Link>
</nav>

  </header>
);

export default Header;
