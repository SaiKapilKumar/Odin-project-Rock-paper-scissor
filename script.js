function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors', 'rocks', 'papers', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 6);
    return choices[randomNumber];
}

function playerSelection(){
    let playerSelection = prompt('Enter your choice: ');
    return playerSelection.toLowerCase().trim();
}

function roundofRockPaperScissor(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log('It\'s a Tie');
        return 'Tie';
    } else if(playerSelection === 'rock'|| playerSelection === 'rocks'){
        if(computerSelection === 'paper'|| computerSelection === 'papers'){
            console.log('You Lose! Paper beats Rock');
            return 'You Lose! Paper beats Rock';
        } else {
            console.log('You Win! Rock beats Scissors');
            return 'You Win! Rock beats Scissors';
        }
    } else if(playerSelection === 'paper'|| playerSelection === 'papers'){
        if(computerSelection === 'scissors'|| computerSelection === 'scissor'){
            console.log('You Lose! Scissors beats Paper');
            return 'You Lose! Scissors beats Paper';
        } else {
            console.log('You Win! Paper beats Rock');
            return 'You Win! Paper beats Rock';
        }
    } else if(playerSelection === 'scissors'|| playerSelection === 'scissor'){
        if(computerSelection === 'rock'|| computerSelection === 'rocks'){
            console.log('You Lose! Rock beats Scissors');
            return 'You Lose! Rock beats Scissors';
        } else {
            console.log('You Win! Scissors beats Paper');
            return 'You Win! Scissors beats Paper';
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let rounds = prompt('Enter number of rounds you want to play: ');
    while(round < rounds){
        let player = playerSelection();
        let computer = getComputerChoice();
        let result = roundofRockPaperScissor(player, computer);
        if(result.includes('Win')){
            playerScore++;
        } else if(result.includes('Lose')){
            computerScore++;
        }
        round++;
    }
    if(playerScore > computerScore){
        console.log('You Win!', playerScore, computerScore);
    } else if(playerScore < computerScore){
        console.log('You Lose!', playerScore, computerScore);
    } else {
        console.log('Tie!', playerScore, computerScore);
    }
}
