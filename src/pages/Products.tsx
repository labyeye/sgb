import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter, X } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = [
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
    },
    {
      id: 5,
      name: "Traditional Kundan Beads",
      price: 4500,
      image: "https://ik.imagekit.io/os1mzoooe/4.png?updatedAt=1749526685663",
      category: "Kundan Beads",
      size: "6mm",
      color: "Red"
    },
    {
      id: 6,
      name: "Mirror Work Beads",
      price: 2800,
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1749526685611",
      category: "Mirror Beads",
      size: "8mm",
      color: "Mirror"
    },
    {
      id: 7,
      name: "Zardozi Beads",
      price: 3800,
      image: "https://ik.imagekit.io/os1mzoooe/10.png?updatedAt=1749527932040",
      category: "Zardozi Beads",
      size: "4mm",
      color: "Gold"
    },
    {
      id: 8,
      name: "Antique Gold Beads",
      price: 5200,
      image: "https://ik.imagekit.io/os1mzoooe/9.png?updatedAt=1749527931942",
      category: "Gold Beads",
      size: "5mm",
      color: "Antique Gold"
    },
    {
      id: 9,
      name: "Rajasthani Mirror Beads",
      price: 2200,
      image: "https://ik.imagekit.io/os1mzoooe/8.png?updatedAt=1749527931588",
      category: "Mirror Beads",
      size: "7mm",
      color: "Multicolor"
    }
  ];

  const categories = ['All', 'Pearl Beads', 'Crystal Beads', 'Thread Beads', 'Sequin Beads', 'Kundan Beads', 'Mirror Beads', 'Zardozi Beads', 'Gold Beads'];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="productsHeroGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#productsHeroGradient)" filter="blur(30px)" />
        </svg>
      </div>
      
      {/* Header */}
      <section className="py-16 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-black mb-6">
              Our <span className="text-yellow-600">Bead Collections</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of premium beads for sarees, lehengas, and traditional Indian wear
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-t border-gray-100/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search beads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none focus:bg-white transition-all duration-300"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-2xl hover:bg-yellow-600 transition-colors duration-300 lg:hidden backdrop-blur-sm"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-32"
                />
                <span className="text-yellow-600 font-medium">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl lg:hidden animate-fade-in border border-gray-200/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-black">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-gray-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price: ₹{priceRange[1].toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="productsGridGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#productsGridGradient)" filter="blur(25px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No beads found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up mt-20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;