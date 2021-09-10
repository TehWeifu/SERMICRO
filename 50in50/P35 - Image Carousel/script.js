'use strict'

const prevBtn = document.querySelector('#left')
const nextBtn = document.querySelector('#right')
const imgContainer = document.querySelector('.image-container')

const numOfImages = document.querySelectorAll('.image-container img').length
const imgSize = 500
let currentPos = 0

function nextSlide(e) {
    currentPos++
    if (currentPos > numOfImages - 1) currentPos = 0

    imgContainer.style.transform = `translateX(-${currentPos * imgSize}px)`
}

function previousSlide() {
    currentPos--
    if (currentPos < 0) currentPos = numOfImages - 1

    imgContainer.style.transform = `translateX(-${currentPos * imgSize}px)`
}

setInterval(nextSlide, 3000)

prevBtn.addEventListener('click', previousSlide)
nextBtn.addEventListener('click', nextSlide)