import { motion } from "motion/react";
import { AnimatedArt } from "../AnimatedArt";
import { SunSVG } from "../art/SunSVG";
import { CloudSVG } from "../art/CloudSVG";
import { HeartSVG } from "../art/HeartSVG";
import { PaletteSVG } from "../art/PaletteSVG";
import { IceCreamSVG } from "../art/IceCreamSVG";
import { Heart, Users, Lightbulb, Award } from "lucide-react";

export function About() {
  return (
    <div className="overflow-x-hidden bg-[#FFFBF5]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-[#D4F7E7] via-[#EDE0FF] to-[#FFF5C0] flex items-center justify-center overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <AnimatedArt>
            <SunSVG />
          </AnimatedArt>
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <AnimatedArt delay={0.3}>
            <CloudSVG />
          </AnimatedArt>
        </div>
        {/* <div className="absolute top-1/3 right-1/4">
          <AnimatedArt delay={0.5}>
            <HeartSVG />
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
            About SIMPLYART
          </motion.h1>
          <motion.p
            className="text-xl text-[#3D3A52] font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Learn more about our mission and our team
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white relative">
        {/* <div className="absolute top-20 right-10">
          <AnimatedArt>
            <PaletteSVG />
          </AnimatedArt>
        </div> */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#D4F7E7] to-[#EDE0FF] rounded-[40px] p-12 md:p-16 shadow-lg mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2A2540] mb-8 text-center" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Our Mission
            </h2>
            <p className="text-xl text-[#3D3A52] leading-relaxed text-center max-w-4xl mx-auto font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
              At SIMPLYART, we believe every child deserves the opportunity to explore their creativity.
              Our immersive art programs bring positive, hands-on art experiences directly to schools across Ontario,
              fostering imagination, confidence, and joy in every young artist.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every class", bgColor: "#FFE0E0", iconColor: "#FF6B6B" },
              { icon: Users, title: "Community", desc: "Building connections through art", bgColor: "#EDE0FF", iconColor: "#B47FFF" },
              { icon: Lightbulb, title: "Creativity", desc: "Inspiring imagination in every child", bgColor: "#FFF5C0", iconColor: "#FFD43B" },
              { icon: Award, title: "Excellence", desc: "High-quality programs every time", bgColor: "#DDF4FF", iconColor: "#74D0F5" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[32px] p-8 shadow-lg text-center"
              >
                <div className="w-20 h-20 rounded-[20px] flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: value.bgColor }}>
                  <value.icon size={40} style={{ color: value.iconColor }} />
                </div>
                <h3 className="text-2xl font-bold text-[#2A2540] mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  {value.title}
                </h3>
                <p className="text-[#7D7A96]" style={{ fontFamily: "'Nunito', sans-serif" }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Montessori Approach */}
      <section className="py-24 px-4 bg-[#FFFBF5] relative">
        <div className="absolute bottom-10 left-10 opacity-20">
          <AnimatedArt>
            <IceCreamSVG />
          </AnimatedArt>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-12 md:p-16 shadow-lg"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2A2540] mb-10 text-center" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Aligned to the Montessori Method
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-[#3D3A52] leading-relaxed mb-6 font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Our programs embrace the Montessori philosophy by encouraging children to:
                </p>
                <ul className="space-y-4">
                  {[
                    "Explore materials at their own pace",
                    "Make independent creative choices",
                    "Learn through hands-on experiences",
                    "Develop fine motor skills naturally",
                    "Build confidence through self-expression",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-lg text-[#3D3A52] font-semibold"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      <span className="text-3xl mr-4">🎨</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-br from-[#D4F7E7] to-[#EDE0FF] rounded-[40px] p-4 shadow-xl h-96"
>
  <video 
    src="/src/app/gallery/2.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline
    className="w-full h-full object-cover rounded-[32px]"
  />
</motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#D4F7E7] text-[#14A85E] px-6 py-2 rounded-full font-extrabold uppercase text-sm tracking-widest mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Why Choose Us
            </span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-[#2A2540]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Schools Love Us
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Turnkey Solution", desc: "We bring everything needed for a complete art experience", color: "#1DD87A" },
              { title: "Flexible Scheduling", desc: "Programs that fit your school's calendar", color: "#B47FFF" },
              { title: "Experienced Instructors", desc: "Passionate artists who love working with kids", color: "#FFD43B" },
              { title: "Age-Appropriate", desc: "Tailored activities for different grade levels", color: "#FF6B6B" },
              { title: "Mess-Free Setup", desc: "We handle setup and cleanup", color: "#74D0F5" },
              { title: "Memorable Experiences", desc: "Students leave with art and memories", color: "#FF9F43" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[32px] p-8 shadow-lg border-[4px]"
                style={{ borderColor: item.color }}
              >
                <div className="text-5xl mb-4 text-center">✨</div>
                <h3 className="text-2xl font-bold text-[#2A2540] mb-3 text-center" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  {item.title}
                </h3>
                <p className="text-[#7D7A96] text-center font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
