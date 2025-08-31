import {
  cafezupas,
  amazonImg,
  viralSolutions,
  urgentcare,
  noorShop,
} from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      features: [
        "Responsive donation system with Stripe integration",
        "Volunteer registration and management",
        "Event calendar and scheduling",
        "Admin dashboard for content management",
        "SEO optimized for better visibility",
      ],
      longDescription:
        "A comprehensive charity website built to help organizations manage donations, volunteers, and events. The platform features a modern, accessible design with secure payment processing and real-time updates. Note: The image shown is a placeholder representation of the project design.",
      challenges: [
        "Implementing secure payment processing with PCI compliance",
        "Creating an intuitive volunteer management system",
        "Optimizing for mobile devices and accessibility",
      ],
      results: [
        "Increased donation conversion by 40%",
        "Streamlined volunteer registration process",
        "Improved user engagement and retention",
      ],
    },
    {
      id: 2,
      title: "Habit App Design",
      category: "DESIGN",
      description:
        "Mobile app design for habit tracking with beautiful UI/UX and intuitive user flow.",
      image: viralSolutions,
      link: "#",
      github: "https://github.com/Bukhari-CT",
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      features: [
        "Intuitive habit tracking interface",
        "Progress visualization with charts",
        "Social sharing and community features",
        "Customizable reminders and notifications",
        "Dark/light theme support",
      ],
      longDescription:
        "A beautifully designed mobile application focused on helping users build and maintain positive habits. The design emphasizes simplicity and motivation through thoughtful UX patterns.",
      challenges: [
        "Creating an engaging yet simple user interface",
        "Designing effective progress visualization",
        "Ensuring accessibility across different devices",
      ],
      results: [
        "High user satisfaction scores (4.8/5)",
        "Increased user retention by 60%",
        "Featured in design showcases",
      ],
    },
    {
      id: 3,
      title: "Interesting App",
      category: "DEVELOPMENT",
      description:
        "Full-stack web application with real-time features and modern architecture.",
      image: urgentcare,
      link: "#",
      github: "https://github.com/Bukhari-CT",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
      features: [
        "Real-time chat",
        "User authentication",
        "File upload",
        "Search functionality",
        "Responsive design",
      ],
      longDescription:
        "A comprehensive web application featuring real-time communication and modern web technologies.",
      challenges: [
        "Implementing real-time features",
        "Database optimization",
        "Cross-browser compatibility",
      ],
      results: [
        "50% faster load times",
        "Improved user engagement",
        "10,000+ concurrent users",
      ],
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
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful"],
      features: [
        "Interactive timelines",
        "Rich media content",
        "Search functionality",
        "Multi-language support",
        "PWA features",
      ],
      longDescription:
        "An educational platform that brings history to life through interactive content and engaging storytelling.",
      challenges: [
        "Smooth timeline animations",
        "Large data management",
        "Effective search algorithms",
      ],
      results: [
        "70% longer sessions",
        "Positive educator feedback",
        "Featured in ed-tech showcases",
      ],
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
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      features: [
        "Gallery management",
        "Booking system",
        "Portfolio showcase",
        "Client testimonials",
        "Contact forms",
      ],
      longDescription:
        "A beautifully designed portfolio platform for photographers to showcase their work and manage bookings.",
      challenges: [
        "Creating engaging gallery layouts",
        "Designing intuitive booking flow",
        "Mobile optimization",
      ],
      results: [
        "High conversion rates",
        "Positive client feedback",
        "Featured in design galleries",
      ],
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
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      features: [
        "Product showcase",
        "Ordering system",
        "Payment integration",
        "Admin dashboard",
        "Inventory management",
      ],
      longDescription:
        "A modern e-commerce landing page for electric bikes with seamless ordering and payment processing.",
      challenges: [
        "Secure payment processing",
        "Complex state management",
        "Performance optimization",
      ],
      results: [
        "1000+ successful transactions",
        "95% uptime",
        "Positive user reviews",
      ],
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
              onClick={() => handleProjectClick(project)}
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
                <span className="text-mint-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mint-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
