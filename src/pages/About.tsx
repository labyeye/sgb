import React from 'react';
import { Award, Globe, Users, Truck } from 'lucide-react';
import image from '../assets/image.jpg'

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Premium Imports",
      description: "Carefully sourced glass beads from trusted global suppliers, ensuring consistent quality for your manufacturing needs."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every bead meets high-volume and high-standard requirements of modern manufacturing processes."
    },
    {
      icon: Users,
      title: "Industry Partner",
      description: "Trusted by large-scale production units across textile, fashion, and handicraft industries."
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent, efficient delivery ensuring your production schedules are never compromised."
    }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="aboutHeroGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#aboutHeroGradient)" filter="blur(30px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-black mb-6">
              About <span className="text-yellow-600">Surat</span><span className="text-yellow-600"> Glass Beads</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Surat Glass Beads, we specialize in premium glass beads for embroidery, 
              proudly serving manufacturers across the textile, fashion, and handicraft industries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="contentGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#contentGradient)" filter="blur(25px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-black mb-8">Our Mission</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-align-justify">
                <p>
                  Our products are trusted by large-scale production units that demand consistency, 
                  quality, and reliable supply. We are committed to delivering the finest glass beads—carefully 
                  sourced to meet the high-volume and high-standard requirements of modern manufacturing.
                </p>
                <p>
                  Whether you're producing traditional embroidery or contemporary fashion lines, our beads 
                  enhance your creations with lasting beauty and precision.
                </p>
                <p>
                  Looking ahead, our vision is to lead innovation in the textile embellishment space by 
                  continuously expanding our range—bringing new varieties and styles to meet the evolving 
                  needs of global manufacturers.
                </p>
                <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-blue-100">
                  <p className="text-yellow-800 font-semibold text-lg text-center">
                    Efficient. Reliable. Future-ready.
                  </p>
                  <p className="text-yellow-700 text-center mt-2 text-xl">
                    Surat Glass Beads is your strategic partner in profitable, high-quality production.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right h-80 w-80 mb-20">
              <div className="relative">
                <img
                  src={image}
                  alt="Glass Beads Manufacturing"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <radialGradient id="imageGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#imageGradient)" filter="blur(15px)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
        <div className="absolute top-20 right-20 w-48 h-48 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse-slow">
            <defs>
              <radialGradient id="valuesGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#valuesGradient)" filter="blur(20px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The advantages that make us the preferred partner for manufacturers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:from-yellow-200/80 group-hover:to-yellow-300/80 transition-all duration-500 border border-blue-200/50">
                    <value.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-125 transition-transform duration-500">
                      <defs>
                        <radialGradient id={`valueGradient${index}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="25" fill={`url(#valueGradient${index})`} filter="blur(6px)" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="ownerGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#ownerGradient)" filter="blur(25px)" />
          </svg>
        </div>
        
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Message from Our Founder</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50/80 to-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-blue-100/50 animate-fade-in-up">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/80">
                      <img
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Founder - Surat Glass Beads"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <radialGradient id="founderGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="50" cy="50" r="30" fill="url(#founderGradient)" filter="blur(8px)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "Our commitment goes beyond just supplying beads—we're building partnerships that drive success. 
                    Every manufacturer deserves reliable quality and innovative solutions. At Surat Glass Beads, 
                    we're not just meeting today's needs; we're anticipating tomorrow's opportunities."
                  </blockquote>
                  <div className="border-t border-blue-200 pt-6">
                    <p className="text-lg font-semibold text-black">Rajesh Patel</p>
                    <p className="text-blue-600 font-medium">Founder & Managing Director</p>
                    <p className="text-gray-600 mt-2">Surat Glass Beads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default About;