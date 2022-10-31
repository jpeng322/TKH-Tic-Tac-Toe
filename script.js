// Tic Tac Toe game
//Two players - connect the 3 different things to win
//Have a class with player that can click and put a mark
// The player will have parameters- a mark
//clicking within the BOX field will cause a counter to increase by 1
//if counter is odd then player 1 goes, if the counter if 2 then player to goes
//each spot on the 3x3 board will have a value, the value will then be the index of the array for the board

//player one inputs 1, player 2 inputs value 2, loop through arrays and add and see if it equals to 3 or 6
//if 3, the  player 1 won, if 6 then player 2 won
let counter = 0



let playingField = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];

// console.log(playingField)
class Player {
    constructor(name) {
        this.name = name;
        this.mark = '';
        this.turn = false;
        this.hasWon = false;
    }

    //updates playingField array with value associated with player
    updateField(e) {
        const boxVal = e.target.value
        const playerOneTurn = counter % 2 === 0
        if (boxVal === "0") {
            if (playerOneTurn) {
                firstRow[0] = 1;
            } else {
                firstRow[0] = 10;
            }
        }
        if (boxVal === "1") {
            if (playerOneTurn) {
                firstRow[1] = 1;
            } else {
                firstRow[1] = 10;
            }
        }
        if (boxVal === "2") {
            if (playerOneTurn) {
                firstRow[2] = 1;
            } else {
                firstRow[2] = 10;
            }
        }
        if (boxVal === "3") {
            if (playerOneTurn) {
                secRow[0] = 1;
            } else {
                secRow[0] = 10;
            }
        }
        if (boxVal === "4") {
            if (playerOneTurn) {
                secRow[1] = 1;
            } else {
                secRow[1] = 10;
            }
        }
        if (boxVal === "5") {
            if (playerOneTurn) {
                secRow[2] = 1;
            } else {
                secRow[2] = 10;
            }
        }
        if (boxVal === "6") {
            if (playerOneTurn) {
                thirdRow[0] = 1;
            } else {
                thirdRow[0] = 10;
            }
        }
        if (boxVal === "7") {
            if (playerOneTurn) {
                thirdRow[1] = 1;
            } else {
                thirdRow[1] = 10;
            }
        }
        if (boxVal === "8") {
            if (playerOneTurn) {
                thirdRow[2] = 1;
            } else {
                thirdRow[2] = 10;
            }
        }
    }

    pickMarker() {
        const buttons = document.querySelectorAll(".button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                // console.log('haha')
                if (this.mark === '' && buttons[i].disabled !== true) {
                    this.mark = buttons[i].innerHTML;
                    const selBtnArray = buttons[i].className.split(' ')
                    const buttonClass = `${selBtnArray[0]} ${selBtnArray[1]}`
                    const leftButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.left`)
                    const rightButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.right`)
                    leftButton.disabled = true;
                    rightButton.disabled = true;
                    const selectedOptions = [leftButton, rightButton]
                    selectedOptions.forEach(option => {
                        if (option.className === buttons[i].className) { option.style.border = "2px solid grey"; }
                    })
                    const selectedSideBtns = document.querySelectorAll(`.button.${selBtnArray[2]}`)
                    selectedSideBtns.forEach(button => {
                        if (button.className !== buttons[i].className) {
                            button.disabled = true;
                        }
                    })
                }
                // console.log(buttons[i].innerHTML)
            })
        }
    }

    //adds a mark to the selected box
    marker(e) {
        counter += 1;
        e.target.innerHTML = this.mark;

    }

    whosTurn() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("click", e => {
                if (this.turn) {
                    // console.log("clickturntrue")
                    // console.log(e.target.innerHTML === "")
                    if (e.target.innerHTML === "") {
                        console.log(e.target.innerHTML)
                        this.updateField(e);
                        this.marker(e);
                        this.turn = !this.turn;
                        checkWinner();
                        endOfGame();
                        // // console.log(e)
                        // console.log(e.target.innerHTML)
                        // console.log(`${this.name}, ${this.turn} ${counter}`)
                    }
                } else {
                    // console.log(takenAttr)
                    if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === 'false') {
                        this.turn = !this.turn;
                        document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("taken", true);
                    } else {
                        this.turn = this.turn;
                    }
                    // console.log(`${this.name}, ${this.turn} ${counter}`)
                }
                // console.log(counter)
            })
        }
    }
}

class theField {
    createField() {
        const container = document.querySelector(".container")

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.className = `box ${i}`;
            box.id = `box-${i}`
            box.value = `${i}`;
            // box.innerHTML = "<ion-icon class='circle' name='ellipse-outline'></ion-icon>";
            // box.innerHTML = "<ion-icon class='cross' name='close-outline'></ion-icon>"
            box.innerHTML = ""
            box.setAttribute('taken', false);
            container.appendChild(box);

        }
    }
    clearField() {
        for (let i = 0; i < 9; i++) {

        }
    }
}

const field = new theField;
field.createField();
const firstRow = playingField[0]
const secRow = playingField[1]
const thirdRow = playingField[2]
const player1 = new Player("Jacky");
const player2 = new Player("Mei");
player1.turn = true;
player1.pickMarker();
player2.pickMarker();
player1.whosTurn();
player2.whosTurn();


function checkHorizWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[i][j];
        }
        if (sum === 3) {
            // console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
            player2.hasWon = true;
        }
    };
}

function checkVertWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[j][i];
        }
        if (sum === 3) {
            // console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
            player2.hasWon = true;
        }
    }
}

function checkDiagWin() {
    if (firstRow[0] + secRow[1] + thirdRow[2] === 3) {
        // console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[0] + secRow[1] + thirdRow[2] === 30) {
        // console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 3) {
        // console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 30) {
        // console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
}

function checkTie() {
    if (counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        // console.log("It is a tie!");
    }
}


function checkWinner() {
    checkHorizWin();
    checkVertWin();
    checkDiagWin();
    checkTie();
    // console.log('checked');
    // console.log(player1.hasWon)
    // console.log(player2.hasWon)
}

playerOneHead = document.querySelector(".player1");
playerOneHead.textContent = player1.name.toUpperCase()
playerTwoHead = document.querySelector(".player2");
playerTwoHead.textContent = player2.name.toUpperCase()

// playGame()
const gamebutton = document.querySelector(".gamebtn")
gamebutton.addEventListener("click", clearField1)

function endOfGame() {
    if (player1.hasWon === true || player2.hasWon === true || counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        // console.log("end game")
        gamebutton.textContent = "Play Again"
    }
}
function clearField1() {
    const fieldBoxes = document.querySelectorAll(".box")
    // fieldBoxes.forEach(box => {
    //     box.setAttribute("taken", false);
    //     box.removeChild(box.querySelector("ion-icon"));
    //     box.innerHTML = "";
    // })
    for (let i = 0; i < 9; i++) {
        fieldBoxes[i].setAttribute("taken", false);
        if (fieldBoxes[i].childNodes.length > 0) {
            fieldBoxes[i].removeChild(fieldBoxes[i].querySelector("ion-icon"));
            fieldBoxes[i].innerHTML = "";
        }
    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false;
        button.style.border = "none";
        // button.style.backgroundColor = "#081b29";
        // button.style.
        // button.addEventListener('mo')
        // button.style.hover
    })
    // field.createField();
    player1.turn = true;
    player2.turn = false;
    player1.mark = '';
    player2.mark = '';
    player1.pickMarker();
    player2.pickMarker();
    player1.whosTurn();
    player2.whosTurn();
    // reload()
}

const buttons = document.querySelectorAll('button')
const numbers = [1, 2, 3, 4]
