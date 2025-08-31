import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";

const Meeting = () => {
  const handleCalendlyClick = () => {
    // Replace with your actual Calendly URL
    window.open("https://calendly.com/faisalbukhari111", "_blank");
  };

  return (
    <section id="meeting" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            LET'S • MEET
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your project? Book a free consultation call and
            let's bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Meeting Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-mint-400/20 p-3 rounded-lg">
                  <FaCalendarAlt className="text-mint-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-gray-400">
                    Get a 30-minute free consultation to discuss your project
                    requirements, timeline, and budget.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-mint-400/20 p-3 rounded-lg">
                  <FaClock className="text-mint-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-400">
                    Choose a time that works best for you. Available weekdays
                    and weekends.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-mint-400/20 p-3 rounded-lg">
                  <FaVideo className="text-mint-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Video Call
                  </h3>
                  <p className="text-gray-400">
                    Meet via Google Meet, Zoom, or your preferred platform.
                    Screen sharing available.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-darkGray p-6 rounded-lg border border-gray-700"
            >
              <h4 className="text-white text-lg font-semibold mb-3">
                What we'll discuss:
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mint-400 rounded-full"></span>
                  Project requirements and goals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mint-400 rounded-full"></span>
                  Technical approach and timeline
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mint-400 rounded-full"></span>
                  Budget and pricing options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mint-400 rounded-full"></span>
                  Next steps and project kickoff
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Calendly Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-gradient-to-br from-mint-400/10 to-mint-400/5 p-8 rounded-2xl border border-mint-400/20 text-center max-w-md w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-mint-400/20 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <FaCalendarAlt className="text-mint-400 text-3xl" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Book a Meeting
                </h3>
                <p className="text-gray-400 text-sm">
                  Schedule a free consultation call to discuss your project
                </p>
              </motion.div>

              <motion.button
                onClick={handleCalendlyClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-mint-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-mint-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-mint-400/25"
              >
                <FaCalendarAlt className="text-lg" />
                Schedule Meeting
              </motion.button>

              <p className="text-gray-500 text-xs mt-4">
                Powered by Calendly • 30 min • Free consultation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
