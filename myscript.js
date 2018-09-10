var playerScore = 0;
var computerScore = 0;
var output = '';

function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }else if(choice == 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    let player = playerSelection.toLowerCase();
    if(player == "rock"){
        if(computerSelection == "rock"){
            return "You Tie!";
        }else if(computerSelection == "paper"){
            computerScore++;
            return "You Lose! Paper beats Rock";
        }else{
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    }else if(player == "paper"){
        if(computerSelection == "rock"){
            playerScore++;
            return "You Win! Paper beats Rock";
        }else if(computerSelection == "paper"){
            return "You Tie!";
        }else{
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    }else{
        if(computerSelection == "rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }else if(computerSelection == "paper"){
            playerScore++;
            return "You Win! Scissors beats Paper";
        }else{
            return "You Tie!";
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        output = playRound(button.id);
        log.textContent = output;
        player.textContent = "Player Score: " + playerScore.toString();
        computer.textContent = "Computer Score: " + computerScore.toString();
    });
});

const results = document.querySelector('#results');

log = document.createElement('p');
player = document.createElement('p');
computer = document.createElement('p');
log.textContent = output;
player.textContent = "Player Score: " + playerScore.toString();
computer.textContent = "Computer Score: " + computerScore.toString();
results.appendChild(player);
results.appendChild(computer);
results.appendChild(log);
