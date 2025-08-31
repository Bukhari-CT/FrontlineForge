import { motion } from "framer-motion";
import { FaCode, FaServer, FaRocket } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Frontend Development",
      description:
        "Building dynamic, responsive applications with React & Next.js, featuring modern UI components using Tailwind CSS, Material UI, and Ant Design.",
      icon: FaCode,
    },
    {
      id: 2,
      number: "02",
      title: "Backend Development",
      description:
        "Creating robust backend systems with Python FastAPI and Node.js NestJS, including microservices, databases, and cloud integrations.",
      icon: FaServer,
    },
    {
      id: 3,
      number: "03",
      title: "Full-Stack Solutions",
      description:
        "Delivering complete web applications from concept to deployment, with scalable architectures and modern development practices.",
      icon: FaRocket,
    },
  ];

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
            MY • SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  className="w-16 h-16 bg-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-yellow/20 transition-colors duration-300"
                  whileHover={{
                    rotate: 180,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true }}
                  >
                    <service.icon className="text-2xl text-mint-400" />
                  </motion.div>
                </motion.div>
                <motion.span
                  className="text-4xl font-bold text-mint-400/20 group-hover:text-mint-400/40 transition-colors duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.number}
                </motion.span>
              </div>

              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ color: "#FFD700" }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
