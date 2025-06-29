
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-cinzel text-2xl font-bold text-deep-red">
              Napoli's
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-lato text-espresso-800 hover:text-deep-red transition-colors">Home</a>
              <a href="#about" className="font-lato text-espresso-800 hover:text-deep-red transition-colors">About</a>
              <Link to="/menu" className="font-lato text-espresso-800 hover:text-deep-red transition-colors">Menu</Link>
              <a href="#contact" className="font-lato text-espresso-800 hover:text-deep-red transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 text-shadow-lg animate-fade-in">
            Napoli's Italian Restaurant
          </h1>
          <p className="font-lato text-xl md:text-2xl mb-4 animate-fade-in">
            Proudly Serving Tahlequah for Over 20 Years
          </p>
          <p className="font-lato text-lg md:text-xl mb-8 animate-fade-in">
            Authentic Italian cuisine in a warm, family-friendly atmosphere
          </p>
          <div className="space-x-4">
            <Link 
              to="/menu"
              className="inline-block bg-deep-red hover:bg-red-700 text-white font-lato font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Menu
            </Link>
            <a 
              href="#about"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-deep-red text-white font-lato font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-red mb-8">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-lato text-lg text-espresso-700 mb-6 leading-relaxed">
                  For over two decades, Napoli's has been serving the Tahlequah community with authentic Italian cuisine that brings families together. Our recipes have been passed down through generations, ensuring every dish carries the traditional flavors of Italy.
                </p>
                <p className="font-lato text-lg text-espresso-700 mb-6 leading-relaxed">
                  From our signature pasta dishes to our wood-fired pizzas, every meal is prepared with fresh ingredients and genuine care. We believe in creating not just great food, but lasting memories for our guests.
                </p>
                <p className="font-lato text-lg text-espresso-700 leading-relaxed">
                  Thank you for making us a part of your family traditions. We look forward to serving you for many more years to come.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Italian restaurant interior"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-red rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-red mb-8">
            Taste of Italy
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="font-lato text-xl text-espresso-800 max-w-2xl mx-auto mb-12">
            Discover our extensive menu featuring traditional Italian favorites and signature creations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍝</div>
              <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4">Pasta</h3>
              <p className="font-lato text-espresso-700">
                From classic spaghetti to gourmet ravioli, our pasta dishes are made fresh daily with authentic sauces.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4">Pizza</h3>
              <p className="font-lato text-espresso-700">
                Hand-tossed dough, premium toppings, and melted mozzarella create the perfect Italian pizza experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🐟</div>
              <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4">Seafood</h3>
              <p className="font-lato text-espresso-700">
                Fresh seafood prepared with Italian flair, from linguini with clams to our signature seafood combinations.
              </p>
            </div>
          </div>

          <Link 
            to="/menu"
            className="inline-block bg-deep-red hover:bg-red-700 text-white font-lato font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-red mb-8">
                Visit Us Today
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="font-lato text-lg">
                      <strong className="text-deep-red">Address:</strong><br />
                      901 S Muskogee Ave<br />
                      Tahlequah, OK, United States
                    </div>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-deep-red font-lato">Phone:</strong>
                    <span className="ml-2 font-lato text-lg">+1 918-207-0870</span>
                  </div>
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-6">Hours</h3>
                <div className="space-y-2 font-lato text-espresso-700">
                  <div className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday:</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-6">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="font-lato text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="font-cinzel text-3xl font-bold text-gold-400 mb-4">
            Napoli's Italian Restaurant
          </div>
          <p className="font-lato text-lg mb-4">
            Proudly Serving Tahlequah for Over 20 Years
          </p>
          <p className="font-lato text-sm text-gray-400">
            © 2024 Napoli's Italian Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
