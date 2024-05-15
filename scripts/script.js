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

function getHumanChoice(){
    let HumanChoice;
    HumanChoice=prompt("Enter your choice:");
    return HumanChoice;
}

let humanSelection=getHumanChoice(),computerSelection=getComputerChoice();

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice)
        console.log(`It's a tie!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`);
    else if((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")){
        console.log(`You win!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`);
        return "human";
    }
    else if((humanChoice=="scissors" && computerChoice=="rock") || (humanChoice=="paper" && computerChoice=="scissors") || (humanChoice=="rock" && computerChoice=="paper")){
    console.log(`You lose!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`);
    return "computer";
    }
    else
    console.log(`invalid choice 😾`);
}

// console.log(playRound(humanSelection,computerSelection));

function playGame(){

    for(let i=0;i<5;i++){
        humanSelection=getHumanChoice(),computerSelection=getComputerChoice();
        let dummy=playRound(humanSelection,computerSelection);
        if(dummy==="human")
        humanScore=humanScore+1;
        else if(dummy==="computer")
        computerScore=computerScore+1;
    console.log(`Score update :
                    Your score : ${humanScore}
                    Opponent score : ${computerScore}`);
    }
}

playGame();