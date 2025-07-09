import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logosgb.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="footerGradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#footerGradient1)"
            filter="blur(20px)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Surat Glass Beads</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium beads for sarees, lehengas, and traditional clothing.
              Crafting elegance with every bead since 1995.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-700/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-yellow-400">
              Quick Links
            </h3>
            <div className="space-y-3">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">
                  123 Textile Market, Mumbai, India
                </span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+91 88284 03066</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">suratglassbeads@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BeadCraft. All rights reserved. Crafting tradition with
            modern elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
