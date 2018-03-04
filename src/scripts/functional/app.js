//Catch the Flu Game - JS, CSS, HTML

//import files/scripts./modules


import { startGameNow} from "start";
//Define Variables
let startGameHere = startGameNow; //import function to start the game;
let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}); //used numerous times
let daysInFluSeason = rng(31)// 31 days of flu season possible

startGameHere;