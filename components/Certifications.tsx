import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Problem Solver (JavaScript)",
      issuer: "HackerRank",
      type: "certification",
      icon: FaCertificate,
      description:
        "Demonstrated advanced problem-solving skills using JavaScript",
      date: "2024",
      color: "from-blue-500 to-blue-600",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      type: "certification",
      icon: FaCertificate,
      description: "Comprehensive React development skills and best practices",
      date: "2024",
      color: "from-green-500 to-green-600",
      badgeColor: "bg-green-500",
    },
    {
      id: 3,
      title: "React Assessment",
      issuer: "LinkedIn",
      type: "assessment",
      icon: FaTrophy,
      description: "Top 5% performance in React skills assessment",
      date: "2024",
      color: "from-purple-500 to-purple-600",
      badgeColor: "bg-purple-500",
      highlight: "Top 5%",
    },
    {
      id: 4,
      title: "WordPress Assessment",
      issuer: "LinkedIn",
      type: "assessment",
      icon: FaTrophy,
      description: "Top 5% performance in WordPress skills assessment",
      date: "2024",
      color: "from-orange-500 to-orange-600",
      badgeColor: "bg-orange-500",
      highlight: "Top 5%",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-darkGray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CERTIFICATIONS • & • ASSESSMENTS
          </h2>
          <p className="text-gray-400 text-lg">
            Validated skills and achievements from leading platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-mint-400/50 transition-all duration-300 h-full">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${cert.badgeColor} flex items-center justify-center`}
                  >
                    <cert.icon className="text-white text-xl" />
                  </div>
                  {cert.highlight && (
                    <span className="bg-mint-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {cert.highlight}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-mint-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-mint-400 font-semibold text-sm">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm capitalize">
                      {cert.type}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400 text-xs">{cert.date}</span>
                    <div className="flex items-center gap-1">
                      <FaAward className="text-mint-400 text-sm" />
                      <span className="text-mint-400 text-xs font-medium">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-mint-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-mint-400 mb-2">2</div>
            <div className="text-gray-400 text-sm">
              HackerRank Certifications
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mint-400 mb-2">2</div>
            <div className="text-gray-400 text-sm">LinkedIn Assessments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mint-400 mb-2">Top 5%</div>
            <div className="text-gray-400 text-sm">LinkedIn Performance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mint-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">Total Achievements</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
