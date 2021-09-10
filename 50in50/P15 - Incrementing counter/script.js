'use strict'

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = '0'

    const updateCouter = () => {
        const target = +counter.getAttribute('data-target')

        const increment = target / 200

        for (let i = 0; i <= 200; i++) {
            setTimeout(() => counter.innerHTML = String(Math.floor(increment * i)), 10 * i)
        }
    }
    updateCouter()
})