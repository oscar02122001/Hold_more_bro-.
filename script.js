'use strict';
const playerOneActive = document.querySelector('.player--0')
const playerTwoActive = document.querySelector('.player--1')
const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const currentOne = document.querySelector('#current--0')
const currentTwo = document.querySelector('#current--1')
const btnHold = document.querySelector('.btn--hold')
const scoreOne = document.querySelector('#score--0')
const scoreTwo = document.querySelector('#score--1')
const newGame = document.querySelector('.btn--new')
dice.style.display = 'none'

function stringToNum(elem) {
    return elem = Number(elem)
}

let randomImg = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']


btnRoll.addEventListener('click', function () {

    scoreOne.textContent && scoreTwo.textContent < 100 ? dice.style.display = 'block' : dice.style.display = 'none'

    let randomNumber = Math.floor(Math.random() * randomImg.length)
    let selectedImg = randomImg[randomNumber]

    dice.src = `./images/${selectedImg}`

    if (playerOneActive.classList.contains('player--active')) {
        currentOne.textContent = stringToNum(currentOne.textContent) + randomNumber + 1
        if (selectedImg === randomImg[0]) {
            currentOne.textContent = 0
            playerOneActive.classList.remove('player--active')
            playerTwoActive.classList.add('player--active')
        }
    } else if (playerTwoActive.classList.contains('player--active')) {
        currentTwo.textContent = stringToNum(currentTwo.textContent) + randomNumber + 1
        if (selectedImg === randomImg[0]) {
            currentTwo.textContent = 0
            playerTwoActive.classList.remove('player--active')
            playerOneActive.classList.add('player--active')
        }
    }

})

btnHold.addEventListener('click', function () {
    if (scoreOne.textContent < 100 && scoreTwo.textContent < 100) {
        playerOneActive.classList.toggle('player--active')
        playerTwoActive.classList.toggle('player--active')
    } else {
        playerOneActive.classList.remove('player--active')
        playerTwoActive.classList.remove('player--active')
    }

    if (!playerOneActive.classList.contains('player--active')) {
        let scoreOneNumber = Number(scoreOne.textContent)
        scoreOne.textContent = scoreOneNumber + stringToNum(currentOne.textContent)
        currentOne.textContent = 0
        if (scoreOne.textContent >= 100) {
            playerOneActive.classList.add('player--winner', 'name')
            playerTwoActive.classList.remove('.player--active')
            dice.style.display = 'none'
        }
    } else if (!playerTwoActive.classList.contains('player--active')) {
        let scoreTwoNumber = Number(scoreTwo.textContent)
        scoreTwo.textContent = scoreTwoNumber + stringToNum(currentTwo.textContent)
        currentTwo.textContent = 0
        if (scoreTwo.textContent >= 100) {
            playerTwoActive.classList.add('player--winner', 'name')
            playerOneActive.classList.remove('player--active')
            dice.style.display = 'none'
        }
    }
})

newGame.addEventListener('click', function () {

    currentOne.textContent = 0
    currentTwo.textContent = 0
    scoreOne.textContent = 0
    scoreTwo.textContent = 0
    // dice.src = `./images/${randomImg[0]}`
    dice.style.display = 'none'

    if (!playerOneActive.classList.contains('player--active' && playerTwoActive.classList.contains('player--active'))) {
        playerOneActive.classList.add('player--active')
        playerTwoActive.classList.remove('player--active')
    }

    if (playerOneActive.classList.contains('player--winner', 'name')) {
        playerOneActive.classList.remove('player--winner', 'name')

    } else if (playerTwoActive.classList.contains('player--winner', 'name')) {
        playerTwoActive.classList.remove('player--winner', 'name')
    }
})