import React from "react";
import styles from "./DrumKit.module.css";
import { characterKey } from "./util/js/consts";
import { playSound } from "./util/js/play";

const DrumKit = () => {
   return (
      <>
         <div className={styles.keys}>
            {characterKey.map((c, i) => {
               return (
                  <div key={i} data-key={c.key} className={styles.key}>
                     <kbd>{c.letter}</kbd>
                     <br />
                     <span className={styles.sound}>{c.text}</span>
                  </div>
               );
            })}
         </div>
         <div>
            {characterKey.map((c, i) => {
               return <audio onKeyDown={window.addEventListener("keydown", playSound)} key={i} data-key={c.key} src={`./util/sounds/${c.sound}`}></audio>;
            })}
         </div>
         <script src="./util/js/play.js"></script>
      </>
   );
};

export default DrumKit;
