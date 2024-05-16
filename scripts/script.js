let humanScore=0,computerScore=0;

function getComputerChoice(){
    let computerChoice;
    let computerChoiceNumber=Math.random();
    if(computerChoiceNumber>0 && computerChoiceNumber<1/3)
        computerChoice="rock";
    else if(computerChoiceNumber>1/3 && computerChoiceNumber<2/3)
        computerChoice="paper";
    else
        computerChoice="scissors";
    return computerChoice;
}

// function getHumanChoice(){
//     let HumanChoice;
//     HumanChoice=prompt("Enter your choice:");
//     return HumanChoice;
// }
const result=document.querySelector(".result");
// let humanSelection=getHumanChoice();
let computerSelection=getComputerChoice();

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice)
        result.innerHTML=`It's a tie!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`;
    else if((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")){
        result.innerHTML=`You win!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`;
    }
    else if((humanChoice=="scissors" && computerChoice=="rock") || (humanChoice=="paper" && computerChoice=="scissors") || (humanChoice=="rock" && computerChoice=="paper")){
    result.innerHTML=`You lose!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`;
    }
    else
    result.innerHTML=`invalid choice 😾`;
}

const playerRock=document.querySelector(".rock");
const playerPaper=document.querySelector(".paper");
const playerScissors=document.querySelector(".scissors");
playerRock.addEventListener("click",()=>{
    getComputerChoice();
    playRound("rock",computerSelection);
});
playerPaper.addEventListener("click",()=>{playRound("paper",computerSelection)});
playerScissors.addEventListener("click",()=>{playRound("scissors",computerSelection)});