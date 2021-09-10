'use strict'

const inputs = document.querySelectorAll('.digit-container input')

inputs[0].focus()

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', (e) => {
        inputs[i].value = ''

        inputs[i].classList.add('active')


        setTimeout(() => {
            if (inputs[i].value && i < inputs.length - 1) inputs[i + 1].focus()
        }, 0)
    })
}