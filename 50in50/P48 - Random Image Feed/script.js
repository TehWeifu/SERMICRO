'use strict'

const container = document.querySelector('.container')
const WEB_URL = 'https://source.unsplash.com/random/'

for (let i = 0; i < 9; i++) {
    const tmpImg = document.createElement('img')
    tmpImg.src = `${WEB_URL}30${i}x30${i}`

    container.appendChild(tmpImg)
}
