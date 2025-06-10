import React from 'react';
import { Users, Award, Heart, Gem } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Master Craftsperson",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Third-generation bead artisan with 25+ years of experience in traditional craftsmanship"
    },
    {
      name: "Rajesh Kumar",
      role: "Design Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Award-winning designer specializing in contemporary bead patterns for modern sarees"
    },
    {
      name: "Meera Patel",
      role: "Quality Controller",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensuring every bead meets our premium standards for durability and beauty"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every bead, from selection to finishing, ensuring premium quality for your precious garments."
    },
    {
      icon: Heart,
      title: "Tradition",
      description: "Our passion for preserving traditional beadwork techniques while embracing modern design innovations."
    },
    {
      icon: Gem,
      title: "Authenticity",
      description: "Sourcing genuine materials and maintaining authentic craftsmanship methods passed down through generations."
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local artisans and craftspeople who share our commitment to quality and tradition."
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
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#aboutHeroGradient)" filter="blur(30px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-black mb-6">
              About <span className="text-yellow-600">BeadCraft</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 1995, we've been crafting exquisite beads for sarees, lehengas, and traditional Indian wear. 
              Our commitment to quality and tradition has made us a trusted name among designers and fashion enthusiasts across India.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="storyGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#storyGradient)" filter="blur(25px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-black mb-8">Our Heritage</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  BeadCraft began as a small family workshop in Mumbai's textile district, where master craftsman 
                  Ramesh Sharma started creating intricate beads for local saree designers. His dedication to quality 
                  and traditional techniques quickly gained recognition among the city's fashion community.
                </p>
                <p>
                  Today, under the leadership of his daughter Priya Sharma, we continue to honor those time-tested 
                  methods while incorporating modern design sensibilities. Our beads grace sarees worn at weddings, 
                  festivals, and special occasions across India and beyond.
                </p>
                <p>
                  Every bead tells a story of craftsmanship, tradition, and the timeless beauty of Indian textiles. 
                  We take pride in being part of your most cherished moments, adding sparkle and elegance to your 
                  special occasions.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Heritage"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <radialGradient id="imageGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
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
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#valuesGradient)" filter="blur(20px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our craft and define our commitment to excellence
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
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:from-yellow-200/80 group-hover:to-yellow-300/80 transition-all duration-500 border border-yellow-200/50">
                    <value.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-125 transition-transform duration-500">
                      <defs>
                        <radialGradient id={`valueGradient${index}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
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

      {/* Team */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="teamGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#teamGradient)" filter="blur(25px)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Artisans</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The skilled craftspeople behind BeadCraft's exceptional quality and design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-4 border-white/50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-125 transition-transform duration-500">
                      <defs>
                        <radialGradient id={`teamMemberGradient${index}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="30" fill={`url(#teamMemberGradient${index})`} filter="blur(10px)" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;