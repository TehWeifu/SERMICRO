'use strict'

const header = document.querySelector('#header')
const profTitle = document.querySelector('#title')
const profInfo = document.querySelector('#excerpt')
const profImg = document.querySelector('#profile_img')
const profName = document.querySelector('#name')
const profDate = document.querySelector('#date')

function loadContent() {
    header.innerHTML = `<img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg">`
    header.classList.remove('animated-bg')

    profTitle.innerHTML = 'Wow what an amazing title'
    profTitle.classList.remove('animated-bg')

    profInfo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consectetur cum cupiditate labore libero magnam necessitatibus tempora temporibus voluptatum.'

    profImg.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCrBsA5s6siVAMFY5D9ZtamzhUcVmJ5woMiTMLXMjuzHaGQAd3uvF0xGq_r_4d4qle-A&usqp=CAU">`
    profImg.classList.remove('animated-bg')

    profName.innerHTML = 'Mr. Handsome'
    profName.classList.remove('animated-bg')
    profName.classList.remove('animated-bg-text')

    profDate.innerHTML = 'Sep 15, 2020'
    profDate.classList.remove('animated-bg')
    profDate.classList.remove('animated-bg-text')
}

setTimeout(loadContent, 5000)