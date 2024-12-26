import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alice Kamau",
    position: "Principal, Green Valley High",
    testimonial:
      "Learnify transformed our school's online presence with their innovative solutions. The team was professional and exceeded our expectations.",
    image: "",
  },
  {
    name: "David Otieno",
    position: "Head Teacher, Sunrise Academy",
    testimonial:
      "The Learning Management System they implemented has revolutionized how we handle online classes. Highly recommend Learnify!",
    image: "",
  },
  {
    name: "Grace Mwangi",
    position: "Director, Bright Future Schools",
    testimonial:
      "Their SEO services helped us reach more students and parents. A fantastic team to work with!",
    image: "",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg mx-2"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <p className="text-lg italic text-gray-600 mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">
                    {testimonial.position}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Manual Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
