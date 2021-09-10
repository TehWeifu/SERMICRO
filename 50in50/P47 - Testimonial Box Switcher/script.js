'use strict'

const quotes = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus ex officia provident quo veritatis. Autem laboriosam magni molestias mollitia odio quidem veniam veritatis. Animi aspernatur beatae debitis deserunt dolor excepturi magnam maxime minus odit, perspiciatis praesentium quia quo, quod sequi velit. Blanditiis enim ipsum libero quis. Doloremque, odio, sequi.',
        name : 'Name One',
        career: 'Career One',
        profilePic : 'https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg'
    } ,
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum dolores enim error in incidunt omnis praesentium quia quisquam quod, rerum sequi unde! Deserunt error, necessitatibus. Culpa debitis dicta dolore dolorem enim esse est exercitationem expedita facere facilis maiores nobis odio quae quaerat quas repellat sed sequi, vero vitae, voluptatum? Asperiores at beatae blanditiis cumque dignissimos dolorum eos et eveniet impedit, laudantium libero magnam, molestiae nemo numquam officia veniam vitae.',
        name : 'Name Two',
        career: 'Career Two',
        profilePic : 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg'
    } ,
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nesciunt omnis sed! Adipisci amet aspernatur error illo ipsum libero magnam nam nemo quaerat quidem, reprehenderit rerum? In reprehenderit sed sunt!',
        name : 'Name Three',
        career: 'Career Three',
        profilePic : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    } ,
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum dolores enim error in incidunt omnis praesentium quia quisquam quod, rerum sequi unde! Deserunt error, necessitatibus. Culpa debitis dicta dolore dolorem enim esse est exercitationem expedita facere facilis maiores nobis odio quae quaerat quas repellat sed sequi, vero vitae, voluptatum? Asperiores at beatae blanditiis cumque dignissimos dolorum eos et eveniet impedit, laudantium libero magnam, molestiae nemo numquam officia veniam vitae.',
        name : 'Name Four',
        career: 'Career Four',
        profilePic : 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
    }
]

const counter = document.querySelector('.counter')
const textQuote = document.querySelector('.textQuote')
const profilePic = document.querySelector('.profilePic')
const profileName = document.querySelector('.name')
const profileCareer = document.querySelector('.career')

let currentQuote = 0

function displayQuote() {
    textQuote.innerText = quotes[currentQuote].text
    profilePic.src = quotes[currentQuote].profilePic
    profileName.innerText = quotes[currentQuote].name
    profileCareer.innerText = quotes[currentQuote].career

    currentQuote++
    if (currentQuote === quotes.length) currentQuote = 0
}

displayQuote()

setInterval(displayQuote, 10_000)
