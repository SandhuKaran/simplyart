import { motion } from "motion/react";
import { AnimatedArt } from "../AnimatedArt";
import { ButterflySVG } from "../art/ButterflySVG";
import { RainbowSVG } from "../art/RainbowSVG";
import { SunSVG } from "../art/SunSVG";
import { Calendar, PartyPopper, Cake, School } from "lucide-react";
import { Link } from "react-router";

const galleryImages = [
  "/gallery/1.jpg", 
  "/gallery/2.jpg",
  "/gallery/3.jpg", 
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg"
];

export function Events() {
  const eventTypes = [
    {
      title: "Birthday Parties",
      icon: Cake,
      description: "Make their special day unforgettable with a creative art party! Perfect for ages 4-12.",
      highlights: [
        "2-3 hour sessions",
        "Themed art projects",
        "Party decorations",
        "Birthday child gets extra special project",
        "Group sizes 8-15 kids",
      ],
      bgColor: "#FFE0E0",
      accentColor: "#FF6B6B",
    },
    {
      title: "School Events",
      icon: School,
      description: "Art stations for school fairs, fun days, and special celebrations. We bring the creativity!",
      highlights: [
        "Flexible duration",
        "Multiple art stations",
        "Large group capacity",
        "Setup and cleanup included",
        "Perfect for fundraisers",
      ],
      bgColor: "#EDE0FF",
      accentColor: "#B47FFF",
    },
    {
      title: "Community Events",
      icon: PartyPopper,
      description: "Festivals, community centers, libraries, and more. Art experiences for everyone!",
      highlights: [
        "All ages welcome",
        "Customizable activities",
        "Professional setup",
        "Engaging for crowds",
        "Memorable experiences",
      ],
      bgColor: "#FFF5C0",
      accentColor: "#FFD43B",
    },
    {
      title: "Private Groups",
      icon: Calendar,
      description: "Homeschool groups, playgroups, or family gatherings. Custom art experiences just for you!",
      highlights: [
        "Small group friendly",
        "Custom themes available",
        "Your location or ours",
        "Flexible scheduling",
        "Perfect for special occasions",
      ],
      bgColor: "#D4F7E7",
      accentColor: "#1DD87A",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#FFFBF5]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-[#FFF5C0] via-[#F8F0FF] to-[#D4F7E7] flex items-center justify-center overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <AnimatedArt>
            <ButterflySVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-0 right-20 opacity-20">
          <AnimatedArt delay={0.3}>
            <RainbowSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute top-20 right-32">
          <AnimatedArt delay={0.5}>
            <SunSVG />
          </AnimatedArt>
        </div> */}

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-[#2A2540] mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Special Events
          </motion.h1>
          <motion.p
            className="text-xl text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Bringing creativity to your celebrations
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 px-20 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              className="text-2xl text-[#7D7A96] max-w-3xl mx-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Celebrate with art! We bring the creativity, supplies, and instructors directly to your special occasion.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ translateY: -8 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl border-[3px]"
                style={{ borderColor: event.bgColor }}
              >
                <div className="p-10 flex flex-col md:flex-row gap-8 items-center md:items-start" style={{ backgroundColor: event.bgColor }}>
                  <div className="flex-shrink-0 bg-white p-6 rounded-[24px] shadow-sm">
                    <event.icon size={48} style={{ color: event.accentColor }} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold text-[#2A2540] mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                      {event.title}
                    </h3>
                    <p className="text-[#3D3A52] text-lg font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {event.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-10 bg-white">
                  <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-[#7D7A96] text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    What to expect:
                  </h4>
                  <ul className="space-y-4">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-[#3D3A52] font-bold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        <span className="text-2xl mr-3 flex-shrink-0" style={{ color: event.accentColor }}>✨</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-[#2A2540] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1DD87A] text-white px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              See The Fun
            </span>
            <motion.h2
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Event Highlights
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
  {galleryImages.map((imgSrc, index) => (
    <motion.div
      key={imgSrc}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="aspect-square rounded-[24px] overflow-hidden cursor-pointer shadow-lg border-[3px] border-transparent hover:border-[#1DD87A]"
    >
      <img 
        src={imgSrc} 
        alt={`SimplyArt Event ${index + 1}`} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Parents Say
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Best birthday party ever! The kids were so engaged and everyone left with beautiful artwork.",
                name: "Happy Parent",
                color: "#1DD87A"
              },
              {
                quote: "SIMPLYART made our school fair a huge success. The art station was the most popular activity!",
                name: "School Administrator",
                color: "#B47FFF"
              },
              {
                quote: "Our homeschool group loves these sessions. The instructors are patient and the projects are amazing!",
                name: "Homeschool Parent",
                color: "#FFD43B"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-[40px] p-8 shadow-lg border-t-[5px]"
                style={{ borderColor: testimonial.color }}
              >
                <div className="text-4xl mb-6 text-[#FFD43B]">⭐⭐⭐⭐⭐</div>
                <p className="text-lg text-[#3D3A52] font-semibold mb-6 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  "{testimonial.quote}"
                </p>
                <p className="text-[#2A2540] font-bold text-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#D4F7E7] via-[#EDE0FF] to-[#FFF5C0] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[#2A2540]"
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Let's Plan Your Event!
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether it's a birthday, school celebration, or community event, we'll make it special!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#2A2540] text-white px-14 py-6 rounded-full text-2xl font-bold hover:bg-[#1DD87A] hover:-translate-y-2 duration-300 shadow-2xl"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Book Your Event Today!
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}