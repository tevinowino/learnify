import { NavLink } from "@remix-run/react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Heart,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" }
  ];

  const contactInfo = [
    { icon: Mail, info: "info@learnify.co.ke", href: "mailto:info@learnify.co.ke" },
    { icon: Phone, info: "+254 712 345 678", href: "tel:+254712345678" },
    { icon: MapPin, info: "Nairobi, Kenya", href: "https://maps.google.com/?q=Nairobi,Kenya" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-700 mx-3 mb-3 rounded-md text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <img
              src="/logo-no-background.png"
              alt="Logo"
              className="w-32 mb-6 hover:opacity-90 transition-opacity"
            />
            <p className="text-gray-100 leading-relaxed">
              Empowering learning institutions in Kenya with innovative digital
              solutions for a brighter future.
            </p>
            <button className="mt-6 flex items-center space-x-2 text-white hover:text-gray-200 transition-colors group">
              <span>Learn more about us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              Quick Links
              <ExternalLink className="ml-2 w-4 h-4" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 group ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-gray-200 hover:text-white transition-colors"
                      }`
                    }
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.info}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-200 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-200 text-sm text-center flex items-center justify-center space-x-1">
              <span>&copy; {new Date().getFullYear()} Learnify.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 inline" />
              <span>in Nairobi, Kenya</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;