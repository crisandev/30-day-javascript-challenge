import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

const Main = () => {
   const [currentDate, setCurrentDate] = useState("");

   useEffect(() => {
      function updateDate() {
         const currentDateObj = new Date();
         const hour = currentDateObj.getHours();
         const minutes = currentDateObj.getMinutes();

         const formattedDate = `${hour}: ${minutes > 10 ? minutes : "0" + minutes}`;

         setCurrentDate(formattedDate);
      }
      updateDate();
      const intervalId = setInterval(updateDate, 1000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className={styles.mainContainer}>
         <div></div>
         <div className={styles.text}>
            <p className={styles.time}>{currentDate}</p>
            <h1>30</h1>
            <h2>
               Days <br /> Javascript
            </h2>
         </div>
      </div>
   );
};

export default Main;
