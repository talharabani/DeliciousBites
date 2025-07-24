import React from 'react';
import { Star } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Gourmet Burger",
      description: "Premium beef patty with artisanal cheese and fresh vegetables",
      price: "2300Rs",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.9,
      category: "Mains"
    },
    {
      id: 2,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle and parmesan cheese",
      price: "2500Rs",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.8,
      category: "Mains"
    },
    {
      id: 3,
      name: "Seared Salmon",
      description: "Fresh Atlantic salmon with seasonal vegetables",
      price: "2000Rs",
      image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.7,
      category: "Mains"
    },
    {
      id: 4,
      name: "Chocolate Soufflé",
      description: "Decadent chocolate soufflé with vanilla ice cream",
      price: "1600Rs",
      image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.9,
      category: "Desserts"
    },
    {
      id: 5,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with homemade caesar dressing",
      price: "1800Rs",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.6,
      category: "Salads"
    },
    {
      id: 6,
      name: "Craft Cocktail",
      description: "Signature cocktail with premium spirits and fresh ingredients",
      price: "1400Rs",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=500&h=500",
      rating: 4.8,
      category: "Drinks"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of gourmet dishes, crafted with the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-orange-600 transform group-hover:scale-110 transition-transform duration-300">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {item.rating}
                    </span>
                  </div>

                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;