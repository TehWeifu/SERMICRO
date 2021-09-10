'use strict'

const background = document.querySelector('.backgroundImg')
const submitBtn = document.querySelector('#subButton')
const passInput = document.querySelector('#pw')

console.log(background)

submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
})

passInput.addEventListener('keyup', () => {
    const passLength = passInput.value.length

    console.log(passInput)

    background.style.filter = `blur(${8 - passLength}px)`
})
