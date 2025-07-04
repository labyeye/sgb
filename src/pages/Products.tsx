import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { Search, Filter, X } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const allProducts = [
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
  const allSizes = useMemo(() => {
    const sizes = new Set<string>();
    allProducts.forEach((product) => {
      if (Array.isArray(product.size)) {
        product.size.forEach((size) => sizes.add(size));
      } else {
        sizes.add(product.size);
      }
    });
    return Array.from(sizes).sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [allProducts]);
  const categories = [
    "All",
    "Rose Gold Beads",
    "Silver Beads",
    "Milky White Beads",
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      // Handle size filtering
      const matchesSize =
        selectedSizes.length === 0 ||
        (Array.isArray(product.size)
          ? product.size.some((size) => selectedSizes.includes(size))
          : selectedSizes.includes(product.size));

      return matchesSearch && matchesCategory && matchesSize;
    });
  }, [searchTerm, selectedCategory, selectedSizes, priceRange]);

  // Add this helper function to toggle size selection
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

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
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#productsHeroGradient)"
            filter="blur(30px)"
          />
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
              Discover our curated collection of premium beads for sarees,
              lehengas, and traditional Indian wear
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
            {/* Inside the Desktop Filters section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Size Filter Dropdown */}
              <div className="relative group">
                <button className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none transition-all duration-300">
                  Sizes{" "}
                  {selectedSizes.length > 0 && `(${selectedSizes.length})`}
                </button>
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-2xl shadow-lg py-2 hidden group-hover:block border border-gray-200/50 max-h-96 overflow-y-auto">
                  <div className="px-4 py-2 text-sm font-medium text-gray-700">
                    Available Sizes
                  </div>
                  {allSizes.map((size) => (
                    <label
                      key={size}
                      className="flex items-center px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleSize(size)}
                        className="mr-2 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Inside the mobile filters section */}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add Size Filter for Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sizes
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedSizes.includes(size)
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
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
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
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
              <radialGradient
                id="productsGridGradient"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="url(#productsGridGradient)"
              filter="blur(25px)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No beads found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
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
