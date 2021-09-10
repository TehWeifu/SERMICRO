const container = document.querySelector('.container')

const colors =  ['rebeccapurple', 'royalblue', 'midnightblue', 'forestgreen', 'yellow', 'white', 'orange', 'red']

for (let i = 0; i < 400; i++) {
    const tmpElement = document.createElement('div')
    tmpElement.classList.add('box')

    tmpElement.addEventListener('mouseover', changeBackground)
    tmpElement.addEventListener('mouseleave', fadeBackground)

    container.appendChild(tmpElement)
}



function changeBackground(e) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    e.target.style.backgroundColor = color
    e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function fadeBackground(e) {
    e.target.style.backgroundColor = "#1d1d1d"
    e.target.style.boxShadow = `none`

}
