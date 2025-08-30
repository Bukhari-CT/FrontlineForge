import {
  cafezupas,
  amazonImg,
  viralSolutions,
  urgentcare,
  noorShop,
} from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Charity Landing Page",
      category: "DESIGN • DEVELOPMENT",
      description:
        "A modern charity website with donation functionality and volunteer registration system.",
      image: cafezupas,
      link: "https://cafezupas.com/",
      github: "https://github.com/Bukhari-CT",
    },
    {
      id: 2,
      title: "Habit App Design",
      category: "DESIGN",
      description:
        "Mobile app design for habit tracking with beautiful UI/UX and intuitive user flow.",
      image: viralSolutions,
      link: "https://viralsolutionsga.com/",
      github: "https://github.com/Bukhari-CT",
    },
    {
      id: 3,
      title: "Interesting App",
      category: "DEVELOPMENT",
      description:
        "Full-stack web application with real-time features and modern architecture.",
      image: urgentcare,
      link: "https://drivethruurgentcare.com/",
      github: "https://github.com/Bukhari-CT",
    },
    {
      id: 4,
      title: "History Website",
      category: "DEVELOPMENT",
      description:
        "Educational platform showcasing historical content with interactive timelines.",
      image: noorShop,
      link: "#",
      github: "https://github.com/Bukhari-CT",
    },
    {
      id: 5,
      title: "Photography App",
      category: "DESIGN",
      description:
        "Portfolio website for photographers with gallery management and booking system.",
      image: amazonImg,
      link: "#",
      github: "https://github.com/Bukhari-CT",
    },
    {
      id: 6,
      title: "Electric Bike Landing Page",
      category: "DESIGN • DEVELOPMENT",
      description:
        "E-commerce landing page for electric bikes with product showcase and ordering system.",
      image: cafezupas,
      link: "#",
      github: "https://github.com/Bukhari-CT",
    },
  ];

  return (
    <section id="project" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • PORTFOLIO
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="mb-3">
                <span className="text-yellow text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow transition-colors duration-300"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TbBrandGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow transition-colors duration-300"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RxOpenInNewWindow className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
