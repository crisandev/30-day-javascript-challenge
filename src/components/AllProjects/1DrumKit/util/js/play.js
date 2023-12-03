export const playSound =  (e) => {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
   console.log(e.key);
   if(!audio) return;
   audio.currentTime = 0;
   audio.play();
};
