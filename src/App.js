import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './App.module.css';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contacts';
import Header from './components/header';
import Projects from './components/projects';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.app} ${darkMode ? styles.darkMode : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.main 
        className={styles.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
};

export default App;