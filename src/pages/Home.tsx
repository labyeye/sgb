import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Sparkles, Truck, Award } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Exquisite Beads",
      subtitle: "For Traditional Sarees & Lehengas",
      background: "https://www.shutterstock.com/image-vector/imitation-flower-embroidery-beads-thread-600nw-326103653.jpg"
    },
    {
      title: "Premium Quality",
      subtitle: "Handcrafted Embellishments",
      background: "https://rizwanfashion.com/cdn/shop/products/CrownJalabiya-1200x1500_0002_Layer2.jpg?v=1634368016"
    },
    {
      title: "Traditional Elegance",
      subtitle: "Modern Craftsmanship",
      background: "https://rizwanfashion.com/cdn/shop/products/CrownJalabiya-1200x1500_0000_Layer4.jpg?v=1634368016"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Golden Pearl Beads",
      price: 2500,
      image: "https://ik.imagekit.io/os1mzoooe/8.png?updatedAt=1749527931588",
      category: "Pearl Beads",
      size: "3mm",
      color: "Gold"
    },
    {
      id: 2,
      name: "Crystal Stone Beads",
      price: 1800,
      image: "https://ik.imagekit.io/os1mzoooe/9.png?updatedAt=1749527931942",
      category: "Crystal Beads",
      size: "4mm",
      color: "Clear"
    },
    {
      id: 3,
      name: "Silk Thread Beads",
      price: 1200,
      image: "https://ik.imagekit.io/os1mzoooe/10.png?updatedAt=1749527932040",
      category: "Thread Beads",
      size: "2mm",
      color: "Multicolor"
    },
    {
      id: 4,
      name: "Metallic Sequin Beads",
      price: 3200,
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1749526685611",
      category: "Sequin Beads",
      size: "5mm",
      color: "Silver"
    }
  ];

  const monthProducts = [
    {
      id: 1,
      name: "Golden Pearl Beads",
      price: 2500,
      image: "https://ik.imagekit.io/os1mzoooe/2.png?updatedAt=1749526685712",
      category: "Pearl Beads",
      size: "3mm",
      color: "Gold"
    },
    {
      id: 2,
      name: "Crystal Stone Beads",
      price: 1800,
      image: "https://ik.imagekit.io/os1mzoooe/5.png?updatedAt=1749526685693",
      category: "Crystal Beads",
      size: "4mm",
      color: "Clear"
    },
    {
      id: 3,
      name: "Silk Thread Beads",
      price: 1200,
      image: "https://ik.imagekit.io/os1mzoooe/1.png?updatedAt=1749526685661",
      category: "Thread Beads",
      size: "2mm",
      color: "Multicolor"
    },
    {
      id: 4,
      name: "Metallic Sequin Beads",
      price: 3200,
      image: "https://ik.imagekit.io/os1mzoooe/6.png?updatedAt=1749526685650",
      category: "Sequin Beads",
      size: "5mm",
      color: "Silver"
    }
  ];

  const aboutSections = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Each bead is carefully selected and tested for durability, ensuring your sarees and lehengas maintain their elegance for years."
    },
    {
      icon: Award,
      title: "Traditional Craft",
      description: "Preserving age-old techniques while embracing modern designs, we create beads that honor tradition and contemporary style."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure delivery across India, ensuring your bead orders reach you in perfect condition and on time."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 transition-all duration-1000">
          <img
            src={heroSlides[currentSlide].background}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
              <defs>
                <radialGradient id="heroGradient1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="30" fill="url(#heroGradient1)" filter="blur(10px)" />
            </svg>
          </div>
          
          <div className="absolute bottom-32 right-32 w-24 h-24 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-float" style={{ animationDelay: '1s' }}>
              <defs>
                <radialGradient id="heroGradient2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="25" fill="url(#heroGradient2)" filter="blur(8px)" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {heroSlides[currentSlide].subtitle}
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-4 px-8 rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-sm">
            Explore Collection
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="sectionGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#sectionGradient1)" filter="blur(30px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Bead Collections</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium beads perfect for sarees, lehengas, and traditional wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Best Sellers this Month</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The most popular bead collections this month, loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
            {monthProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* About Sections */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="sectionGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#sectionGradient2)" filter="blur(25px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose BeadCraft</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional quality beads for your traditional wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="text-center space-y-6 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:from-yellow-200/80 group-hover:to-yellow-300/80 transition-all duration-500 border border-yellow-200/50">
                    <section.icon className="w-12 h-12 text-yellow-600" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-125 transition-transform duration-500">
                      <defs>
                        <radialGradient id={`aboutGradient${index}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="30" fill={`url(#aboutGradient${index})`} filter="blur(8px)" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black group-hover:text-yellow-600 transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
        <div className="absolute top-20 left-20 w-48 h-48 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse-slow">
            <defs>
              <radialGradient id="moreProductsGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#moreProductsGradient)" filter="blur(20px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Explore More Collections</h2>
            <p className="text-gray-600 text-lg">
              Browse our extensive range of beads for every occasion and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
            {[...featuredProducts, ...monthProducts.slice(0, 2)].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={{ ...product, id: product.id + index }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;