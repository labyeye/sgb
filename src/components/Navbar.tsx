import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logosgb.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        lastScrollY > 50 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height from h-16 to h-20 */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-16 h-16 bg-gradient-to-r flex items-center rounded-full justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <img
                src={logo}
                alt="Logo"
                className="w-64 h-18 object-contain p-1" /* Changed to full width/height with padding */
              />
              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>
            {/* Optional text logo */}
            <span className="text-xl font-bold text-yellow-600 hidden sm:block">Surat Glass Beads</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-yellow-600'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-yellow-50/80 backdrop-blur-sm transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t border-yellow-100/50 animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-yellow-600 bg-yellow-50/80'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;