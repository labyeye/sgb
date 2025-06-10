import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl mb-20 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-visible border border-white/20">
        {/* Background Blur SVG Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="blurGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#blurGradient1)" filter="blur(8px)" />
          </svg>
        </div>
        
        <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="blurGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#blurGradient2)" filter="blur(6px)" />
          </svg>
        </div>

        {/* Main Product Image Container - Half Outside Effect */}
        <div className="relative z-10 flex justify-center mb-6 -mt-28">
          <div className="relative">
            {/* Large Circle Background with Transparent Center */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/60 via-white/40 to-transparent backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* Inner Glow Effect */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-50/50 to-transparent"></div>
              
              {/* Product Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-yellow-300/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-8 left-8 w-1 h-1 bg-yellow-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse-slow"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="relative z-10 text-center space-y-4 pt-4">
          <h3 className="text-lg font-semibold text-black group-hover:text-yellow-600 transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Size and Color Details */}
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-1">Size:</span>
              <span className="font-medium">{product.size}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">Color:</span>
              <span className="font-medium">{product.color}</span>
            </div>
          </div>
          
          <p className="text-2xl font-bold text-yellow-600">
            ₹{product.price.toLocaleString()}
          </p>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium py-3 px-6 rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;