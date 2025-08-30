import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [experiences] = useState([
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Devsarch",
      timePeriod: "Nov 2023 - Present",
      responsibilities: [
        "Developed modern React applications with Next.js and TypeScript for enhanced performance and type safety.",
        "Built responsive user interfaces using Tailwind CSS and Material UI components.",
        "Implemented state management solutions with Redux Toolkit and React Query for optimal data handling.",
        "Created RESTful APIs using Python FastAPI with Pydantic validation and SQLAlchemy ORM.",
        "Integrated cloud services including Google Cloud Storage and Supabase for scalable data management.",
        "Implemented microservices architecture with Docker containerization for deployment.",
        "Optimized application performance resulting in 30% faster load times and improved user experience.",
        "Collaborated with cross-functional teams using agile methodologies and Git version control.",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Nodlays",
      timePeriod: "June 2023 - Oct 2023",
      responsibilities: [
        "Developed responsive React applications with modern UI components using Ant Design and Material UI.",
        "Implemented advanced state management with Redux Toolkit and React Query for efficient data flow.",
        "Built interactive dashboards with Recharts for data visualization and analytics.",
        "Optimized Webpack configuration resulting in 20% performance improvement and 30% faster build times.",
        "Translated complex Figma designs into pixel-perfect React components with Tailwind CSS.",
        "Integrated third-party APIs and services for enhanced application functionality.",
        "Implemented Framer Motion animations for smooth user interactions and engaging interfaces.",
        "Conducted code reviews and maintained high code quality standards with TypeScript.",
      ],
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "Carbonteq",
      timePeriod: "November 2021 - June 2023",
      responsibilities: [
        "Developed 7+ full-stack web applications using React, Node.js, and modern development practices.",
        "Built scalable backend APIs with Node.js and Express, handling complex business logic and data processing.",
        "Implemented advanced React patterns including custom hooks, context API, and performance optimizations.",
        "Integrated 100+ REST APIs with proper error handling and data validation using TypeScript.",
        "Optimized application performance by 30% through code splitting, lazy loading, and bundle optimization.",
        "Managed PostgreSQL and MongoDB databases with efficient query optimization and data modeling.",
        "Implemented CI/CD pipelines with Docker for automated deployment and testing.",
        "Led agile development processes and mentored junior developers in best practices.",
      ],
    },
    {
      id: 4,
      title: "Game Developer",
      company: "Casual Gaming Studio",
      timePeriod: "December 2019 - May 2020",
      responsibilities: [
        "Mastered the art of building optimized terrains for visually stunning and smooth gaming experiences.",
        "Crafted intuitive menu controls to enhance user navigation and interaction.",
        "Successfully created engaging simulation games for immersive virtual experiences.",
        "Utilized 3D modeling and animation to bring in-game elements to life.",
        "Developed games compatible across multiple platforms for broader accessibility.",
        "Conducted rigorous testing and troubleshooting to ensure a seamless gameplay experience.",
        "Collaborated with cross-functional teams to deliver innovative gaming experiences.",
      ],
    },
    {
      id: 5,
      title: "WordPress Web Developer",
      company: "Pineal",
      timePeriod: "July 2019 - November 2019",
      responsibilities: [
        "Converted Mockups into pixel-perfect HTML, CSS, and JavaScript for seamless web rendering.",
        "Successfully developed and launched 13-15 WordPress websites, ensuring both functionality and aesthetics met client expectations.",
        "Engaged in WordPress custom development to meet specific client requirements and enhance website capabilities.",
        "Implemented responsive design techniques for optimal performance on various devices and screen sizes.",
        "Collaborated with design and content teams to bring client visions to life and create engaging online experiences.",
        "Regularly updated and maintained websites, ensuring they remain secure, functional, and up-to-date.",
        "Provided clients with training and support for efficient content management and website administration.",
      ],
    },
    {
      id: 6,
      title: "Web Developer",
      company: "Fiverr",
      timePeriod: "July 2018 - Present",
      responsibilities: [
        "Customized 25+ WordPress sites to meet client needs.",
        "Developed e-commerce solutions for 5+ stores, aligning with client specifications.",
        "Enhanced forms with advanced features for improved user experience.",
        "Collaborated with clients to understand project goals.",
        "Boosted SEO, resulting in a 20% increase in organic traffic.",
        "Ensured site security through regular maintenance and updates.",
        "Empowered clients with training for effective site management.",
      ],
    },
  ]);

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const onClickExperience = (id: number) => {
    const matchedExperience = experiences.find(
      (experience) => experience.id === id
    );
    if (matchedExperience) {
      setSelectedExperience(matchedExperience);
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • EXPERIENCE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company List */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-2">
              {experiences.map((experience, index) => (
                <motion.button
                  key={experience.id}
                  onClick={() => onClickExperience(experience.id)}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedExperience.id === experience.id
                      ? "bg-yellow text-black border-l-4 border-yellow"
                      : "bg-darkGray text-white hover:bg-lightGray border-l-4 border-transparent hover:border-yellow/50"
                  }`}
                  whileHover={{
                    scale: 1.01,
                    x: 2,
                  }}
                  whileTap={{ scale: 0.99 }}
                  animate={{
                    backgroundColor:
                      selectedExperience.id === experience.id
                        ? "#FFD700"
                        : "#282828",
                    color:
                      selectedExperience.id === experience.id
                        ? "#000000"
                        : "#FFFFFF",
                    borderLeftColor:
                      selectedExperience.id === experience.id
                        ? "#FFD700"
                        : "transparent",
                  }}
                >
                  <motion.div
                    className="font-semibold"
                    animate={{
                      color:
                        selectedExperience.id === experience.id
                          ? "#000000"
                          : "#FFFFFF",
                    }}
                  >
                    {experience.company}
                  </motion.div>
                  <motion.div
                    className="text-sm opacity-75"
                    animate={{
                      color:
                        selectedExperience.id === experience.id
                          ? "#000000"
                          : "#9CA3AF",
                    }}
                  >
                    {experience.timePeriod}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card"
              >
                <motion.div
                  className="mb-6"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    {selectedExperience.title}
                  </motion.h3>
                  <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <motion.span
                      className="text-yellow font-semibold"
                      whileHover={{ scale: 1.02 }}
                    >
                      {selectedExperience.company}
                    </motion.span>
                    <motion.span
                      className="text-gray-400 text-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      {selectedExperience.timePeriod}
                    </motion.span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.h4
                    className="text-white font-semibold mb-3"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                  >
                    Key Responsibilities:
                  </motion.h4>
                  <ul className="space-y-2">
                    {selectedExperience.responsibilities.map(
                      (responsibility, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: 10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.05,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="flex items-start gap-3 text-gray-300"
                          whileHover={{
                            x: 2,
                            color: "#FFD700",
                          }}
                        >
                          <motion.span
                            className="text-yellow mt-1"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.7 + index * 0.05,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            •
                          </motion.span>
                          <span>{responsibility}</span>
                        </motion.li>
                      )
                    )}
        </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
