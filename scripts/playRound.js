function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        const wrapper=document.querySelector(".rps-wrapper");
        if(humanChoice==="rock")
        wrapper.innerHTML=`<button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>`;
        else if(humanChoice==="paper")
            wrapper.innerHTML=`<button class="paper common"><img src="./images/paper-img.png" alt="rock-img"></button>`;
        else if(humanChoice==="scissors")
            wrapper.innerHTML=`<button class="scissor common"><img src="./images/scissors-img.png" alt="rock-img"></button>`;
        result.innerHTML=`It's a tie!Your choice is ${humanChoice} and your opponents choice is also ${computerChoice}`;
    }
    else if((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")){
        if(humanChoice==="rock")
            wrapper.innerHTML=`<button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>
        <button class="scissor common"><img src="./images/scissors-img.png" alt="rock-img"></button>`;
        else if(humanChoice==="paper")
            wrapper.innerHTML=`<button class="paper common"><img src="./images/paper-img.png" alt="rock-img"></button>
        <button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>`;
        else if(humanChoice==="scissors")
            wrapper.innerHTML=`<button class="scissor common"><img src="./images/scissors-img.png" alt="rock-img"></button>
        <button class="paper common"><img src="./images/paper-img.png" alt="rock-img"></button>`;
        
        result.innerHTML=`You win!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`;
    }
    else if((humanChoice=="scissors" && computerChoice=="rock") || (humanChoice=="paper" && computerChoice=="scissors") || (humanChoice=="rock" && computerChoice=="paper")){
        if(humanChoice==="scissors")
            wrapper.innerHTML=`<button class="scissor common"><img src="./images/scissors-img.png" alt="rock-img"></button>
        <button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>`;
        else if (humanChoice==="paper")
            wrapper.innerHTML=`<button class="paper common"><img src="./images/paper-img.png" alt="rock-img"></button>
        <button class="scissor common"><img src="./images/scissors-img.png" alt="rock-img"></button>`;
        else if(humanChoice==="rock")
            wrapper.innerHTML=`<button class="rock common"><img src="./images/rock-img.png" alt="rock-img"></button>
        <button class="paper common"><img src="./images/paper-img.png" alt="rock-img"></button>`;
        result.innerHTML=`You lose!Your choice is ${humanChoice} and your opponents choice is ${computerChoice}`;
    }
    else
    result.innerHTML=`invalid choice 😾`;
}