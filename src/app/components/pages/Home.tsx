import { motion } from "motion/react";
import { Link } from "react-router";
import { AnimatedArt } from "../AnimatedArt";
import { RainbowSVG } from "../art/RainbowSVG";
import { SunSVG } from "../art/SunSVG";
import { FlowerSVG } from "../art/FlowerSVG";
import { ButterflySVG } from "../art/ButterflySVG";
import { CrayonsSVG } from "../art/CrayonsSVG";
import { PaintbrushSVG } from "../art/PaintbrushSVG";
import { BalloonsSVG } from "../art/BalloonsSVG";
import { StarsSVG } from "../art/StarsSVG";
import { PaletteSVG } from "../art/PaletteSVG";
import { CloudSVG } from "../art/CloudSVG";
import { HeartSVG } from "../art/HeartSVG";
import { KiteSVG } from "../art/KiteSVG";
import { IceCreamSVG } from "../art/IceCreamSVG";
import { Palette, Sparkles, School, Calendar } from "lucide-react";

const galleryImages = [
  "/gallery/1.jpg", 
  "/gallery/2.jpg",
  "/gallery/3.jpg", 
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg"
];

export function Home() {
  return (
    <div className="overflow-x-hidden bg-[#FFFBF5]">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-[#FFFBF5] via-[#F0FFEE] to-[#F8F0FF] flex items-center justify-center overflow-hidden">
        {/* <div className="absolute top-10 left-10">
          <AnimatedArt delay={0}>
            <StarsSVG />
          </AnimatedArt>
        </div> */}
        <div className="absolute top-20 right-20 opacity-20">
          <AnimatedArt delay={0.2}>
            <BalloonsSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-50 left-30 opacity-20">
          <AnimatedArt delay={0.4}>
            <KiteSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute bottom-10 right-32">
          <AnimatedArt delay={0.6}>
            <CloudSVG />
          </AnimatedArt>
        </div> */}
        {/* <div className="absolute top-1/2 left-1/4">
          <AnimatedArt delay={0.8}>
            <HeartSVG />
          </AnimatedArt>
        </div> */}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#FFD43B] px-6 py-3 rounded-full mb-8 font-bold uppercase text-sm tracking-wider text-[#2A2540]"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ONTARIO'S FUN ART ACADEMY
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <span className="text-[#2A2540]">Art for</span>
            <br />
            <span className="text-[#1DD87A]">Growing</span>
            <br />
            <span className="text-[#B47FFF]">Minds</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#3D3A52] mb-10 font-bold max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Immersive art programs for kids. Mobile turnkey solution for schools. Montessori-aligned creativity!
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#1DD87A] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#14A85E] hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Book Your Event
            </Link>
            <Link
              to="/programs"
              className="inline-block bg-transparent text-[#2A2540] border-[3px] border-[#2A2540] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#2A2540] hover:text-white transition-all duration-300"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              See Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute top-10 right-10 opacity-20">
          <AnimatedArt>
            <PaintbrushSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <AnimatedArt delay={0.2}>
            <IceCreamSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute bottom-20 right-20">
          <AnimatedArt delay={0.4}>
            <PaletteSVG />
          </AnimatedArt>
        </div> */}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#D4F7E7] text-[#14A85E] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              What We Do
            </span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Immersive Art Programs
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-[#3D3A52] leading-relaxed mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
                SIMPLYART brings creative art experiences directly to schools across Ontario. Our mobile turnkey solution
                aligns with the Montessori method, encouraging self-expression and imagination in every child.
              </p>
              <p className="text-lg text-[#3D3A52] leading-relaxed mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
                We offer programs for both public and private schools, as well as special events that celebrate
                the joy of creating art!
              </p>
              <div className="flex flex-wrap gap-3">
                {['🏫 School Programs', '🎉 Events', '🎨 Workshops'].map((item) => (
                  <span key={item} className="bg-[#EDE0FF] text-[#8A50D4] px-5 py-2 rounded-full font-bold text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-br from-[#D4F7E7] to-[#EDE0FF] rounded-[40px] p-4 shadow-xl h-96"
>
  <video 
    src="/gallery/1.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline
    className="w-full h-full object-cover rounded-[32px]"
  />
</motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FFFBF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#EDE0FF] text-[#8A50D4] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Our Services
            </span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Offer
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: School, title: "School Programs", desc: "Weekly art classes at your school", bgColor: "#D4F7E7", iconBg: "#1DD87A" },
              { icon: Calendar, title: "Special Events", desc: "Birthday parties & celebrations", bgColor: "#EDE0FF", iconBg: "#B47FFF" },
              { icon: Palette, title: "Workshops", desc: "Themed art workshops", bgColor: "#FFF5C0", iconBg: "#FFD43B" },
              { icon: Sparkles, title: "Montessori Aligned", desc: "Educational & fun approach", bgColor: "#FFE0E0", iconBg: "#FF6B6B" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ translateY: -8 }}
                className="bg-white rounded-[40px] p-10 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-t-[5px]"
                style={{ borderColor: service.iconBg }}
              >
                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center mb-6" style={{ background: service.bgColor }}>
                  <service.icon size={40} style={{ color: service.iconBg }} />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-[#2A2540]" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  {service.title}
                </h3>
                <p className="text-[#7D7A96] text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-[#2A2540] text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 opacity-20">
          <AnimatedArt>
            <FlowerSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <AnimatedArt delay={0.3}>
            <ButterflySVG />
          </AnimatedArt>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1DD87A] text-white px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Gallery
            </span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Amazing Creations
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
      whileHover={{ scale: 1.05 }}
      className="aspect-square rounded-[24px] overflow-hidden cursor-pointer shadow-lg border-[3px] border-transparent hover:border-[#1DD87A] transition-all"
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#D4F7E7] via-[#EDE0FF] to-[#FFF5C0] text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <AnimatedArt>
            <CrayonsSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <AnimatedArt delay={0.3}>
            <RainbowSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute top-1/2 right-1/4">
          <AnimatedArt delay={0.5}>
            <SunSVG />
          </AnimatedArt>
        </div> */}

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 text-[#2A2540]"
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Ready to Create?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Bring the joy of art to your school or event!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#2A2540] text-white px-14 py-6 rounded-full text-2xl font-bold hover:bg-[#1DD87A] hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Contact Us Today!
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
