import React from "react";
import projects from "../../js/projects";
import { Link } from "react-router-dom";
import styles from "./ProjectsContainer.module.css";

const ProjectsContainer = () => {
   return (
      <div>
         <h3>PROJECTS BY CRISTIAN SANCHEZ</h3>
         <div className={styles.container}>
            {projects.map((p, i) => {
               return (
                  <div className={styles.project} key={i}>
                     <img src={p.img} alt="Drum Set" className={styles.image} />
                     <h4>{p.title}</h4>
                     <Link to={p.path}>Go To Project</Link>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default ProjectsContainer;
