'use strict'

const gameContainer = document.querySelector('.game-container')
const gameScoreSpan = document.querySelector('.score')
const gameTimeSpan = document.querySelector('.time')
const gameMessage = document.querySelector('.message')

const startBtn = document.querySelector('.startBtn')
const gameStartScreen = document.querySelector('.game-start')

const insectSelection = document.querySelector('.insect-selection')
const insectOptionsList = document.querySelectorAll('.insect-option')

const screenWidth = window.outerWidth
const screenHeight = window.outerHeight
const insectHeightAndWidth = 100

let insectSelectedPic

let gameScore = 0
let gameTime = 0

function displayInsect() {
    const tmpImg = document.createElement('img')
    tmpImg.src = insectSelectedPic

    const tmpDiv = document.createElement('div')
    tmpDiv.classList.add('insect')
    tmpDiv.appendChild(tmpImg)

    const randomWidth = Math.floor(Math.random() * (screenWidth - insectHeightAndWidth))
    const randomHeight = Math.floor(Math.random() * (screenHeight - insectHeightAndWidth * 2))

    console.log(randomWidth)
    console.log(randomHeight)

    tmpDiv.style.top = `${randomHeight}px`
    tmpDiv.style.left = `${randomWidth}px`


    tmpDiv.addEventListener('click', (e) => {
        e.target.remove()

        gameScore++
        updateScore()

        setTimeout(displayInsect, Math.floor(Math.random() * 1000))
        setTimeout(displayInsect, Math.floor(Math.random() * 1000))
    })

    gameContainer.appendChild(tmpDiv)
}

function updateScore() {
    gameScoreSpan.innerText = `Score: ${gameScore}`

    if (gameScore === 20) gameMessage.classList.remove('hide')
}

function updateTime() {
    let minutes = String(Math.floor(gameTime / 60))
    if (minutes.length < 2) minutes = '0' + minutes

    let seconds = String(gameTime % 60)
    if (seconds.length < 2) seconds = '0' + seconds

    gameTimeSpan.innerText = `Time: ${minutes}:${seconds}`
}

function goToGame() {
    insectSelection.classList.add('hide')
    gameContainer.classList.remove('hide')

    displayInsect()
    setInterval(() => {
        gameTime++
        updateTime()
    }, 1000)
}

startBtn.addEventListener('click', () => {
    gameStartScreen.classList.add('hide')
    insectSelection.classList.remove('hide')
})

Array.from(insectOptionsList).forEach(insectDiv => {
    insectDiv.addEventListener('click', () => {
        const tmpPic = insectDiv.querySelector('img')
        insectSelectedPic = tmpPic.src

        goToGame()
    })
})

console.log('Screen width', window.outerWidth)
console.log('Screen height', window.outerHeight)

