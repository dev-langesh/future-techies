import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-xl mr-4 flex items-center gap-4"
        >
          <img width="50px" src="/future.png" />
          Future Techies
        </Link>
        <input
          type="checkbox"
          className="hidden"
          id="menu-toggle"
          aria-label="Toggle navigation menu"
        />
        <label
          htmlFor="menu-toggle"
          className="text-white cursor-pointer md:hidden block"
        >
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="text-white hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#products" className="text-white hover:text-gray-300">
              Internships
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
