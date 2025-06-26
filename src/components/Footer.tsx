
import React from 'react';

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
              <span className="text-white font-bold text-xl">DEVELOPER</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate full-stack developer creating innovative digital solutions 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Web Development</span></li>
              <li><span className="text-gray-400">Mobile Apps</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
              <li><span className="text-gray-400">Consulting</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">hello@developer.com</p>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200">
                  <span className="text-xs font-bold">gh</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200">
                  <span className="text-xs font-bold">tw</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Developer Portfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
