let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock = "rock";
paper = "paper";
scissors = "scissors"


function playRound(){

    computerPlay();
}

let compSelect = function computerPlay(){
   
    const randomArray = ["rock" , " paper" ," scissors"];
    console.log (randomArray[(Math.random() * 3)]);
}















/*

let user = prompt("enter selection").toLowerCase();
if(user != "paper" && user != "rock" && user != "scissors" ){

    alert("enter: rock, paper or scissors")
}
else{

   playRound();
}
let computerSelection = function computerPlay(){

    const randomArray = ["rock" , " paper" ," scissors"];
    console.log (randomArray[(Math.random() * 3)]);
}

function playRound(user, computerSelection) { 
    if (user === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    } else if (user === "paper") {
        if (computerSelection === "rock") {
            return "User wins!";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!";
        }
    } else {
        if (computerSelection === "rock") {
            return "Computer wins!";
        } else if (computerSelection === "paper") {
            return "User wins!";
        } else {
            return "Draw!";
        }
    }
}
        
console.log(playRound(user, computerSelection));


*/

