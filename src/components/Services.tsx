
import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Vue.js, and Node.js. Responsive, fast, and user-friendly solutions.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter for optimal performance.",
      features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust backend systems and APIs using Node.js, Python, and cloud technologies. Scalable and secure server-side solutions.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and visually appealing interfaces. From wireframes to high-fidelity prototypes.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development services covering both frontend and backend. Complete project lifecycle management.",
      features: ["Project Planning", "Development", "Testing", "Deployment"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Improve your existing applications with performance optimization, code refactoring, and modern best practices.",
      features: ["Code Review", "Performance Audit", "Optimization", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.05] hover:bg-gray-800/70"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200">
                  Learn More →
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm here to help you build 
              something amazing that stands out in the digital landscape.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
