'use strict'

const body = document.body
const slides = document.querySelectorAll('.slide')

const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}

function setActivesSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length
    console.log(activeSlide)

    setBgToBody()
    setActivesSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length
    console.log(activeSlide)

    setBgToBody()
    setActivesSlide()
})