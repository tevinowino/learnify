import React, { useState } from 'react';
import { NavLink } from '@remix-run/react';
import {
  Check,
  HelpCircle,
  ArrowRight,
  Shield,
  Globe,
  BarChart3,
  Server,
  GraduationCap,
  AlertCircle
} from 'lucide-react';

export default function Pricing() {
  const [showAnnual, setShowAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Basic School Website",
      icon: Globe,
      price: {
        range: "40,000 - 60,000",
        period: "one-time"
      },
      description: "Perfect for schools getting started with their online presence",
      features: [
        "Responsive Design",
        "5 Core Pages",
        "Contact Form",
        "Photo Gallery",
        "News/Updates Section",
        "Social Media Integration",
        "Basic SEO Setup"
      ]
    },
    {
      name: "Advanced School Management",
      icon: GraduationCap,
      popular: true,
      price: {
        range: "150,000 - 300,000",
        period: "one-time"
      },
      description: "Complete digital solution for modern educational institutions",
      features: [
        "Everything in Basic Website",
        "Student Management System",
        "Staff Portal",
        "Parent Portal",
        "Online Fee Payment",
        "Attendance Tracking",
        "Results Management",
        "Custom Modules"
      ]
    },
    {
      name: "Custom LMS Development",
      icon: Server,
      price: {
        range: "200,000+",
        period: "one-time"
      },
      description: "Tailored learning management system for your institution",
      features: [
        "Custom LMS Platform",
        "Course Management",
        "Assignment System",
        "Video Conferencing",
        "Progress Tracking",
        "Resource Library",
        "Mobile App Integration",
        "API Access"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing for Every Institution
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Choose the perfect plan that fits your institution's needs and budget
          </p>
        </div>
      </section>

      {/* One-time Services */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">One-Time Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <plan.icon className="w-10 h-10 text-blue-600" />
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">KES {plan.price.range}</span>
                  <span className="text-gray-500 ml-2">{plan.price.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <NavLink to="/contact">
                  <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2 group">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our pricing and services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start space-x-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Need a custom solution?
              </h3>
              <p className="text-gray-600 mb-4">
                We understand that every institution is unique. Contact us for a customized
                quote tailored to your specific requirements.
              </p>
              <NavLink to="/contact">
                <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <span>Contact Sales</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}