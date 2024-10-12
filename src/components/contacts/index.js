import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <p className={styles.contactDescription}>
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className={styles.contactLinks}>
        <a href="mailto:your.email@example.com" className={styles.emailButton}>
          Email Me
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
