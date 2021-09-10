const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const incBtn = document.querySelector('#increase')
const decBtn = document.querySelector('#decrease')
const sizeSpan = document.querySelector('#size')
const colorInput = document.querySelector('#color')
const clear = document.querySelector('#clear')

let size = 20
let color = 'black'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = y.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

incBtn.addEventListener('click', evt => {
    if (size < 50) size +=5
    sizeSpan.innerHTML = size
})

decBtn.addEventListener('click', evt => {
    if (size > 10) size -=5
    sizeSpan.innerHTML = size
})

colorInput.addEventListener('change', evt => {
    color = evt.target.value
})

clear.addEventListener('click', evt => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

