/* Catching the Flu Game */

//Identify Variables

let startGame = "";
let startMsg = "";
let startButton ="";
let gameplay =  document.querySelector("#gameplay");
let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
});
let daysInFluSeason = rng(13);
let fluSeasonEnd = "";
let fluSeasonMsg = "";
let health = "";
let cough ="";

let dayCount = 0; //count of coughs (times button has been pressed)
let dayCounter = 1;
let pSeasonScore = 00;
let totalPlayerSeasonScore = 00;   
let scoreBox = document.querySelector("#scoreBox");
let pCurrentScore = document.querySelector("#playerCurrentText");
let firstDayTotal =  parseInt(pCurrentScore.innerHTML);
let pTotalScore = document.querySelector("#playerTotalText");
let totalDaysScore =  parseInt(pTotalScore.innerHTML);

let roll = parseInt(pCurrentScore.innerHTML);
let rolled = 0;
let temp = 0;
let stored = 0;
let total = 0


///////////////////////////////////////////////////////////////////////
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
   

//How Many Times Have You Coughed Today (on click)?

//players coughs
 
scoreBox = document.querySelector("#scoreBox");
health = document.querySelector("#health"); 


/* 
let pSeasonScore = 00;
let totalPlayerSeasonScore = 00;   
let scoreBox = document.querySelector("#scoreBox");
let pCurrentScore = document.querySelector("#playerCurrentText");
let firstDayTotal =  parseInt(pCurrentScore.innerHTML); 
let pTotalScore = document.querySelector("#playerTotalText");
let totalDaysScore =  parseInt(pTotalScore.innerHTML);

*/

cough = health.addEventListener("click", () => {
    //Button press msg [delete]
    console.log("The health button has been pressed");
    //update cough count
   dayCount ++;

    //
    console.log("The button has been pressed ", dayCount, "times.");
    if (dayCount < daysInFluSeason) {
        //validate
        console.log("There are more days in this Flu Season");
        //rng # of coughs today
        pCurrentScore.innerHTML = rng(7);
        //document # of coughs today
        console.log(pCurrentScore.innerText, " is the current # of coughs");
        // you're not sick yet
        console.log("You do not have the flu, check on your cough tomorrow");
            //start 2nd logic stream, on the first day do this:
            if ( dayCount === 1 ) {

                console.log("dayCounter Day 1", dayCounter);
                //create integer storage
                let roll = parseInt(pCurrentScore.innerHTML);
                //pass roll to the first day sum
                firstDayTotal = roll;
                //firstDay + current = totalDays
                totalDaysScore = totalDaysScore + firstDayTotal;
                //update display
                pTotalScore.innerHTML = totalDaysScore;
                //log results
                console.log("This is day:", dayCount, "and the firstDayTotal is: ", firstDayTotal, "the roll was", roll);
                console.log("totalDaysScore is ", totalDaysScore);

               rolled = firstDayTotal; //??
               storage = firstDayTotal;

                console.log("Roll Again, stored value is ", storage)
                    } else if (dayCount !== 1 && dayCount <=  daysInFluSeason) {
                        //start third logical stream

                        console.log("start third logical stream is going,begin DO WHILE");
                        console.log("FirstDayTotal was:", firstDayTotal);
        } else console.log("game over.")
    } else console.log("You have made it to the end of Flu Season!");
});

