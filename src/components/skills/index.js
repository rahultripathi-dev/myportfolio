import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'React Navigation', 'Jest', 'Git'];

  return (
    <section id="skills" className={styles.skills}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className={styles.skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
