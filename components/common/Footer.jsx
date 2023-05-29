import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} liveeasy. All rights reserved.
          </p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="text-white hover:text-gray-300">
              Proudcts
            </a>
          </li>
          <li>
            <a href="#internship" className="text-white hover:text-gray-300">
              Internships
            </a>
          </li>
        
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
