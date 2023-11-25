import React from "react";
import styles from "./StarAnimation.module.css";
const StarAnimation = () => {
   return (
      <div>
         <div id={styles.stars}></div>
         <div id={styles.stars2}></div>
         <div id={styles.stars3} style={{ margin: "-5px" }}></div>
      </div>
   );
};

export default StarAnimation;
