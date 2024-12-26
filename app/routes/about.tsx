import React from 'react';
import { NavLink } from '@remix-run/react';
import {
  Lightbulb,
  Shield,
  Users,
  ArrowRight,
  Code,
  Rocket,
  GraduationCap,
  Heart,
  Mail,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Transforming Education Through Technology</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We're on a mission to revolutionize learning institutions with innovative digital solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <Rocket className="w-5 h-5 mr-2" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Building the Future of Education in Kenya</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our mission is to transform education by providing tailored, user-friendly digital solutions for schools. 
              We believe that every student, teacher, and institution deserves access to cutting-edge tools that enhance 
              learning experiences and improve educational outcomes.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Modern Learning Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Custom Solutions</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/Education.svg" 
              alt="Our Mission" 
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <Heart className="w-5 h-5 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900">What Drives Us Forward</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to offer solutions that evolve with the changing needs of educational institutions.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We are committed to delivering high-quality, reliable solutions that build trust and transparency with our clients.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with schools to understand their needs and provide customized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Tech Innovator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Education Enthusiast</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  T
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">Tevin Owino</h3>
                  <p className="text-gray-600">Founding Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tevin Owino is the visionary behind Learnify. As the Founding Software Engineer, he combines his deep 
                technical expertise with a passion for education to provide cutting-edge web solutions that meet the 
                unique needs of schools and learning institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our digital solutions can enhance your educational offerings
          </p>
          <NavLink to="/contact">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 group">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}