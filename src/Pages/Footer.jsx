import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-950 text-white py-8 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Text */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold">ReactNext Bootcamp 2025</h4>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved by Lucky Manikpur
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white text-2xl">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/lucky001118"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Github />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.instagram.com/lucky_manikpuri_18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <Instagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 3 }}
            href="https://linkedin.com/in/your_linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Linkedin />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
