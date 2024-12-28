import { NavLink } from "@remix-run/react";
import { Menu, X, Home, Users, Settings, DollarSign, MessageCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", text: "Home", Icon: Home },
    { to: "/about", text: "About Us", Icon: Users },
    { to: "/services", text: "Services", Icon: Settings },
    { to: "/pricing", text: "Pricing", Icon: DollarSign },
  ];

  return (
    <header className="fixed w-full z-50 bg-white">
      <nav
        className={`w-full top-0 px-6 py-4 border-b border-gray-100 transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center">
              <img className="sm:h-12 h-8 " src="/logo-no-background.png" alt="Logo" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, text, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-200 ${isActive ? "text-blue-600 font-bold" : ""
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{text}</span>
              </NavLink>
            ))}
          </div>

          <div>
            {/* Get started link */}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to={"/contact-us"} className="flex items-center space-x-2 px-6 py-2.5 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all duration-200 group">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 py-4 shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map(({ to, text, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-200 ${isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{text}</span>
                </NavLink>

              ))}
              <NavLink to={"/contact-us"} className="flex items-center space-x-2 px-6 py-2.5 w-fit bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all duration-200 group">
                Get Started
              </NavLink>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}