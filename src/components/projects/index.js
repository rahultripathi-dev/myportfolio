import React from 'react';
import styles from './Projects.module.css'; // Import the CSS module

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'A full-featured e-commerce app built with React Native and Redux.',
      techStack: ['React Native', 'Redux', 'React Navigation']
    },
    {
      title: 'Weather App',
      description: 'A weather app that provides real-time weather information using geolocation.',
      techStack: ['React Native', 'OpenWeatherMap API', 'Geolocation']
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStackContainer}>
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
