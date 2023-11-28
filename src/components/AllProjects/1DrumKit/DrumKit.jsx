import React from "react";
import styles from "./DrumKit.module.css";
import { characterKey } from "./util/js/consts";

const DrumKit = () => {
   return (
      <>
         <div className={styles.keys}>
            {characterKey.map((c, i) => {
               return (
                  <div key={i} data-key={c.key} className={styles.key}>
                     <kbd>{c.letter}</kbd>
                     <span className={styles.sound}>{c.text}</span>
                  </div>
               );
            })}
         </div>
         <div>
            {characterKey.map((c) => {
               return <audio data-key={c.key} src={`./util/sounds/${c.sound}`}></audio>;
            })}
            {/* <audio data-key="" src="./util/sounds/clap.wav"></audio>
            <audio data-key="" src="./util/sounds/cowbell.wav"></audio>
            <audio data-key="" src="./util/sounds/eggshaker.wav"></audio>
            <audio data-key="" src="./util/sounds/hihat.wav"></audio>
            <audio data-key="" src="./util/sounds/kick.wav"></audio>
            <audio data-key="" src="./util/sounds/snare.wav"></audio>
            <audio data-key="" src="./util/sounds/stickhits.wav"></audio>
            <audio data-key="" src="./util/sounds/tom.wav"></audio> */}
         </div>
      </>
   );
};

export default DrumKit;
