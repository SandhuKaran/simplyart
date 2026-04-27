import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1730] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/gallery/logo.png" alt="SIMPLYART Logo" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Art for kids | Positive creativity for growing minds
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Contact Us
            </h4>
            <div className="space-y-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin size={20} className="text-[#1DD87A]" />
                <span>Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Phone size={20} className="text-[#1DD87A]" />
                <span>Contact for details</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Mail size={20} className="text-[#1DD87A]" />
                <span>info@simplyart.ca</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/simplyartacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/60 hover:text-[#1DD87A] transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DD87A] transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </div>
              <span>@simplyartacademy</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
            © {new Date().getFullYear()} SIMPLYART Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
