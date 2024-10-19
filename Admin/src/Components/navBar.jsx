import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4">
        {/* Upper Section: Logo, Admin Panel, and Heading */}
        <div className="flex items-center justify-between w-full mb-4 md:mb-0">
          <a href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-200">
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/20/81/06/1000_F_320810684_Nuz9z2kpHSNyS4RVLqkOpD6bddOwZjem.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">StyleMart</span>
          </a>
          
          {/* Admin Panel Badge */}
          <div className="ml-4 mr-10 text-lg font-semibold text-gray-900 dark:text-gray-300 bg-yellow-200 dark:bg-yellow-700 py-1 px-3 rounded-lg">
            Admin Panel
          </div>
        </div>

        {/* Lower Section: Navigation Items */}
        <div className="flex flex-col md:flex-row w-full md:justify-between items-center">
          <ul className="hidden md:flex flex-col md:flex-row w-full font-medium border rounded-lg md:space-x-8 md:border-0 dark:border-gray-700 text-xl">
            <li>
              <Link to="/">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Shop
                </a>
              </Link>
            </li>
            <li>
              <Link to="/mens">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Men
                </a>
              </Link>
            </li>
            <li>
              <Link to="/womens">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Women
                </a>
              </Link>
            </li>
            <li>
              <Link to="/kids">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Kids
                </a>
              </Link>
            </li>
          </ul>

          {/* Right section with buttons */}
          <div className="flex items-center md:order-2 space-x-3 mb- md:mb-0">
            <button
              onClick={toggleDarkMode}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5"
            >
              {isDarkMode ? (
                <i className="fa-solid fa-sun fa-2x"></i>
              ) : (
                <i className="fa-solid fa-moon fa-2x"></i>
              )}
            </button>
            <Link to="/cart">
              <button
                type="button"
                className="relative text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5"
              >
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
              </button>
            </Link>

            <Link to="/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full w-full bg-gray-200 dark:bg-gray-900 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
              id="navbar-sticky"
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                type="button"
                className="self-end mb-2 p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-xmark fa-2x"></i>
              </button>

              {/* Menu Items with Full Left Alignment */}
              <ul className="flex flex-col w-full space-y-2 text-left">
                <li>
                  <Link to="/">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Shop
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/mens">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Men
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/womens">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Women
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/kids">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Kids
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
