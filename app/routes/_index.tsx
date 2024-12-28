import { useEffect, useState } from 'react';
import { ChevronRight, PlayCircle } from "lucide-react";
import FAQSection from "~/components/FAQsection";
import Features from "~/components/Features";
import StepsToGetStarted from "~/components/StepsToGetStarted";
import Testimonials from "~/components/Testimonials";
import WhyChooseUs from "~/components/WhyChooseUs";
import { NavLink } from '@remix-run/react';


//MetaData
const meta = {
  title: "Learnify | Home",
  description: "Learnify - Your One-Stop Solution for Custom School Websites and LMS",
  keywords: "web development, learning management system, school websites",
};
export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: true,
    features: false,
    whyChoose: false,
    steps: false,
    faq: false,
    testimonials: true,
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className={`
          container mx-auto px-4 md:px-6 lg:px-20 pt-24 md:pt-20 pb-12 md:py-20
          flex flex-col lg:flex-row items-center
          transform transition-all duration-1000
          ${isVisible.hero ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
            Transforming{' '}
            <span className="text-blue-500 inline-block animate-pulse">Education</span>
            {' '}Through Technology
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Empowering Learning Institutions in Kenya with Innovative Digital Solutions 
            tailored to enhance learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink to={'/contact-us'} className="group bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-3 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl transform hover:-translate-y-1">
              Get Started
              <ChevronRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
            <a 
              href='#features'
              className="group text-gray-600 hover:text-gray-800 px-6 py-3 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <PlayCircle className="mr-2 transform transition-transform duration-300 group-hover:rotate-12" />
              Explore more
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative transform transition-all duration-500 hover:scale-105">
            <img
              className="w-full h-auto object-cover animate-float"
              src="/Collaborate.svg"
              alt="Education"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* Other sections with improved animations */}
      <section
        id="features"
        className={`
          mb-3
          transform transition-all duration-1000
          ${isVisible.features ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        `}
      >
        <Features />
      </section>

      <section
        id="whyChoose"
        className={`
          mb-3
          transform transition-all duration-1000
          ${isVisible.whyChoose ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <WhyChooseUs />
      </section>
      <section
        id="steps"
        className={`
          mb-3
          transform transition-all duration-1000
          ${isVisible.steps ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        <StepsToGetStarted />
      </section>
      <section
        id="faq"
        className={`
          mb-3
          transform transition-all duration-1000
          ${isVisible.faq ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        `}
      >
        <FAQSection />
      </section>

      <section
        id="testimonials"
        className={`
          transform transition-all duration-1000
          ${isVisible.testimonials ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        <Testimonials />
      </section>



      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
