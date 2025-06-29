
import { useState, useEffect } from 'react';
import { ChefHat, MapPin, Phone, Mail, Clock, Star, Utensils, Heart, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarShrunk, setNavbarShrunk] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      setNavbarShrunk(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best Italian food in Tahlequah! Been coming here for 15 years and it never disappoints.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      text: "Authentic flavors, generous portions, and the warmest hospitality. A true local gem!",
      rating: 5
    },
    {
      name: "Emily Chen",
      text: "The pasta is made fresh daily and you can taste the difference. Absolutely phenomenal!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navbarShrunk ? 'bg-deep-red/95 backdrop-blur-sm py-2' : 'bg-deep-red/90 py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-gold-400" />
            <span className="font-cinzel text-2xl font-bold text-cream-50">Napolis</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-cream-50 hover:text-gold-400 transition-colors font-lato"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cream-50 hover:text-gold-400 transition-colors font-lato"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-cream-50 hover:text-gold-400 transition-colors font-lato"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cream-50 hover:text-gold-400 transition-colors font-lato"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gold-400" />
            <span className="text-cream-50 font-lato">(918) 207-0870</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 text-shadow-lg">
            Napolis
          </h1>
          <p className="font-cinzel text-2xl md:text-3xl mb-4 text-gold-400">
            Italian Restaurant
          </p>
          <p className="font-lato text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Proudly Serving Tahlequah for Over 20 Years
          </p>
          <p className="font-lato text-lg mb-12 max-w-xl mx-auto opacity-90">
            Authentic Italian cuisine in a warm, family-friendly atmosphere
          </p>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-deep-red hover:bg-deep-red/90 text-white px-8 py-3 text-lg font-lato rounded-full transition-all duration-300 hover:scale-105"
          >
            Discover Our Story
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SVG Divider */}
      <div className="relative">
        <svg className="w-full h-12 text-olive-600" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-olive-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cinzel text-5xl font-bold text-deep-red mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="font-lato text-lg text-espresso-800 leading-relaxed mb-6">
                For over two decades, Napolis Italian Restaurant has been the heart of authentic Italian dining in Tahlequah, Oklahoma. Our journey began with a simple dream: to bring the rich flavors and warm hospitality of Italy to our beloved community.
              </p>
              <p className="font-lato text-lg text-espresso-800 leading-relaxed mb-6">
                Every dish is crafted with love, using traditional recipes passed down through generations and the finest ingredients sourced locally and from Italy. From our handmade pasta to our wood-fired pizzas, each bite tells a story of passion and dedication.
              </p>
              <p className="font-lato text-lg text-espresso-800 leading-relaxed">
                We're more than just a restaurant – we're a gathering place where families create memories, friends celebrate life, and the community comes together over exceptional food.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Italian pasta" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pizza preparation" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wine and dining" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl font-bold text-deep-red mb-6">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-lato text-espresso-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-cinzel font-semibold text-deep-red">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-deep-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gold-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-gold-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-cinzel text-5xl font-bold mb-6">Our Menu</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-12"></div>
          
          <div className="max-w-2xl mx-auto">
            <Utensils className="h-24 w-24 text-gold-400 mx-auto mb-8" />
            <p className="font-lato text-xl mb-8 opacity-90">
              We're putting the finishing touches on our complete menu presentation. 
              Our chefs are working hard to showcase our authentic Italian specialties.
            </p>
            <p className="font-cinzel text-2xl text-gold-400 mb-8">
              Full Menu Coming Soon
            </p>
            <p className="font-lato text-lg mb-8">
              In the meantime, call us at <span className="text-gold-400 font-semibold">(918) 207-0870</span> 
              to learn about today's specials and make a reservation.
            </p>
            <Button 
              variant="outline" 
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-red font-lato"
            >
              Call for Today's Specials
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-5xl font-bold text-deep-red mb-6">Visit Us</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <Card className="bg-white shadow-lg p-8 mb-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-deep-red" />
                    <div>
                      <h3 className="font-cinzel text-xl font-semibold text-deep-red">Address</h3>
                      <p className="font-lato text-espresso-700">901 S Muskogee Ave<br />Tahlequah, OK, United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-deep-red" />
                    <div>
                      <h3 className="font-cinzel text-xl font-semibold text-deep-red">Phone</h3>
                      <p className="font-lato text-espresso-700">(918) 207-0870</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-deep-red" />
                    <div>
                      <h3 className="font-cinzel text-xl font-semibold text-deep-red">Hours</h3>
                      <p className="font-lato text-espresso-700">Call for current hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Form */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-cinzel text-2xl font-semibold text-deep-red mb-6">Get in Touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="font-lato"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="font-lato"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="font-lato"
                    />
                    <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/90 font-lato">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Map */}
            <div className="h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.8!2d-94.969!3d35.916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cb7c8!2s901%20S%20Muskogee%20Ave%2C%20Tahlequah%2C%20OK!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso-900 text-cream-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <ChefHat className="h-8 w-8 text-gold-400" />
            <span className="font-cinzel text-3xl font-bold">Napolis Italian Restaurant</span>
          </div>
          
          <p className="font-lato text-lg mb-4">
            Proudly Serving Tahlequah for Over 20 Years
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-5 w-5 text-deep-red fill-current" />
            <span className="font-lato">Made with love for our community</span>
            <Heart className="h-5 w-5 text-deep-red fill-current" />
          </div>
          
          <p className="font-lato text-sm opacity-75">
            © 2024 Napolis Italian Restaurant. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-deep-red hover:bg-deep-red/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
