'use strict'

const todoList = document.querySelector('.todo-list')
const todoSubmit = document.querySelector('.todo-input')

let todoElements = [
]

function loadElements() {
    let tmpObj = window.localStorage.getItem('todo')
    todoElements = JSON.parse(tmpObj)
    todoElements.forEach(ele => displayTodo(ele))
}

function updateList() {
    const todoArr = document.querySelectorAll('.todo-element')

    todoElements = []

    Array.from(todoArr).forEach( todo => {
        todoElements.push({text: todo.innerText, completed: todo.classList.contains('completed')})
    })

   window.localStorage.setItem('todo', JSON.stringify(todoElements))
}

function displayTodo(todoObj) {
    const tmpDiv = document.createElement("div")

    tmpDiv.classList.add('todo-element')
    if (todoObj.completed) tmpDiv.classList.add('completed')

    tmpDiv.innerText = todoObj.text

    tmpDiv.addEventListener('click', (e) => {
        e.target.classList.toggle('completed')
    })

    tmpDiv.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        e.target.remove()
        updateList()
    })

    todoList.appendChild(tmpDiv)
}

todoSubmit.addEventListener('keyup', e => {
    console.log(e)

    if (e.key === 'Enter') {

        displayTodo({text: e.target.value, completed: false})
        updateList()

        e.target.value = ''
    }
})

loadElements()
