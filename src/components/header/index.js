import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`${styles.header} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Name
        </motion.h1>
        <nav>
          <ul className={styles.navList}>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#about">About</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#skills">Skills</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#projects">Projects</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#contact">Contact</a></motion.li>
          </ul>
        </nav>
        <motion.button 
          className={styles.darkModeToggle}
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>
      </div>
    </header>
  );
};

export default Header;