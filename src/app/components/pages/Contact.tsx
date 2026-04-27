import { motion } from "motion/react";
import { AnimatedArt } from "../AnimatedArt";
import { FlowerSVG } from "../art/FlowerSVG";
import { RainbowSVG } from "../art/RainbowSVG";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll get back to you soon!");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-x-hidden bg-[#FFFBF5]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-[#F8F0FF] via-[#D4F7E7] to-[#FFFBF5] flex items-center justify-center overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <AnimatedArt>
            <FlowerSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-0 right-20 opacity-20">
          <AnimatedArt delay={0.3}>
            <RainbowSVG />
          </AnimatedArt>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-[#2A2540] mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We can't wait to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <span className="inline-block bg-[#FFF5C0] text-[#8A6800] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Let's Connect
            </span>
            <motion.p
              className="text-2xl text-[#2A2540] font-bold max-w-3xl mx-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to bring art to your school or event? Send us a message!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-extrabold uppercase tracking-wider text-[#7D7A96] mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1DD87A] focus:outline-none text-[#3D3A52] font-semibold text-lg transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-extrabold uppercase tracking-wider text-[#7D7A96] mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1DD87A] focus:outline-none text-[#3D3A52] font-semibold text-lg transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-extrabold uppercase tracking-wider text-[#7D7A96] mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1DD87A] focus:outline-none text-[#3D3A52] font-semibold text-lg transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-extrabold uppercase tracking-wider text-[#7D7A96] mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    I'm Interested In *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1DD87A] focus:outline-none text-[#3D3A52] font-semibold text-lg transition-colors appearance-none bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="school">Weekly School Program</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="workshop">Workshop Series</option>
                    <option value="pd-day">PD Day Camp</option>
                    <option value="after-school">After School Program</option>
                    <option value="event">Special Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-extrabold uppercase tracking-wider text-[#7D7A96] mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Tell Us More *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1DD87A] focus:outline-none text-[#3D3A52] font-semibold text-lg transition-colors resize-none"
                    placeholder="Tell us about your event, preferred dates, number of children, etc."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ translateY: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#1DD87A] hover:bg-[#14A85E] text-white py-5 rounded-full text-xl shadow-lg transition-colors flex items-center justify-center space-x-3"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  <span>Send Message</span>
                  <Send size={24} />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-[#FFFBF5] rounded-[40px] p-10 shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-[#2A2540] mb-8" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#EDE0FF] p-4 rounded-[20px] flex-shrink-0">
                      <MapPin size={28} className="text-[#B47FFF]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2A2540] mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Location</h4>
                      <p className="text-[#7D7A96] font-semibold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>Serving schools across Ontario, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-[#FFE0E0] p-4 rounded-[20px] flex-shrink-0">
                      <Phone size={28} className="text-[#FF6B6B]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2A2540] mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Phone</h4>
                      <p className="text-[#7D7A96] font-semibold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>Call us for inquiries<br />(Contact details coming soon)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-[#FFF5C0] p-4 rounded-[20px] flex-shrink-0">
                      <Mail size={28} className="text-[#FFD43B]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2A2540] mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Email</h4>
                      <p className="text-[#7D7A96] font-semibold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>hello@simplyartacademy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-[#D4F7E7] p-4 rounded-[20px] flex-shrink-0">
                      <Instagram size={28} className="text-[#1DD87A]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2A2540] mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Instagram</h4>
                      <a
                        href="https://www.instagram.com/simplyartacademy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1DD87A] hover:text-[#14A85E] font-bold text-lg hover:underline"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        @simplyartacademy
                      </a>
                      <p className="text-[#7D7A96] text-md mt-1 font-semibold">Follow us for updates & inspiration!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A2540] rounded-[40px] p-10 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    Office Hours
                  </h3>
                  <p className="text-xl mb-2 font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-[#7D7A96] font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Weekend events available by appointment
                  </p>
                </div>
                {/* Decorative blob inside the dark card */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#B47FFF] rounded-full opacity-20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#DDF4FF] text-[#1A7FA8] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Got Questions?
            </span>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What areas do you serve?",
                a: "We serve schools and communities across Ontario. Contact us to confirm availability in your area!",
              },
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 2-4 weeks in advance, especially for weekends and special events. However, we'll do our best to accommodate last-minute requests!",
              },
              {
                q: "What age groups do you work with?",
                a: "Our programs are designed for children ages 3-12, with activities tailored to each age group's abilities and interests.",
              },
              {
                q: "Do you provide all materials?",
                a: "Yes! We bring everything needed for a complete art experience, including all supplies, materials, and cleanup.",
              },
              {
                q: "Can you accommodate large groups?",
                a: "Absolutely! We can scale our programs for groups of any size, from intimate parties to large school events.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="text-2xl font-bold text-[#2A2540] mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  {faq.q}
                </h4>
                <p className="text-[#3D3A52] text-lg font-semibold leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}