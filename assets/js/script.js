//Wait for the DOM To finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
                console.log
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }

        })


    }

    runGame("addition")

})


/**
 * The main game "loop" is called after the script is loaded
 * and after the users answer has been processed
 */


function runGame(gameType) {
    //creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }

}


function checkAnswer() {

}

/**
 * Gets the operands and the operator
 * from the DOM, and trurn the correct answer. 
 */

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innertext);
    let operand2 = parseInt(document.getElementById('opernand2').innerText)
    let operator = parseInt(document.getElementById('operator').innerText)

    if(operator === '+') {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!; 
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}