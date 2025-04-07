import React from "react";
import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const navItems = ["Home", "JavaScript", "React", "MySQL", "FireBase", "Next", "Git"];

const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-blue-900 text-white px-6 py-4 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Center menu */}
        <ul className="flex-1 flex justify-center gap-6 text-sm md:text-base">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#FACC15" }}
              className="cursor-pointer transition"
            >
                <a href="#"></a>
              {/* <a href={`/${item.toLowerCase()}`}>{item}</a> */}
            </motion.li>
          ))}
        </ul>

        {/* Right logo */}
        <motion.div
          className="text-xl font-bold ml-4 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          ReactNext
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
