import { motion } from "motion/react";
import { AnimatedArt } from "../AnimatedArt";
import { PaintbrushSVG } from "../art/PaintbrushSVG";
import { CrayonsSVG } from "../art/CrayonsSVG";
import { FlowerSVG } from "../art/FlowerSVG";
import { Link } from "react-router";

export function Programs() {
  const programs = [
    {
      title: "Weekly School Program",
      emoji: "🏫",
      description: "Regular art classes brought directly to your school. Perfect for ongoing creative development throughout the school year.",
      features: [
        "45-60 minute sessions",
        "Age-appropriate projects",
        "All materials included",
        "Aligns with curriculum",
      ],
      bgColor: "#D4F7E7",
      accentColor: "#1DD87A",
    },
    {
      title: "Special Events",
      emoji: "🎉",
      description: "Make any celebration extra special with art! Birthday parties, school celebrations, and community events.",
      features: [
        "2-3 hour sessions",
        "Themed activities",
        "Party decorations",
        "Take-home creations",
      ],
      bgColor: "#FFE0E0",
      accentColor: "#FF6B6B",
    },
    {
      title: "Workshop Series",
      emoji: "🎨",
      description: "Intensive themed workshops that dive deep into specific art techniques or styles over multiple sessions.",
      features: [
        "Multi-week series",
        "Skill building focus",
        "Advanced techniques",
        "Portfolio development",
      ],
      bgColor: "#FFF5C0",
      accentColor: "#FFD43B",
    },
    {
      title: "PD Day Camps",
      emoji: "☀️",
      description: "Full-day art adventures on Professional Development days. A fun, creative experience while school is out.",
      features: [
        "Full day programs",
        "Multiple projects",
        "Snack breaks included",
        "Small group sizes",
      ],
      bgColor: "#DDF4FF",
      accentColor: "#74D0F5",
    },
    {
      title: "After School Program",
      emoji: "🌟",
      description: "Regular after-school art enrichment program. A perfect way to extend the school day with creativity!",
      features: [
        "Weekly sessions",
        "Drop-in friendly",
        "Seasonal themes",
        "Progress tracking",
      ],
      bgColor: "#EDE0FF",
      accentColor: "#B47FFF",
    },
    {
      title: "Private Events",
      emoji: "🎈",
      description: "Custom art experiences for private groups, homeschool co-ops, and community organizations.",
      features: [
        "Flexible timing",
        "Custom themes",
        "Your location or ours",
        "Group discounts",
      ],
      bgColor: "#FFE8CC",
      accentColor: "#FF9F43",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#FFFBF5]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-[#FFFBF5] via-[#F8F0FF] to-[#F0FFEE] flex items-center justify-center overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <AnimatedArt>
            <CrayonsSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute bottom-10 right-20">
          <AnimatedArt delay={0.3}>
            <CrayonsSVG />
          </AnimatedArt>
        </div> */}
        <div className="absolute bottom-0 right-10 opacity-20">
          <AnimatedArt delay={0.5}>
            <FlowerSVG />
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
            Our Programs
          </motion.h1>
          <motion.p
            className="text-xl text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find the perfect creative fit for your kids
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 px-16 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              className="text-2xl text-[#7D7A96] max-w-3xl mx-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Choose the perfect art experience for your school or group. All programs are designed to inspire creativity and joy!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -8 }}
                className="bg-white rounded-[40px] p-8 shadow-lg hover:shadow-2xl border-t-[5px]"
                style={{ borderColor: program.accentColor }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-[20px] flex items-center justify-center text-3xl"
                    style={{ backgroundColor: program.bgColor }}
                  >
                    {program.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2A2540] leading-tight" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    {program.title}
                  </h3>
                </div>

                <p className="text-[#3D3A52] text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {program.description}
                </p>

                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-[#7D7A96]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      <span className="text-xl mr-3 font-bold" style={{ color: program.accentColor }}>✓</span>
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FFFBF5] to-[#F8F0FF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#EDE0FF] text-[#8A50D4] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              The SIMPLYART Standard
            </span>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What's Included
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-[#2A2540] mb-8" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Every Session Includes:
              </h3>
              <ul className="space-y-5">
                {[
                  "All art supplies and materials",
                  "Professional art instruction",
                  "Complete setup and cleanup",
                  "Age-appropriate projects",
                  "Finished artwork to take home",
                  "Photo opportunities",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-lg text-[#3D3A52] font-bold"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    <span className="text-3xl mr-4">🎨</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-[#2A2540] mb-8" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Why SIMPLYART?
              </h3>
              <ul className="space-y-5">
                {[
                  "Montessori-aligned approach",
                  "Experienced instructors",
                  "Flexible scheduling",
                  "Ontario-based and local",
                  "Trusted by schools",
                  "Memorable experiences",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-lg text-[#3D3A52] font-bold"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    <span className="text-3xl mr-4 text-[#FFD43B]">⭐</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact us to discuss which program is right for your school or group!
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
              Get in Touch!
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}