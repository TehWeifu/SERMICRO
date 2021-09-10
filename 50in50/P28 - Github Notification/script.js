'use strict'
const API_URL = "https://api.github.com/users/"
const form = document.querySelector('#form')
const search = document.querySelector('#search')

async function getUser(username) {
    try {
        const {data} = await axios(API_URL + username)
        const {data: repos} = await axios(API_URL + username + '/repos')
        generateCard(data, repos)
    } catch (err) {
        console.log(err)
        generateCard()
    }
}

form.addEventListener('submit', (evt => {
    evt.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
}))

function generateCard(data, repos) {
    const main = document.querySelector('#main')

    if (data) {
        main.innerHTML = `    
        <div class="card">
        <div>
            <img alt="" class="avatar" src="${data.avatar_url}">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul>
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>Following</strong></li>
                <li>${data.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                <a class="repo" href="${repos[0].html_url}">${repos[0].name}</a>
                <a class="repo" href="${repos[1].html_url}">${repos[1].name}</a>
                <a class="repo" href="${repos[2].html_url}">${repos[2].name}</a>
                <a class="repo" href="${repos[3].html_url}">${repos[3].name}</a>
                <a class="repo" href="${repos[4].html_url}">${repos[4].name}</a>
            </div>
        </div>
    </div>
`
    } else {
        main.innerHTML = `
                <div class="card">
                        <div class="user-info">
                            <h2>No profile with this username</h2>
                        </div>                
                </div>
`
    }
}