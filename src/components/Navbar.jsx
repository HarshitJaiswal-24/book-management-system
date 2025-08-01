import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-indigo-700 text-white p-4 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
         <span>Online Library</span>
      </h1>

      {/* Navigation Links + GitHub */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <div className="space-x-4 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/browse" className="hover:text-yellow-300 transition">Browse Books</Link>
          <Link to="/add" className="hover:text-yellow-300 transition">Add Book</Link>
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/HarshitJaiswal-24/book-management-system"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white-700 px-4 py-2 rounded-lg shadow hover:bg-indigo-100 transition text-sm font-semibold"
        >
           GitHub
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
