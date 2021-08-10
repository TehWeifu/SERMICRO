'use strict'
const textarea = document.getElementById('textarea')
const tags = document.getElementById('tags')

textarea.focus()

textarea.addEventListener('input', (e) => {
    clearTags()
    const choices = textarea.value.split(',')
    choices.forEach((choice) => {
        if (choice.trim()) {
            const tmpSpam = document.createElement('span')
            tmpSpam.classList.add('tag')
            tmpSpam.innerText = choice
            tags.appendChild(tmpSpam)
        }
    })
})

textarea.addEventListener('keydown', ev => {
    if (ev.code === 'Enter') {
        const numJumps = 10 + Math.floor(Math.random() * 10)
        for (let i = 0; i < numJumps; i++) {
            setTimeout(highlightRndTag, 250 * i)
        }
        setTimeout(() =>ev.target.value = '', 10)
    }
})

function clearTags() {
    tags.innerHTML = ''
}

function highlightRndTag() {
    const arrOfTags = tags.querySelectorAll('.tag')
    const rndTag = Math.floor(Math.random() * arrOfTags.length)

    arrOfTags.forEach(tag => {
        tag.classList.remove('highlight')
    })

    arrOfTags[rndTag].classList.add('highlight')
}