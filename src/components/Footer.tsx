import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              DeliciousBites
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting exceptional culinary experiences with passion, creativity, and the finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'Reservations', 'About Us', 'Contact', 'Private Events'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-sm">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Rabnai
          </p>
          <p className="text-gray-500 mt-2">© 2025 talharabani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;