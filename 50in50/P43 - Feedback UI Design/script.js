'use strict'

const choices = document.querySelectorAll('.choice')
const button = document.querySelector('.container button')
const container = document.querySelector('.container')
const resultDiv = document.querySelector('.result')
const resultText = document.querySelector('.result-text')

choices[2].classList.add('active')

for (const choice of choices) {
    choice.addEventListener('click', () => {
        clearOptions()
        choice.classList.add('active')
    })
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    displayResult()
})

function clearOptions() {
    for (const choice of choices) {
        choice.classList.remove('active')
    }
}

function displayResult() {
    for (const choice of choices) {
        if (choice.classList.contains('active')) {
            resultText.innerText += choice.querySelector('.text').innerText
        }
    }

    container.classList.add('hide')
    resultDiv.classList.remove('hide')
}