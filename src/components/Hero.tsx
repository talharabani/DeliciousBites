import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500"></div>
      
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Delicious food background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transform hover:scale-105 transition-all duration-700 ease-out">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up transform-gpu perspective-1000 rotate-x-12 hover:rotate-x-0 transition-transform duration-700">
            Delicious
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent transform hover:scale-110 transition-transform duration-500">
              Bites
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 transform translate-y-4 animate-fade-in-up animation-delay-300">
          Experience culinary excellence with our handcrafted dishes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToMenu}
            className="group relative px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25"
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-110"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl"
          >
            Contact Us
          </button>
        </div>

        <div className="floating-food-elements">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20 animate-float animation-delay-0">
            <div className="w-full h-full bg-yellow-400 rounded-full transform rotate-45 shadow-lg"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-30 animate-float animation-delay-1000">
            <div className="w-full h-full bg-red-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 opacity-15 animate-float animation-delay-2000">
            <div className="w-full h-full bg-orange-400 rounded-full transform -rotate-12 shadow-lg"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToMenu}>
        <ArrowDown className="h-8 w-8 text-white hover:text-yellow-300 transition-colors duration-300" />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-0 {
          animation-delay: 0s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;