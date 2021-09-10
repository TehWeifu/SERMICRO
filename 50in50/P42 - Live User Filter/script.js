'use strict'

const input = document.querySelector('.header input')
const resultDiv = document.querySelector('.results')
const API_URL = 'https://randomuser.me/api/?results=100'

async function fetchData() {
    const result = await fetch(API_URL)
    const users = await result.json()

    displayUsers(users.results)

    input.addEventListener('keyup', () => {
        displayUsers(users.results)
    })
}

function displayUsers(users) {
    resultDiv.innerHTML = ''
    for (const user of users) {
        const textFilter = input.value
        const tmpRegex = new RegExp(textFilter, 'i')

        const userFullName = user.name.first + ' ' + user.name.last
        const userFullAddress = user.location.city + ', ' + user.location.country

        console.log(userFullName)
        console.log(userFullAddress)

        if (tmpRegex.test(userFullName) || tmpRegex.test(userFullAddress)) {
            const tmpDiv = document.createElement('div')
            tmpDiv.classList.add('profile')


            tmpDiv.innerHTML = `
            <img alt="" src="${user.picture.medium}">
            <h2 class="name">${userFullName}</h2>
            <h3 class="location">${userFullAddress}</h3>
        `
            resultDiv.appendChild(tmpDiv)
        }
    }
}

fetchData()
