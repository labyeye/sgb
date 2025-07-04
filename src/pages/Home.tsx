import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Award } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Exquisite Beads",
      subtitle: "For Traditional Sarees & Lehengas",
      background:
        "https://www.shutterstock.com/image-vector/imitation-flower-embroidery-beads-thread-600nw-326103653.jpg",
    },
    {
      title: "Premium Quality",
      subtitle: "Handcrafted Embellishments",
      background:
        "https://rizwanfashion.com/cdn/shop/products/CrownJalabiya-1200x1500_0002_Layer2.jpg?v=1634368016",
    },
    {
      title: "Traditional Elegance",
      subtitle: "Modern Craftsmanship",
      background:
        "https://rizwanfashion.com/cdn/shop/products/CrownJalabiya-1200x1500_0000_Layer4.jpg?v=1634368016",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Silver Beads",
      image: "https://ik.imagekit.io/os1mzoooe/1.png?updatedAt=1749526685661",
      category: "Silver Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB21",
    },
    {
      id: 2,
      name: "Milky White Beads",
      image: "https://ik.imagekit.io/os1mzoooe/2.png?updatedAt=1751577008304",
      category: "Milky White Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB121",
    },
    {
      id: 3,
      name: "Rose Gold Light Beads",
      image: "https://ik.imagekit.io/os1mzoooe/4.png?updatedAt=1751577008492",
      category: "Rose Gold Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB39 Light",
    },
    {
      id: 1,
      name: "Rose Gold Dark Beads",
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1751577008317",
      category: "Rose Gold Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB39 Dark",
    },
    {
      id: 1,
      name: "Light Rabdi Beads",
      image: "https://ik.imagekit.io/os1mzoooe/5.png?updatedAt=1751577004245",
      category: "Light Rabdi Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB16",
    },
  ];

  const monthProducts = [
    {
      id: 1,
      name: "Silver Beads",
      image: "https://ik.imagekit.io/os1mzoooe/1.png?updatedAt=1749526685661",
      category: "Silver Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB21",
    },
    {
      id: 2,
      name: "Milky White Beads",
      image: "https://ik.imagekit.io/os1mzoooe/2.png?updatedAt=1751577008304",
      category: "Milky White Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB121",
    },
    {
      id: 3,
      name: "Rose Gold Light Beads",
      image: "https://ik.imagekit.io/os1mzoooe/4.png?updatedAt=1751577008492",
      category: "Rose Gold Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB39 Light",
    },
    {
      id: 1,
      name: "Rose Gold Dark Beads",
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1751577008317",
      category: "Rose Gold Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB39 Dark",
    },
    {
      id: 1,
      name: "Light Rabdi Beads",
      image: "https://ik.imagekit.io/os1mzoooe/5.png?updatedAt=1751577004245",
      category: "Light Rabdi Beads",
      size: ["2mm", "2.5mm"],
      color: "SGB16",
    },
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

          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
              <defs>
                <radialGradient id="heroGradient1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="url(#heroGradient1)"
                filter="blur(10px)"
              />
            </svg>
          </div>

          <div className="absolute bottom-32 right-32 w-24 h-24 opacity-15">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-float"
              style={{ animationDelay: "1s" }}
            >
              <defs>
                <radialGradient id="heroGradient2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="url(#heroGradient2)"
                filter="blur(8px)"
              />
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
                index === currentSlide
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50"
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
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="url(#sectionGradient1)"
              filter="blur(30px)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
              Hot Selling Beads
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium beads perfect for
              sarees, lehengas, and traditional wear
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
            <h2 className="text-4xl font-bold text-black mb-4">
              Trending Colors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The most popular bead collections this month, loved by our
              customers
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
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="url(#sectionGradient2)"
              filter="blur(25px)"
            />
          </svg>
        </div>
      </section>
      {/* Bead Size & Shape Guide Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-100/30 filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100/20 filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bead Size & Shape Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our visual guide to select the perfect beads for your project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Size Guide */}
            {/* Size Guide */}
            <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-2 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
                Size Reference Chart
              </h3>
              <div className="space-y-6">
                {/* 2mm */}
                <div className="flex items-center">
                  <div className="relative mr-4 flex items-center justify-center">
                    {/* Cylinder shape */}
                    <div
                      className="w-12 h-6 bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-yellow-400 rounded-full"
                      style={{
                        transform: "perspective(100px) rotateX(20deg)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Top circle */}
                      <div className="absolute -top-1 left-0 right-0 h-2 bg-yellow-300 rounded-full border border-yellow-400"></div>
                      {/* Bottom circle */}
                      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="absolute text-xs font-bold text-yellow-800">
                      2mm
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">
                      Small - Perfect for premium embroidery designs
                    </p>
                  </div>
                </div>

                {/* 2.5mm */}
                <div className="flex items-center">
                  <div className="relative mr-4 flex items-center justify-center">
                    {/* Cylinder shape */}
                    <div
                      className="w-14 h-7 bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-yellow-400 rounded-full"
                      style={{
                        transform: "perspective(100px) rotateX(20deg)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Top circle */}
                      <div className="absolute -top-1 left-0 right-0 h-2 bg-yellow-300 rounded-full border border-yellow-400"></div>
                      {/* Bottom circle */}
                      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="absolute text-xs font-bold text-yellow-800">
                      2.5mm
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">
                      Standard - Perfect for cost effective and regular design
                    </p>
                  </div>
                </div>

                {/* 4mm */}
                <div className="flex items-center">
                  <div className="relative mr-4 flex items-center justify-center">
                    {/* Cylinder shape */}
                    <div
                      className="w-16 h-8 bg-gradient-to-b from-amber-200 to-amber-300 border-2 border-amber-400 rounded-full"
                      style={{
                        transform: "perspective(100px) rotateX(20deg)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Top circle */}
                      <div className="absolute -top-1 left-0 right-0 h-2 bg-amber-300 rounded-full border border-amber-400"></div>
                      {/* Bottom circle */}
                      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <span className="absolute text-sm font-bold text-amber-800">
                      4mm
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">
                      Big - Used together with 2mm and 2.5mm beads
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                Shape Reference Guide
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Round", icon: "●", desc: "Classic all-purpose" },
                  { name: "Bicone", icon: "⬢", desc: "Faceted sparkle" },
                  { name: "Cube", icon: "□", desc: "Modern geometric" },
                  { name: "Rondelle", icon: "⭘", desc: "Flattened disc" },
                  { name: "Cylinder", icon: "▬", desc: "Tube/spacer beads" },
                  { name: "Drop", icon: "▽", desc: "Teardrop shape" },
                ].map((shape, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors duration-200 text-center group"
                  >
                    <div className="text-3xl mb-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      {shape.icon}
                    </div>
                    <h4 className="font-medium text-gray-800">{shape.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{shape.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
        <div className="absolute top-20 left-20 w-48 h-48 opacity-5">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-pulse-slow"
          >
            <defs>
              <radialGradient
                id="moreProductsGradient"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="url(#moreProductsGradient)"
              filter="blur(20px)"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
