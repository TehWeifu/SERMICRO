let promiseTest = new Promise(((resolve, reject) => {
    let str
    setTimeout(() => {
        str = 'oh oh'
        console.log('Inside the promise constructor body')
        reject(str)
    }, 100)
}))

promiseTest.then((value) => console.log(`The request was fullfilled. Value: ${value}`), (error) => console.log(`The request was rejected. Error: ${error}`))