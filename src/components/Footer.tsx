import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/9fb2e94f-6d62-49bc-a8c7-21072a3173d6.png"
                alt="ARD Logo"
                className="h-10 w-10"
              />
              <span className="text-white font-bold text-xl ransition-all duration-300
  hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 
  hover:bg-clip-text hover:text-transparent">
                ASHANI DEWMINI
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate full-stack developer creating innovative digital
              solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-semibold mb-4 transition-all duration-300
  hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 
  hover:bg-clip-text hover:text-transparent"
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-semibold mb-4 transition-all duration-300
  hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 
  hover:bg-clip-text hover:text-transparent"
            >
              Services
            </h3>

            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-400">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-400">AI & Machine Learning</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="group">
              <h3
                className="text-white font-semibold mb-4 transition-all duration-300 
    group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 
    group-hover:bg-clip-text group-hover:text-transparent"
              >
                Get In Touch
              </h3>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:ashanidewmini33@gmail.com"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200"
              >
                ashanidewmini33@gmail.com
              </a>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/ashani-rasangika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a
                  href="https://github.com/ashani-rasangika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <FaGithub size={14} />
                </a>
                <a
                  href="https://www.facebook.com/ashani.r.dewmini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <FaFacebookF size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            © 2025 Ashani Dewmini. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 font-medium">
            Code with purpose
            <span className="inline-block animate-bounce mx-1">🎯</span>
            Design with care
            <span className="inline-block animate-bounce mx-1">🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
