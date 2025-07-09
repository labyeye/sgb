import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you soon with bead recommendations.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Visit Our Store",
    //   details: ["123 Textile Market", "Mumbai, Maharashtra 400001", "India"]
    // },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 88284 03066",]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["suratglassbeads@gmail.com"]
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Monday - Saturday: 11AM - 6PM",]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="contactHeroGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#contactHeroGradient)" filter="blur(30px)" />
        </svg>
      </div>
      
      {/* Header */}
      <section className="py-16 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-black mb-6">
              Get In <span className="text-yellow-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our beads? Need custom orders for your suits and lehengas designs? We're here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:from-yellow-200/80 group-hover:to-yellow-300/80 transition-all duration-500 border border-yellow-200/50">
                    <info.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-125 transition-transform duration-500">
                      <defs>
                        <radialGradient id={`contactGradient${index}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="25" fill={`url(#contactGradient${index})`} filter="blur(6px)" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl animate-fade-in-up border border-white/20">
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none focus:bg-white transition-all duration-300 group-focus-within:shadow-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none focus:bg-white transition-all duration-300 group-focus-within:shadow-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none focus:bg-white transition-all duration-300 group-focus-within:shadow-lg"
                    placeholder="Bead inquiry, custom order, etc."
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 focus:border-yellow-400 focus:outline-none focus:bg-white transition-all duration-300 group-focus-within:shadow-lg resize-none"
                    placeholder="Tell us about your bead requirements, saree design, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16 animate-fade-in-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Find Our Store</h3>
            <div className="relative h-96 bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50">
              <div className="absolute inset-0 bg-yellow-100/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-yellow-600 mx-auto" />
                  <h4 className="text-xl font-semibold text-black">Visit Our Bead Store</h4>
                  <p className="text-gray-600 max-w-md">
                    Located in Mumbai's famous textile market. Easy access by local trains and buses. 
                    Free parking available for customers.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium py-3 px-6 rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;