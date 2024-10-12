import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>About Me</h2>
      <p className={styles.aboutDescription}>
        I'm a passionate React Native developer with 2 years of experience building 
        cross-platform mobile applications. I love creating intuitive and efficient 
        user interfaces that provide great user experiences.
      </p>
    </section>
  );
};

export default About;
