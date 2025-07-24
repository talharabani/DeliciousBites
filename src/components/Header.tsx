import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-2xl transform-gpu' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h1 className={`text-2xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            } cursor-pointer transform-gpu`}
            onClick={() => scrollToSection('hero')}>
              DeliciousBites
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'
                } before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full`}
              >
                {item === 'Home' ? 'Home' : item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl transform-gpu">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                >
                  {item === 'Home' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;