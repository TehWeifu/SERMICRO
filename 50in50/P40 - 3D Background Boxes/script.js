'use strict'

const boxContainer = document.querySelector('#boxes')
const btn = document.querySelector('#btn')

const boxNumber = 4

btn.addEventListener('click', (e) => {
    boxContainer.classList.toggle('big')
})

for (let i = 0; i < boxNumber; i++) {
    for (let j = 0; j < boxNumber; j++) {
        const tmpBox = document.createElement('div')
        tmpBox.classList.add('box')

        tmpBox.style.backgroundPosition = `-${j * 125}px -${i * 125}px`

        boxContainer.appendChild(tmpBox)
    }
}