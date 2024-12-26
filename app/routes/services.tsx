import React, { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { 
  Globe, 
  GraduationCap, 
  BarChart3, 
  Server,
  ArrowRight,
  Check,
  ChevronRight,
  Users,
  Clock,
  Shield
} from 'lucide-react';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Custom School Websites',
      description: "Make a lasting impression with beautifully designed websites that showcase your school's values and achievements. Our responsive designs ensure optimal viewing across all devices.",
      seoFocus: 'Custom school websites in Kenya, web design for education',
      icon: <Globe className="w-14 h-14" />,
      image: '/service1-1.jpg',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management System',
        'Analytics Integration'
      ]
    },
    {
      title: 'Learning Management Systems',
      description: 'Empower your institution with our feature-rich LMS platform. Facilitate seamless online learning, track student progress, and manage educational resources efficiently.',
      seoFocus: 'LMS for schools in Kenya, online learning platforms',
      icon: <GraduationCap className="w-14 h-14" />,
      image: '/service2-1.jpg',
      features: [
        'Interactive Dashboards',
        'Progress Tracking',
        'Resource Management',
        'Assessment Tools'
      ]
    },
    {
      title: 'SEO and Digital Marketing',
      description: 'Boost your online presence with data-driven SEO strategies. Reach more prospective students and parents through targeted digital marketing campaigns.',
      seoFocus: 'SEO services for schools in Kenya, education marketing solutions',
      icon: <BarChart3 className="w-14 h-14" />,
      image: '/service3-1.jpg',
      features: [
        'Keyword Research',
        'Content Strategy',
        'Performance Analytics'
      ]
    },
    {
      title: 'Content Management & Hosting',
      description: 'Experience worry-free website management with our secure hosting solutions and intuitive content management tools. Regular backups and 24/7 monitoring included.',
      seoFocus: 'Website hosting for schools, content management for education',
      icon: <Server className="w-14 h-14" />,
      image: '/service4-1.jpg',
      features: [
        '24/7 Monitoring',
        'Regular Backups',
        'Security Updates',
        'Technical Support'
      ]
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Dedicated professionals with education sector expertise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Delivery",
      description: "Fast implementation with minimal disruption"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Solutions",
      description: "Top-tier security for your institution's data"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
              Transforming Education Through Technology
            </h1>
            <p className="text-xl text-white/90 opacity-0 animate-fade-in animation-delay-200">
              Empowering schools in Kenya with innovative digital solutions
            </p>
            <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in animation-delay-400">
              <NavLink to="/contact">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions designed specifically for educational institutions in Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-8">
                <div className={`text-blue-600 mb-6 transform transition-transform duration-300 ${hoveredService === idx ? 'scale-110' : ''}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center space-x-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <strong>Focus Areas:</strong> {service.seoFocus}
                  </div>
                  <ChevronRight className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${hoveredService === idx ? 'translate-x-2' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our digital solutions can enhance your educational offerings
          </p>
          <NavLink to="/contact">
            <button className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-semibold transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </NavLink>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}