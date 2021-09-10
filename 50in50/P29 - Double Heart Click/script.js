'use stric'
const imgDiv = document.querySelector('.img')
const counter = document.querySelector('.counter')

let previousTime
let actualTime


imgDiv.addEventListener('click', (e) => {
    e.preventDefault()
    actualTime = new Date()

    if (previousTime && actualTime - previousTime < 500) {
        previousTime = null

        let tmpHeart = document.createElement('i')

        tmpHeart.classList.add('fas')
        tmpHeart.classList.add('fa-heart')
        tmpHeart.classList.add('animated-heart')

        tmpHeart.style.top = e.offsetY + 'px'
        tmpHeart.style.left = e.offsetX + 'px'

        imgDiv.appendChild(tmpHeart)
        setTimeout(() => tmpHeart.remove(), 2000)

        counter.innerHTML = String(Number(counter.innerHTML) + 1)
    } else {
        previousTime = actualTime
    }
}, false)