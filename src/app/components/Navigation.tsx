import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#FFFBF5]/96 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/gallery/logo.png" alt="SIMPLYART Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-[#D4F7E7] text-[#14A85E]"
                    : "text-[#2A2540] hover:bg-[#D4F7E7] hover:text-[#14A85E]"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-[#1DD87A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#14A85E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2A2540]"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-lg font-bold rounded-lg px-4 ${
                  isActive(link.path)
                    ? "bg-[#D4F7E7] text-[#14A85E]"
                    : "text-[#2A2540] hover:bg-[#D4F7E7]"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[#1DD87A] text-white px-4 py-3 rounded-lg font-bold text-center mt-4"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
