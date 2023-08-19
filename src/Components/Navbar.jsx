import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="p-5 pb-0 flex justify-center sm:justify-between items-center bg-gradient-to-r from-blue-500 to-blue-800 dark:border-gray-700 border-gray-200">
      <Link to="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white mr-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>


        <p className="text-2xl font-bold text-white whitespace-nowrap">Google Search</p>
      </Link>
      <SearchBar />
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
      >
        {darkTheme ? 'Light 💡' : 'Dark 🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
