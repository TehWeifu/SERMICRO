'use strict'

const images = ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 'https://images.squarespace-cdn.com/content/v1/5928758617bffc99adafe43e/1505452710926-P1DA105HLU047TVX1J3N/Blog-Background.png?format=2500w', 'https://image.freepik.com/free-vector/blue-social-media-background_1017-7008.jpg']
const menuOptions = document.querySelectorAll('.option')
const display = document.querySelector('.display')

display.style.background = `url(${images[0]}) no-repeat center/cover`


for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener('click', () => {
        clearMenu()
        menuOptions[i].classList.add('active')
        display.style.background = `url(${images[i]}) no-repeat center/cover`
        console.log(display.style.background)
    })
}


function clearMenu() {
    for (const menuOption of menuOptions) {
        menuOption.classList.remove('active')
    }
}
