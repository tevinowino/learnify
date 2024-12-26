import React from "react";
import { CheckCircle, Award, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
      title: "Proven Expertise",
      description:
        "Years of experience providing tailored web solutions for schools and institutions.",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 6L6 12l3.75 6H18l-3.75-6L18 6z"
          />
        </svg>
      ),
    },
    {
      icon: <Award className="w-10 h-10 text-green-500" />,
      title: "Award-Winning Services",
      description:
        "Recognized for excellence in educational web solutions and digital marketing.",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto text-green-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m0-13a9 9 0 11-6 16.58M5 12h2m8 0h2m-9 9h10"
          />
        </svg>
      ),
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-500" />,
      title: "Reliable & Secure",
      description:
        "We prioritize security and reliability to ensure uninterrupted services for your institution.",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto text-purple-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l8 4v6a8 8 0 01-16 0V6l8-4z"
          />
        </svg>
      ),
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      title: "Dedicated Support",
      description:
        "Our team is always available to support your needs and answer any questions.",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto text-yellow-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm4 5a6 6 0 10-12 0v3h12v-3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer unparalleled expertise and services tailored to meet the unique needs of schools and learning institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div>{feature.illustration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
