'use strict'

const container = document.querySelector('.container')
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

for (let i = 1; i < 152; i++) {
    setTimeout(() => generateCard(i), i * 5)
}

async function generateCard(id) {
    const tmp_url = API_URL + String(id)
    const res = await fetch(tmp_url)
    const data = await res.json()

    const tmpCard = document.createElement("div")
    tmpCard.classList.add('card')
    tmpCard.classList.add(data.types[0].type.name)

    tmpCard.innerHTML = `
            <div class="pokeImg"><img src="${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}" alt=""></div>
        <span class="id">${getFormatedId(id)}</span>
        <span class="name">${data.name}</span>
        <span class="type">Type:${data.types[0].type.name}</span>
    `

    container.appendChild(tmpCard)
}

function getFormatedId(num) {
    let res = String(num)
    while (res.length < 3) res = '0' + res
    return '#' + res
}