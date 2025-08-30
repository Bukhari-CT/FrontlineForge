import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion, AnimatePresence } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [moreProjects] = useState([
    {
      id: 1,
      title: "Just Doing Solar",
      description:
        "Just Doing Solar offers comprehensive solar energy solutions, including installation, products, and guidance to help customers transition to sustainable and renewable energy sources.",
      live: "https://justdoingsolar.com/",
      technology: ["Wordpress", "Hello Elementor", "WPForms", "Yoast SEO"],
    },
    {
      id: 2,
      title: "Crescent Education",
      description:
        "Crescent Education is an educational platform offering a range of courses, including vocational and English language training, to enhance skills and career opportunities in Australia.",
      live: "https://crescenteducation.com.au/",
      technology: ["Wordpress", "OceanWP", "Ocean Social Sharing", "CF7"],
    },
    {
      id: 3,
      title: "AXM Human Resources",
      description:
        "AXM Human Resources is a human resources platform providing professional HR services and solutions for businesses to effectively manage their workforce and optimize human capital.",
      live: "http://axmhr.com/",
      technology: ["Wordpress", "Phlox Pro", "Stencil", "WP ULike"],
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
    },
    {
      id: 2,
      title: "Prisoners Covid Vacination Track",
      description:
        "This is a private website were Jails Officical and Covid Vacination team do tracking of covid vacination of their prisoners",
      live: "#",
      technology: ["React", "Node", "Antd", "Twilio"],
    },
    {
      id: 3,
      title: "Cohere",
      description:
        "Cohere is a coaching side where coachs have their students and clients how communicate with onsite calls with them",
      live: "#",
      technology: ["React", ".Net", "Material", "Stripe", "Less"],
    },
    {
      id: 4,
      title: "Sollabs",
      description:
        "Sollabs is a Lab Record Management System of US Based Lab that maintain the records of their testing tubes and track locations of them in trays as well",
      live: "https://sollabs.viralsolutionsga.com/login",
      technology: ["React", "Node", "Antd", "Twilio"],
    },
    {
      id: 5,
      title: "Aqua Operators",
      description:
        "Aqua Operators provides professional water and wastewater treatment services, equipment, and consulting solutions to meet diverse industrial and municipal needs.",
      live: "https://aquaoperators.com/",
      technology: ["Wordpress", "Avada", "Elementor", "CF7"],
    },
    {
      id: 6,
      title: "Drymax",
      description:
        "Drymax offers premium moisture control solutions, including desiccants and humidity indicators, to protect products from moisture damage.",
      live: "https://drymax.com.au/",
      technology: ["Wordpress", "Clenix", "Gutenburg", "Layer Slider"],
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
            className="text-yellow text-sm font-medium tracking-widest uppercase"
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
    </section>
  );
};

export default Archive;
