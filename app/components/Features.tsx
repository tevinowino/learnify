import { useState } from "react";
import { Globe, BookOpen, Search, Database, ArrowRight, CheckCircle } from "lucide-react";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Globe className="w-8 h-8" aria-label="Globe Icon" />,
      title: "Custom School Websites",
      description: "Make a lasting impression with beautifully designed websites that showcase your school's values and achievements.",
      benefits: ["Responsive Design", "Custom Branding", "Easy Updates", "SEO Optimized"],
      color: "blue",
    },
    {
      icon: <BookOpen className="w-8 h-8" aria-label="Book Icon" />,
      title: "Learning Management Systems",
      description: "Simplify online learning with our feature-rich LMS, tailored to your institution's needs.",
      benefits: ["Interactive Learning", "Progress Tracking", "Resource Library", "Mobile Learning"],
      color: "green",
    },
    {
      icon: <Search className="w-8 h-8" aria-label="Search Icon" />,
      title: "SEO and Digital Marketing",
      description: "Improve online visibility and reach more students with targeted digital marketing strategies.",
      benefits: ["Local SEO", "Social Media", "Analytics", "Lead Generation"],
      color: "purple",
    },
    {
      icon: <Database className="w-8 h-8" aria-label="Database Icon" />,
      title: "Content Management & Hosting",
      description: "Ensure seamless performance with our secure hosting solutions and content management tools.",
      benefits: ["Cloud Hosting", "Daily Backups", "SSL Security", "24/7 Support"],
      color: "yellow",
    },
  ];

  const getColorClasses = (color, isHovered) => ({
    blue: {
      bg: isHovered ? "bg-blue-600" : "bg-blue-500",
      text: isHovered ? "text-white" : "text-blue-500",
      light: "bg-blue-50",
      border: "border-blue-200",
    },
    green: {
      bg: isHovered ? "bg-green-600" : "bg-green-500",
      text: isHovered ? "text-white" : "text-green-500",
      light: "bg-green-50",
      border: "border-green-200",
    },
    purple: {
      bg: isHovered ? "bg-purple-600" : "bg-purple-500",
      text: isHovered ? "text-white" : "text-purple-500",
      light: "bg-purple-50",
      border: "border-purple-200",
    },
    yellow: {
      bg: isHovered ? "bg-yellow-600" : "bg-yellow-500",
      text: isHovered ? "text-white" : "text-yellow-500",
      light: "bg-yellow-50",
      border: "border-yellow-200",
    },
  });

  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-10 rounded-2xl ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Explore Our Web Solutions for Schools
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
            Our services are designed to address the unique needs of schools and educational institutions in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const isHovered = hoveredFeature === index;
            const colors = getColorClasses(feature.color, isHovered)[feature.color];

            return (
              <div
                key={index}
                className={`
                  bg-white border ${colors.border} p-6 rounded-xl
                  transform transition-all duration-300
                  ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                `}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`
                  flex items-center justify-center p-4 rounded-full mb-6
                  transform transition-all duration-300
                  ${isHovered ? colors.bg : colors.light}
                `}>
                  <div className={`transition-colors duration-300 ${isHovered ? 'text-white' : colors.text}`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>

                <div className={`
                  space-y-2 transition-all duration-300
                  ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
                `}>
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className={`w-4 h-4 mr-2 ${colors.text}`} />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className={`
                  mt-6 flex items-center justify-end
                  transition-all duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}>
                  <button
                    className={`
                      flex items-center text-sm font-medium
                      ${colors.text} hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    `}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 text-blue-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
