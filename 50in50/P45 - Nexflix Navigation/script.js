'use strict'
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.menu-close')
const menu = document.querySelector('.menu')

const blackDiv = document.querySelector('.black')
const redDiv = document.querySelector('.red')
const whiteDiv = document.querySelector('.main-menu')

openMenu.addEventListener('click', (e) => {
    menu.style.transform = 'translateX(0%)'
    setTimeout(() => { blackDiv.style.transform = 'translateX(0%)' }, 0)
    setTimeout(() => { redDiv.style.transform = 'translateX(0%)' }, 200)
    setTimeout(() => { whiteDiv.style.transform = 'translateX(0%)' }, 400)
})

closeMenu.addEventListener('click', () => {
    setTimeout(() => { whiteDiv.style.transform = 'translateX(-100%)' }, 0)
    setTimeout(() => { redDiv.style.transform = 'translateX(-100%)' }, 200)
    setTimeout(() => { blackDiv.style.transform = 'translateX(-100%)' }, 400)
    setTimeout(() => { menu.style.transform = 'translateX(-100%)' }, 600)
})
