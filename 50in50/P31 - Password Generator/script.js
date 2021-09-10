
const lengthInput = document.querySelector('#textLength')
const resInput = document.querySelector('.textInput')
const generateBtn = document.querySelector('.generatePass')
const cliboardBtn = document.querySelector('.btnClipboard')

const uppercaseCheck = document.querySelector('#uppercase')
const lowercaseCheck = document.querySelector('#lowercase')
const numberCheck = document.querySelector('#numbers')
const symbolCheck = document.querySelector('#symbols')

const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const lowercase = 'qwertyuiopasdfghjklzxcvbnm'
const numbers = '0123456789'
const symbols = '`~!@#$%^&*()_+-={}|[]\\;\':",./<>?'

let passLength = lengthInput.value
lengthInput.addEventListener('change', (e) => {
    passLength = lengthInput.value
})

generateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let characters = ''
    let res = ''

    if (uppercaseCheck.checked) characters = characters.concat(uppercase)
    if (lowercaseCheck.checked) characters = characters.concat(lowercase)
    if (numberCheck.checked) characters = characters.concat(numbers)
    if (symbolCheck.checked) characters = characters.concat(symbols)

    if (!uppercaseCheck.checked && !lowercaseCheck.checked && !numberCheck.checked && !symbolCheck.checked) {
        alert('Please select at least one option')
        return
    }


    for (let i = 0; i < passLength; i++) {
        res += characters[Math.floor(Math.random() * characters.length)]
    }

    resInput.value = res
})

cliboardBtn.addEventListener('click', (e) => {
    e.preventDefault()
    copyTextToClipboard(resInput.value)
})


async function copyTextToClipboard(text) {
    await navigator.clipboard.writeText(text)
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}