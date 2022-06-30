const DisplayComputer = document.getElementById('Computer')
const DisplayPlayer = document.getElementById('Player')
const DisplayResult = document.getElementById('Result')

const Choices = document.querySelectorAll('button') 

let userChoice
let computerChoice
Choices.forEach(Choices => Choices.addEventListener('click', (e) => { 
    userChoice = e.target.id 
    DisplayPlayer.innerHTML = userChoice
    ComputerChoiceRandomizer()
    battleresult()
    }))

function ComputerChoiceRandomizer(){
    const Random = Math.floor(Math.random() * Choices.length) + 1 
    
    switch(Random){
        case 1: computerChoice = 'Rock'
                break;
        case 2: computerChoice = 'Scissors'
                break;
        case 3: computerChoice = 'Paper'
                break;
    }
    DisplayComputer.innerHTML = computerChoice
}

function battleresult(){
    if(computerChoice === userChoice){
        result = 'Draw'
    }
    else if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'Computer won'
    }
    else if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You won'
    }
    else if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You won'
    }
    else if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'Computer won'
    }
    else if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You won'
    }
    else if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'Computer won'
    }
    DisplayResult.innerHTML = result
}

