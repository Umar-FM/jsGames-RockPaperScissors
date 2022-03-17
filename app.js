const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttonWrapper = document.getElementById('button-wrapper')
let userChoice
let computerChoice
let result

buttonWrapper.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
})

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3 + 1)
    if (randomNum === 1){
        computerChoice = 'rock'
    }
    if (randomNum === 2){
        computerChoice = 'paper'
    }
    if (randomNum === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "Draw"
    }
    else if (computerChoice === 'rock' && userChoice == 'paper'){
        result = "Winner!"
    }
    else if (computerChoice === 'paper' && userChoice == 'scissors'){
        result = "Winner!"
    }
    else if (computerChoice === 'scissors' && userChoice == 'rock'){
        result = "Winner!"
    }
    else{
        result = "Loser!"
    }
    resultDisplay.innerHTML = result
    if (result == "Winner!"){
        resultDisplay.style.color = "green"
    }
    else if (result == "Loser!"){
        resultDisplay.style.color = "red"
    }
    else{
        resultDisplay.style.color = "black"
    }
}