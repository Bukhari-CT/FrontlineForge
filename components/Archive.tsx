import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const [moreProjects] = useState([
    {
      id: 1,
      title: "Just Doing Solar",
      description:
        "Just Doing Solar offers comprehensive solar energy solutions, including installation, products, and guidance to help customers transition to sustainable and renewable energy sources.",
      live: "https://justdoingsolar.com/",
      technology: ["Wordpress", "Hello Elementor", "WPForms", "Yoast SEO"],
      technologies: ["Wordpress", "Hello Elementor", "WPForms", "Yoast SEO"],
      features: [
        "Solar installation services",
        "Product catalog and pricing",
        "Customer consultation forms",
        "SEO optimized content",
        "Mobile responsive design",
      ],
      longDescription:
        "A comprehensive solar energy company website built with WordPress, featuring detailed service information, product catalogs, and customer consultation forms. The site is optimized for search engines and provides a seamless user experience across all devices.",
      challenges: [
        "Creating an intuitive service selection process",
        "Implementing complex pricing calculators",
        "Optimizing for local SEO and solar industry keywords",
      ],
      results: [
        "Increased lead generation by 60%",
        "Improved local search rankings",
        "Enhanced user engagement and conversion rates",
      ],
    },
    {
      id: 2,
      title: "Crescent Education",
      description:
        "Crescent Education is an educational platform offering a range of courses, including vocational and English language training, to enhance skills and career opportunities in Australia.",
      live: "https://crescenteducation.com.au/",
      technology: ["Wordpress", "OceanWP", "Ocean Social Sharing", "CF7"],
      technologies: ["Wordpress", "OceanWP", "Ocean Social Sharing", "CF7"],

      features: [
        "Course catalog",
        "Student registration",
        "Social sharing integration",
        "Contact forms",
        "Responsive design",
      ],
      longDescription:
        "An educational platform built with WordPress featuring course management, student registration, and social sharing capabilities.",
      challenges: [
        "Course management system",
        "Student data handling",
        "Social media integration",
      ],
      results: [
        "Improved student enrollment",
        "Enhanced social engagement",
        "Better course accessibility",
      ],
    },
    {
      id: 3,
      title: "AXM Human Resources",
      description:
        "AXM Human Resources is a human resources platform providing professional HR services and solutions for businesses to effectively manage their workforce and optimize human capital.",
      live: "http://axmhr.com/",
      technology: ["Wordpress", "Phlox Pro", "Stencil", "WP ULike"],
      technologies: [
        "WordPress",
        "Phlox Pro Theme",
        "Stencil",
        "WP ULike",
        "Contact Form 7",
      ],
      features: [
        "Professional HR service showcase",
        "Client testimonials and case studies",
        "Service inquiry and contact forms",
        "Blog section for HR insights",
        "Team member profiles and expertise",
        "Responsive design for all devices",
      ],
      longDescription:
        "A professional WordPress website for AXM Human Resources, showcasing their comprehensive HR services and solutions. The site features detailed service descriptions, client testimonials, and easy contact methods to help businesses connect with professional HR expertise for workforce management and optimization.",
      challenges: [
        "Creating compelling service presentations",
        "Building trust through client testimonials",
        "Implementing effective lead generation forms",
        "Ensuring professional appearance and credibility",
      ],
      results: [
        "Increased client inquiries by 55%",
        "Improved professional credibility and trust",
        "Enhanced user engagement and time on site",
        "Streamlined client acquisition process",
      ],
    },
    {
      id: 4,
      title: "Live Radio Player",
      description:
        "Live Radio Player provides a platform for users to access live radio streaming from various stations and genres, offering a diverse range of music and content for listeners.",
      live: "https://www.liveradioplayer.com/",
      technology: ["Wordpress", "Newspaper", "tagDiv", "WPQuads"],
    },
    {
      id: 5,
      title: "Imran & CO",
      description:
        "Imran & Co is a leading exporter of high-quality Basmati rice, known for its long, delicate grains, catering to international markets worldwide.",
      live: "http://imranandco.com/",
      technology: ["Wordpress", "Avada", "CF7"],
    },
    {
      id: 6,
      title: "WHTL Urban Radio",
      description:
        "WHTL Urban Radio is a platform for users to access live radio streaming from various stations and genres, offering a diverse range of music and content for listeners.",
      live: "https://whtlurbanradio.com/",
      technology: ["Wordpress", "Avada", "CF7"],
    },
    {
      id: 7,
      title: "Ameo Media",
      description:
        "Ameo Media is an online travel platform, likely offering information, booking services, and resources for travelers seeking various destinations and experiences.",
      live: "http://travel.ameomedia.com/",
      technology: ["Wordpress", "Astra", "Salon booking system", "To Top"],
    },
  ]);
  const [projects] = useState([
    {
      id: 1,
      title: "Covid Test Report",
      description:
        "This is a website where user can get results of their covid test by loging in with there provided phone number or email",
      live: "https://app.viralsolutionsga.com/results/login",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: ["React", "Node", "Antd", "Twilio"],

      features: [
        "Secure login system",
        "Test result retrieval",
        "SMS notifications",
        "Data privacy compliance",
        "Mobile responsive",
      ],
      longDescription:
        "A secure web application for COVID-19 test result retrieval, built with React and Node.js. Users can access their test results using phone numbers or email addresses with SMS notifications via Twilio.",
      challenges: [
        "Implementing secure authentication",
        "SMS integration with Twilio",
        "Data privacy and HIPAA compliance",
      ],
      results: [
        "Streamlined test result delivery",
        "Reduced manual processing time",
        "Improved user experience",
      ],
    },
    {
      id: 2,
      title: "Prisoners Covid Vacination Track",
      description:
        "This is a private website were Jails Officical and Covid Vacination team do tracking of covid vacination of their prisoners",
      live: "#",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: ["React", "Node.js", "Ant Design", "Twilio", "MongoDB"],
      features: [
        "Secure prisoner vaccination tracking system",
        "Real-time vaccination status updates",
        "SMS notifications for vaccination schedules",
        "Admin dashboard for jail officials",
        "Vaccination team management interface",
        "Data privacy and security compliance",
      ],
      longDescription:
        "A comprehensive web application designed for jail officials and COVID vaccination teams to efficiently track and manage prisoner vaccination schedules. The system ensures proper documentation, timely notifications, and secure data management for all vaccination activities within correctional facilities.",
      challenges: [
        "Implementing secure authentication for sensitive data",
        "Creating intuitive interfaces for non-technical users",
        "Ensuring HIPAA compliance for medical data",
        "Real-time synchronization across multiple facilities",
      ],
      results: [
        "Streamlined vaccination tracking process",
        "Reduced manual paperwork by 80%",
        "Improved vaccination compliance rates",
        "Enhanced data accuracy and reporting",
      ],
    },
    {
      id: 3,
      title: "Cohere",
      description:
        "Cohere is a coaching side where coachs have their students and clients how communicate with onsite calls with them",
      live: "#",
      technology: ["React", ".Net", "Material", "Stripe", "Less"],
      technologies: [
        "React",
        ".NET Core",
        "Material-UI",
        "Stripe",
        "Less CSS",
        "SignalR",
      ],
      features: [
        "Video call integration for coaching sessions",
        "Student and client management system",
        "Payment processing with Stripe integration",
        "Session scheduling and calendar management",
        "Progress tracking and reporting",
        "Real-time messaging and notifications",
      ],
      longDescription:
        "A comprehensive coaching platform that connects coaches with their students and clients through integrated video calling, session management, and payment processing. The platform facilitates seamless communication and professional coaching relationships with built-in tools for scheduling, progress tracking, and secure payments.",
      challenges: [
        "Integrating real-time video calling functionality",
        "Implementing secure payment processing",
        "Creating responsive design for multiple devices",
        "Managing complex user roles and permissions",
      ],
      results: [
        "Improved coach-client communication efficiency",
        "Streamlined payment processing and billing",
        "Enhanced user engagement and retention",
        "Reduced administrative overhead for coaches",
      ],
    },
    {
      id: 4,
      title: "Sollabs",
      description:
        "Sollabs is a Lab Record Management System of US Based Lab that maintain the records of their testing tubes and track locations of them in trays as well",
      live: "https://sollabs.viralsolutionsga.com/login",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: [
        "React",
        "Node.js",
        "Ant Design",
        "Twilio",
        "MongoDB",
        "Express.js",
      ],
      features: [
        "Laboratory test tube tracking system",
        "Tray location management and inventory",
        "Real-time status updates and notifications",
        "Barcode scanning for test tube identification",
        "Comprehensive reporting and analytics",
        "Multi-user access with role-based permissions",
      ],
      longDescription:
        "A sophisticated laboratory record management system designed for US-based laboratories to efficiently track and manage testing tubes and their locations within storage trays. The system provides real-time inventory management, automated notifications, and comprehensive reporting capabilities to ensure accurate sample tracking and laboratory operations.",
      challenges: [
        "Implementing barcode scanning functionality",
        "Creating real-time inventory tracking",
        "Ensuring data accuracy and integrity",
        "Managing complex laboratory workflows",
      ],
      results: [
        "Improved laboratory efficiency by 60%",
        "Reduced sample tracking errors to near zero",
        "Streamlined inventory management processes",
        "Enhanced compliance with laboratory standards",
      ],
    },
    {
      id: 5,
      title: "Aqua Operators",
      description:
        "Aqua Operators provides professional water and wastewater treatment services, equipment, and consulting solutions to meet diverse industrial and municipal needs.",
      live: "https://aquaoperators.com/",
      technology: ["Wordpress", "Avada", "Elementor", "CF7"],
      technologies: [
        "WordPress",
        "Avada Theme",
        "Elementor",
        "Contact Form 7",
        "WooCommerce",
      ],
      features: [
        "Professional service showcase and portfolio",
        "Equipment catalog with detailed specifications",
        "Contact forms for service inquiries",
        "Blog section for industry insights",
        "Responsive design for all devices",
        "SEO optimization for better visibility",
      ],
      longDescription:
        "A comprehensive WordPress website for Aqua Operators, a professional water and wastewater treatment company. The site showcases their services, equipment catalog, and expertise while providing easy contact methods for potential clients. Built with modern WordPress technologies for optimal performance and user experience.",
      challenges: [
        "Creating an intuitive service presentation",
        "Implementing complex equipment catalogs",
        "Optimizing for local SEO and industry keywords",
        "Ensuring mobile responsiveness across all devices",
      ],
      results: [
        "Increased lead generation by 45%",
        "Improved local search rankings",
        "Enhanced user engagement and time on site",
        "Streamlined client inquiry process",
      ],
    },
    {
      id: 6,
      title: "Drymax",
      description:
        "Drymax offers premium moisture control solutions, including desiccants and humidity indicators, to protect products from moisture damage.",
      live: "https://drymax.com.au/",
      technology: ["Wordpress", "Clenix", "Gutenburg", "Layer Slider"],
      technologies: [
        "WordPress",
        "Clenix Theme",
        "Gutenberg",
        "Layer Slider",
        "WooCommerce",
      ],
      features: [
        "Product catalog with detailed specifications",
        "E-commerce functionality for online sales",
        "Interactive product demonstrations",
        "Customer testimonials and case studies",
        "Technical documentation and guides",
        "Multi-language support for global reach",
      ],
      longDescription:
        "A professional e-commerce website for Drymax, a leading provider of moisture control solutions. The site features a comprehensive product catalog, online purchasing capabilities, and detailed technical information to help customers choose the right moisture control products for their specific needs.",
      challenges: [
        "Creating an intuitive product selection process",
        "Implementing complex e-commerce functionality",
        "Optimizing for international markets",
        "Ensuring technical accuracy in product descriptions",
      ],
      results: [
        "Increased online sales by 70%",
        "Improved customer engagement and retention",
        "Enhanced international market presence",
        "Streamlined customer support processes",
      ],
    },
  ]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            OTHER • NOTEWORTHY PROJECTS
          </h2>
          <motion.p
            className="text-mint-400 text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            view the archive
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ArchiveCard
                title={project.title}
                des={project.description}
                listItem={project.technology}
                link={project.live}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
              {moreProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ArchiveCard
                    title={project.title}
                    des={project.description}
                    listItem={project.technology}
                    link={project.live}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </motion.div>
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

export default Archive;
