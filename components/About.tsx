import { profileImg } from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              FAISAL • BUKHARI
            </h2>
            <p className="text-xl text-gray-300 font-semibold mb-8">
              Full-Stack Developer specializing in modern web applications.
            </p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m Faisal Bukhari, a{" "}
                <span className="text-mint-400">Full-Stack Developer</span> with
                5+ years of experience building modern, scalable, and
                high-performance web applications. I specialize in React,
                Next.js, Python FastAPI, and Node.js technologies.
              </p>
              <p>
                From sleek user interfaces to robust backend systems, I help
                businesses transform ideas into reliable digital products. My
                expertise spans
                <span className="text-mint-400">
                  {" "}
                  frontend development
                </span>{" "}
                with React/Next.js,
                <span className="text-mint-400"> backend systems</span> with
                Python FastAPI and Node.js, and{" "}
                <span className="text-mint-400"> cloud integration</span> with
                modern deployment practices.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12">
              <div>
                <h4 className="text-mint-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  LOCATION
                </h4>
                <p className="text-white">Pakistan</p>
              </div>
              <div>
                <h4 className="text-mint-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  EXPERIENCE
                </h4>
                <p className="text-white">5+ Years Full-Stack</p>
              </div>
              <div>
                <h4 className="text-mint-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  SPECIALIZATION
                </h4>
                <p className="text-white">React, Next.js, FastAPI</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src={profileImg}
                alt="Faisal Bukhari"
                fill
                className="object-cover rounded-full border-4 border-yellow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: "5+", label: "YEARS OF EXPERIENCE" },
            { number: "50+", label: "PROJECTS COMPLETED" },
            { number: "30+", label: "HAPPY CLIENTS" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card text-center group cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-4xl font-bold text-yellow mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="text-gray-300 uppercase tracking-wider text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
