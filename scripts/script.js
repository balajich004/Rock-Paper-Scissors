let humanScore=0,computerScore=0;
const wrapper=document.querySelector(".rps-wrapper");
const playerRock=document.querySelector(".rock");
const playerPaper=document.querySelector(".paper");
const playerScissors=document.querySelector(".scissors");

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

const result=document.querySelector(".result");
let computerSelection=getComputerChoice();
playerRock.addEventListener("click",()=>{
    playRound("rock",computerSelection);
});
playerPaper.addEventListener("click",()=>{playRound("paper",computerSelection)});
playerScissors.addEventListener("click",()=>{playRound("scissors",computerSelection)});
const replay=document.querySelector(".replay");
replay.addEventListener("click",()=>{
    wrapper.innerHTML=`<button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>
    <button class="paper common"><img src="./images/paper-img.png" alt="paper-img"></button>
    <button class="scissors common"><img src="./images/scissors-img.png" alt="scissors-img"></button>`;
    result.innerHTML="";
    const playerRock=document.querySelector(".rock");
    const playerPaper=document.querySelector(".paper");
    const playerScissors=document.querySelector(".scissors");
    playerRock.addEventListener("click",()=>{
        playRound("rock",computerSelection);
    });
    playerPaper.addEventListener("click",()=>{playRound("paper",computerSelection)});
    playerScissors.addEventListener("click",()=>{playRound("scissors",computerSelection)});
});