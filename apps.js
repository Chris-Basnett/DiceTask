const dice = document.getElementById("diceBlock")
const player1Button = document.getElementById("player1Button")
const player2Button = document.getElementById("player2Button")
const startOver = document.getElementById("startOver")
const p1Roll = document.getElementById("p1Roll")
const p2Roll = document.getElementById("p2Roll")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const gameBlock = document.getElementById("gameBlock")
const score1 = document.getElementById("score1")
const score2 = document.getElementById("score2")
const p1Wins = document.getElementById("p1Wins")
const p2Wins = document.getElementById("p2wins")
const rollCount1 = document.getElementById("rollCount1")
const rollCount2 = document.getElementById("rollCount2")

function winCheck1() {
    if (parseInt(score1.textContent) >= 20) {
        score1.textContent = "You won!"
        p1Wins.textContent = (parseInt(p1Wins.textContent) + 1)
        p1Roll.textContent = "New Game"
        p2Roll.textContent = "New Game"
    }
}
function winCheck2() {
    if (parseInt(score2.textContent) >= 20) {
        score2.textContent = "You won!"
        p2Wins.textContent = (parseInt(p2Wins.textContent) + 1)
        p1Roll.textContent = "New Game"
        p2Roll.textContent = "New Game"
    }
}
function gamereset() {
    if ((score1.textContent === "You Won!") || (score2.textContent === "You won!")) {
        score1.textContent = "0"
        rollCount1.textContent = "0"
        score2.textContent = "0"
        rollCount2.textContent = "0"
    } else {
        return
    }
}
function singlePlayer() {
    if (player2.style.display === "none") {
        return
    } else {
        rollCount1.style.display = "none"
        rollCount2.style.display = "block"
    }
}
player1Button.addEventListener("click", () => {
    gameBlock.style.display = "flex"
    player2.style.display = "none"
    player1Button.style.display = "none"
    player2Button.style.display = "none"
    startOver.style.display = "block"
})
player2Button.addEventListener("click", () => {
    gameBlock.style.display = "flex"
    player1Button.style.display = "none"
    player2Button.style.display = "none"
    startOver.style.display = "block"
    p2Roll.style.display = "none"
})
startOver.addEventListener("click", () => {
    gameBlock.style.display = "none"
    player2.style.display = "block"
    player1Button.style.display = "block"
    player2Button.style.display = "block"
    startOver.style.display = "none"
    p1Roll.style.display = "block"
    score1.textContent = "0"
    score2.textContent = "0"
    p1Wins.textContent = "0"
    p2Wins.textContent = "0"
    rollCount1.textContent = "0"
    rollCount2.textContent = "0"
})
p1Roll.addEventListener("click", () => {
    p1Roll.textContent = "Roll!"
    p2Roll.textContent = "Roll!"
    gamereset()
    singlePlayer()
    rollCount1.textContent = (parseInt(rollCount1.textContent) + 1)
    let num = Math.ceil(Math.random() * 6)
        if (num === 1) {
            dice.src ="dice1.png"
            score1.textContent = 0
            winCheck1()
        }
        else if (num === 2) {
            dice.src ="dice2.png"
            score1.textContent = (parseInt(score1.textContent) + 2)
            winCheck1()
        }
        else if (num === 3) {
            dice.src ="dice3.png"
            score1.textContent = (parseInt(score1.textContent) + 3)
            winCheck1()
        }
        else if (num === 4) {
            dice.src ="dice4.png"
            score1.textContent = (parseInt(score1.textContent) + 4)
            winCheck1()
        }
        else if (num === 5) {
            dice.src ="dice5.png"
            score1.textContent = (parseInt(score1.textContent) + 5)
            winCheck1()
        }
        else if (num === 6) {
            dice.src ="dice6.png"
            score1.textContent = (parseInt(score1.textContent) + 6)
            winCheck1
        }
})
p2Roll.addEventListener("click", () => {
    p1Roll.textContent = "Roll!"
    p2Roll.textContent = "Roll!"
    gamereset()
    p2Roll.style.display = "none"
    p1Roll.style.display = "block"
    rollCount2.textContent = (parseInt(rollCount2.textContent) + 1)
    let num = Math.ceil(Math.random() * 6)
        if (num === 1) {
            dice.src ="dice1.png"
            score2.textContent = 0
            winCheck1()
        }
        else if (num === 2) {
            dice.src ="dice2.png"
            score2.textContent = (parseInt(score2.textContent) + 2)
            winCheck1()
        }
        else if (num === 3) {
            dice.src ="dice3.png"
            score2.textContent = (parseInt(score2.textContent) + 3)
            winCheck1()
        }
        else if (num === 4) {
            dice.src ="dice4.png"
            score2.textContent = (parseInt(score2.textContent) + 4)
            winCheck1()
        }
        else if (num === 5) {
            dice.src ="dice5.png"
            score2.textContent = (parseInt(score2.textContent) + 5)
            winCheck1()
        }
        else if (num === 6) {
            dice.src ="dice6.png"
            score2.textContent = (parseInt(score2.textContent) + 6)
            winCheck1
        }
})