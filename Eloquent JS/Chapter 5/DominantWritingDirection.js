'use strict'

function dominantDirection(text) {
    let listOfCodes = arrOfCodes(text)
    let listOfScripts = []

    let result = {
        "ltr" : 0,
        "rtl" :0
    }

    for (const code of listOfCodes) {
        listOfScripts.push(characterScript(code))
    }

    for (const script of listOfScripts) {
        if (script) result[script.direction]++
    }

    if (result.ltr < result.rtl) return "rtl"
    if (result.ltr > result.rtl) return "ltr"
    return "Even!"
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function arrOfCodes(text) {
    let list = []
    for (const textElement of text) {
        list.push(textElement.codePointAt(0))
    }
    return list
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl