'use script'

const btn = document.querySelector('#button')
const toast = document.querySelector('#toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

btn.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerHTML = messages[Math.floor(Math.random() * messages.length)]

    toast.appendChild(notif)

    setTimeout(()=> notif.remove(), 3000)
}

setTimeout(() => createNotification(), 3000)