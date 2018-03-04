let gameplay = document.querySelector("#gameplay");
let health = document.querySelector("#health");
let current = document.querySelector("#playerCurrentText");
let total = document.querySelector("#playerTotalText");
let statusText = document.querySelector("#playerStatusText");
let statusMsg = document.querySelector("#statusMsg");
let parsedTotal = parseInt(total);


let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}); //used numerous times

let startGame = "";
let daysInFluSeason = 0;
let fluSeasonStatusMsg = "";

let fluBug = rng(100);   //Magic Flu Bug Number
let dayCount = ""; //Count of times button has been pressed [gameplays]
let cough = 0; // total number of coughs for this 1-25 roll
let totalCoughs = 0;// total number of coughs [sum]



// Start Game

function startGameNow() {//Start Button Click Function
    //Start msg
    let startGame = document.querySelector("#start"); //change to listener if needed
    let startMsg = document.querySelector("#welcome");
    let startButton = startGame.addEventListener("click", () => {
          //print msg to player [instructions]
          startMsg.innerHTML= "Flu Season has begun!! <br>Remember to wash your hands, cover your mouth when you cough and use disinfectant to prevent the spread of germs.   <br> <strong> How are you feeling today?</strong>";
  
          // get days in flu season
          daysInFluSeason = rng(31);
            //Print total days in season to console
          fluSeasonStatusMsg = console.log("Flu season has begun. There are: ", daysInFluSeason, " days in this season.  Will you make it?")

         //post FluSeason
          console.log("You are entering flu season, you will catch the flu after ", fluBug, "coughs [fluBug]");
  
          //reveal gameplay buttons
          gameplay.hidden = false;
          gameplay.focus(gameplay);  //position on button
  
          //Change Start Button Words
         startGame.innerHTML = "Its Flu Season";
         startGame.style.fontSize = "1.1em";
         startGame.style.marginLeft = "1em";         startGame.style.backgroundColor = "#441bacb0";
         startGame.style.opacity = ".3";
         startGame.className += ' ' + "heart";
      });
     
    };

startGameNow();

fluBug;

function countCoughs() {
//  Check Up Button, begin to count coughs
 //listener
let checkUp =  health.addEventListener("click", () => {
//Roll/Count/Date
    //Start msg
        console.log("countCoughs function has run");

    //update Days ++
       dayCount++;
       console.log("This is day ",dayCount,"of the flu season");

    //Magic Flu Bug Number
        cough = rng(25); 
        totalCoughs  += cough;
        console.log("You have coughed: ", cough, "your total amount of coughs is: ", totalCoughs);

     //Update Current
        current.textContent = cough;
        console.log("current: ", current.textContent);

    //Update Total
        total.textContent = totalCoughs;
        console.log("total: ", total.textContent);
        if (total.textContent < 99) {
            console.log("only 2 digits here");
        } else {
            total.style.marginLeft = "20%"
            console.log("Get that cough under control please");
        }
        let parsedTotal = parseInt(total);


  
        //Tally Win and update Status

        //Test Win criteria -- dayCounter = DaysinFluSeason and total less than flu bug


if (dayCount >= daysInFluSeason && parsedTotal<= fluBug) {
    console.log("You won!");
    statusText.innerHTML = "WINNER";
    statusText.style.color = "#00ff99";
    alert("OMG you made it to the end of Flu Season, you're as healthy as an Ox. <br> Please refresh the page to play again.")
       //Test immunity  - win by superBug (equal to zero FluBugs spread or  cough a zero.
    }else if (fluBug == 0 || parseInt(current.innerHTML) === 0) {
            console.log("You've Been Granted Immunity for the season");
            statusMsg.hidden = false;
            statusMsg.innerHTML = "You've Been Granted Immunity for the season!";
            statusText.style.marginTop = "1.2em"; 
            statusText.innerHTML = "YOU\'RE IMMUNE!";  
            console.log("You're IMMUNE");
            alert("You've obtained IMMUNITY - check back with us next season!!! Please refresh the page to play again!")

    //if you lose by catching the FluBug [total = FluBug Magic]
    }  else if  (parseInt(total.innerHTML) == fluBug ) {
        console.log("Whoa, you caught a superBug - get to the Doc quick!");
        statusText.style.marginTop = "1.2em";
        statusText.style.color= "red";
        statusText.innerHTML = "YOU\'RE SICK!";  
        console.log("You're Sick - GAME OVER");
        statusMsg.hidden = false;
       alert("You're Sick - GAME OVER!!! Please refresh the page to play again.");

    //Lose score  = higher than fluBug #
      } else if (parseInt(total.innerHTML) > fluBug ) {
               //lossMsg
            console.log("You coughed up a lung, better luck next season. YOU LOSE.");
            statusText.style.marginTop = "1.2em";
            statusText.style.color = "red";
            statusText.innerHTML = "YOU\'RE SICK!";  
            console.log("You're Sick - GAME OVER");
            statusMsg.hidden = false;
            alert("You're Sick - GAME OVER!!!  Please refresh the page to play again.");
   

        } else {
        statusMsg.innerHtML = "You're healthy, good luck, you might just make it!";
        statusText.innerHTML = "Healthy";  
        statusText.style.marginTop = "1.5em"; 
       console.log("Check your cough tomorrow  [Press the check up button]");
        };
    

    checkUp;


});
};

countCoughs();


