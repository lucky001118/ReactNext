import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-400 font-bold text-xl"
        >
          ReactNext
        </motion.div>

        {/* Center: Menu (Desktop) */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex space-x-6 text-sm uppercase font-semibold">
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/">Home</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/javaScript">JavaScript</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/react">React</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/mySql">MySQL</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/firebase">FireBase</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/next">Next</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/git">Git</Link></motion.li>
          </ul>
        </div>

        {/* Right: Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 text-2xl">
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center bg-gray-800 py-6 space-y-4 text-sm md:hidden"
        >
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/javascript" onClick={toggleMenu}>JavaScript</a></li>
          <li><a href="/react" onClick={toggleMenu}>React</a></li>
          <li><a href="/mysql" onClick={toggleMenu}>MySQL</a></li>
          <li><a href="/firebase" onClick={toggleMenu}>FireBase</a></li>
          <li><a href="/next" onClick={toggleMenu}>Next</a></li>
          <li><a href="/git" onClick={toggleMenu}>Git</a></li>
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
