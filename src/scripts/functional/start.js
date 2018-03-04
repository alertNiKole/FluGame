function startGameNow() {
    
    //Start msg
    startGame = document.querySelector("#start"); //change to listener if needed
    startMsg = document.querySelector("#welcome");
    startButton = startGame.addEventListener("click", () => {
          //print msg to player [instructions]
          startMsg.innerHTML= "Flu Season has begun!! <br>Remember to wash your hands, cover your mouth when you cough and use disinfectant to prevent the spread of germs.   <br> <strong> How are you feeling today?</strong>";
  
          // get days in flu season
          daysInFluSeason;
  
          //Print total days in season to console
          fluSeasonEndMsg = console.log("There are ", daysInFluSeason, " days in this flu season.");
  
          //reveal gameplay buttons
          gameplay.hidden = false;
          gameplay.focus(gameplay);  //position on button
  
          //Change Start Button Words
      });
     
    };

startGameNow();

export function startGameNow();