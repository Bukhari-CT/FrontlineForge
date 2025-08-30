import { motion } from "framer-motion";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub, TbBrandDribbble, TbBrandBehance } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      icon: SlSocialLinkedin,
      href: "https://www.linkedin.com/in/faisal-bukhari-101/",
      label: "LinkedIn",
    },
    { icon: TbBrandDribbble, href: "#", label: "Dribbble" },
    { icon: TbBrandBehance, href: "#", label: "Behance" },
    {
      icon: TbBrandGithub,
      href: "https://github.com/Bukhari-CT",
      label: "GitHub",
    },
    { icon: SlSocialInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CONTACT • ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              CONNECT WITH ME
            </h3>

            {/* Social Links */}
            <div className="flex gap-6 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-darkGray border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-yellow hover:text-yellow transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 180,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-yellow text-sm font-semibold uppercase tracking-wider mb-2">
                  EMAIL
                </h4>
                <a
                  href="mailto:faisalbukhari111@gmail.com"
                  className="text-white hover:text-yellow transition-colors duration-300"
                >
                  faisalbukhari111@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-yellow text-sm font-semibold uppercase tracking-wider mb-2">
                  PHONE
                </h4>
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-yellow transition-colors duration-300"
                >
                  +92 300 123 4567
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-medium mb-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="contactInput"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="contactInput"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="contactInput resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                Send Message
                <FaArrowRight className="text-sm" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
