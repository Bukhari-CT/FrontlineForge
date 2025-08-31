import { motion } from "framer-motion";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub, TbBrandDribbble, TbBrandBehance } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    subjectOther: "",
    deadline: "",
    deadlineOther: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          subject: "",
          subjectOther: "",
          deadline: "",
          deadlineOther: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
                  className="w-12 h-12 bg-darkGray border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-yellow hover:text-mint-400 transition-all duration-300"
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
                <h4 className="text-mint-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  EMAIL
                </h4>
                <a
                  href="mailto:faisalbukhari111@gmail.com"
                  className="text-white hover:text-mint-400 transition-colors duration-300"
                >
                  faisalbukhari111@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-mint-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  PHONE
                </h4>
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-mint-400 transition-colors duration-300"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-400 text-sm">
                  Have a project in mind? Need a quote? Just want to chat? I'd
                  love to hear from you!
                </p>
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="contactInput"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="contactInput"
                    required
                  />
                </div>
              </div>

              {/* Subject and Deadline Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    SUBJECT
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contactInput"
                  >
                    <option value="">Select subject</option>
                    <option value="website">Website Development</option>
                    <option value="web-app">Web Application</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="maintenance">Project Maintenance</option>
                    <option value="collaboration">
                      Collaboration Opportunity
                    </option>
                    <option value="other">Other</option>
                  </select>

                  {formData.subject === "other" && (
                    <motion.input
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      type="text"
                      name="subjectOther"
                      value={formData.subjectOther}
                      onChange={handleInputChange}
                      placeholder="Please specify..."
                      className="contactInput mt-2"
                    />
                  )}
                </div>

                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    PROJECT DEADLINE
                  </label>
                  <select
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="contactInput"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush job)</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus-months">6+ months</option>
                    <option value="flexible">I'm flexible</option>
                    <option value="other">Other</option>
                  </select>

                  {formData.deadline === "other" && (
                    <motion.input
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      type="text"
                      name="deadlineOther"
                      value={formData.deadlineOther}
                      onChange={handleInputChange}
                      placeholder="Please specify..."
                      className="contactInput mt-2"
                    />
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell me about your project, idea, or just say hello! Include any specific requirements, features, or details you'd like to discuss."
                  className="contactInput resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`btn-primary w-full flex items-center justify-center gap-3 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <FaArrowRight className="text-sm" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
