import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Awards Won", value: "25+", color: "text-yellow-500" },
    { icon: Users, label: "Happy Customers", value: "10K+", color: "text-blue-500" },
    { icon: Clock, label: "Years Experience", value: "15+", color: "text-green-500" },
    { icon: Heart, label: "Dishes Served", value: "50K+", color: "text-red-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
                alt="Chef preparing food"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl -z-10 transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-80 transform hover:scale-110 transition-transform duration-500"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 15 years, DeliciousBites has been crafting exceptional culinary experiences 
                that bring people together. Our passion for fresh ingredients and innovative flavors 
                drives everything we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings as a small family restaurant to becoming a celebrated 
                dining destination, we've never forgotten our commitment to quality, creativity, 
                and outstanding service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-orange-200"
                  >
                    <div className={`${stat.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;