import { ArrowRightCircle, ClipboardCheck, CreditCard, Rocket } from 'lucide-react';
import { NavLink } from '@remix-run/react';
import { useEffect, useState } from 'react';

const StepsToGetStarted = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(null);

  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Sign Up",
      description: "Create your account and join our platform to explore our services.",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Choose a Plan",
      description: "Select a plan that best fits your institution's needs and budget.",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: <ArrowRightCircle className="w-12 h-12" />,
      title: "Provide Requirements",
      description: "Share your specific requirements to get tailored web solutions.",
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Launch & Grow",
      description: "Sit back and watch your school grow with our custom solutions.",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 rounded-xl overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold mb-4">Get Started in 4 Easy Steps</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Follow these simple steps to unlock the best web solutions for your school or institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'scale-100'
              } ${isHovering === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg ${
                activeStep === index ? 'ring-4 ring-white/50' : ''
              }`}>
                <div className={`flex items-center justify-center mb-4 transition-transform duration-300 ${
                  isHovering === index ? 'scale-110' : ''
                }`}>
                  <div className={`${step.color} ${step.hoverColor} p-3 rounded-full text-white transform transition-all duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <NavLink to="/contact">
          <button className="group flex items-center justify-center w-fit px-8 py-4 text-white bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRightCircle className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default StepsToGetStarted;