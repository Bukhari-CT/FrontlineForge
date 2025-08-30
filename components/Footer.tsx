import { motion } from "framer-motion";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub, TbBrandDribbble, TbBrandBehance } from "react-icons/tb";

const Footer = () => {
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
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm"
        >
          © 2025 Faisal Bukhari
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-10 h-10 bg-darkGray border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-yellow hover:text-yellow transition-all duration-300 hover:scale-110"
            >
              <social.icon className="text-lg" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
