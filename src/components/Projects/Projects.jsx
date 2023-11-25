import React from "react";
import styles from "./Projects.module.css";
import ProjectsContainer from "./../ProjectsContainer/ProjectsContainer";

const Projects = () => {
   return (
      <div className={styles.container}>
            <h2>Projects</h2>
            <ProjectsContainer />
      </div>
   );
};

export default Projects;
