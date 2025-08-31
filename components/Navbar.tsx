import { useRef } from "react";
import { profileImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor border-b border-gray-800">
      <div className="max-w-7xl h-full mx-auto px-6 flex items-center justify-between">
        {/* Left side - Profile and Name */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow">
            <Image
              src={profileImg}
              alt="Faisal Bukhari"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">Faisal Bukhari</h2>
            <p className="text-gray-400 text-sm">Developer</p>
          </div>
        </motion.div>

        {/* Center - Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-white hover:text-mint-400 transition-colors duration-300 nav-link"
            href="#home"
            onClick={handleScroll}
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Home
            </motion.span>
          </Link>
          <Link
            className="text-white hover:text-mint-400 transition-colors duration-300 nav-link"
            href="#about"
            onClick={handleScroll}
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              About
            </motion.span>
          </Link>
          <Link
            className="text-white hover:text-mint-400 transition-colors duration-300 nav-link"
            href="#project"
            onClick={handleScroll}
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              Portfolio
            </motion.span>
          </Link>
          <Link
            className="text-white hover:text-mint-400 transition-colors duration-300 nav-link"
            href="#contact"
            onClick={handleScroll}
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              Contact
            </motion.span>
          </Link>
        </div>

        {/* Right side - CTA Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Link href="#contact" onClick={handleScroll} className="btn-primary">
            Say Hello
          </Link>
        </motion.div>
        {/* Mobile Menu Button */}
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group"
        >
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-darkGray flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-mint-400 cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="text-white hover:text-mint-400 cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    className="text-white hover:text-mint-400 cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="text-white hover:text-mint-400 cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Portfolio
                    </motion.li>
                  </Link>
                  <Link
                    className="text-white hover:text-mint-400 cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>

                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/Bukhari-CT"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border border-gray-600 hover:border-yellow text-white rounded-full inline-flex items-center justify-center hover:text-mint-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/faisal-bukhari-101/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border border-gray-600 hover:border-yellow text-white rounded-full inline-flex items-center justify-center hover:text-mint-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: "easeIn" }}
                    href="https://www.fiverr.com/faisalbukhari"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border border-gray-600 hover:border-yellow text-white rounded-full inline-flex items-center justify-center hover:text-mint-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandFiverr />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: "easeIn" }}
                    href="https://www.upwork.com/freelancers/faisalb21"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border border-gray-600 hover:border-yellow text-white rounded-full inline-flex items-center justify-center hover:text-mint-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandUpwork />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-mint-400 text-center mt-4"
                href="mailto:faisalbukhari111@gmail.com"
              >
                <p>faisalbukhari111@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
