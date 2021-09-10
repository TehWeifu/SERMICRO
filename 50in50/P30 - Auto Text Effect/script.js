'use strict'

const textContainer = document.querySelector('.container')
const speedInput = document.querySelector('#speedInput')

const textToWrite = 'Hello World Hello World Hello World Hello World Hello World Hello World'
let speed = 1

speedInput.addEventListener('change', (e) => {
    speed = Number(e.target.value)
})

function printText(text) {
    if (text !== '') {
    console.log(`Inside if with ${text[0]}`)
        textContainer.innerHTML += text[0]

        setTimeout(() => {
            printText(text.slice(1))
        }, 1000 / speed)
    }
}

printText(textToWrite)
