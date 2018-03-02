//Identify Variables

let startGame = "";
let startMsg = "";
let startButton ="";
let gameplay =  document.querySelector("#gameplay");
let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
});
let daysInFluSeason = rng(31);
let fluSeasonEnd = "";
let fluSeasonMsg = "";
let health = "";
let cough ="";

let dayCount = 0; //count of coughs (times button has been pressed)

let pSeasonScore = 00;
let totalPlayerSeasonScore = 00;   
let scoreBox = document.querySelector("#scoreBox");
let pCurrentScore = document.querySelector("#playerCurrentText");

let roll = parseInt
(pCurrentScore.innerHTML);

let firstDayTotal =  parseInt(pCurrentScore.innerHTML);

let pTotalScore = document.querySelector("#playerTotalText"); //web display

let totalDaysScore =  parseInt(pTotalScore.innerHTML); //[post web]

let nextDayRoll = "'";

let stored = parseInt(playerTotalText.innerHTML);


