// resolve  -  .then()
// reject  -  .catch()

function flipCoin(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve("Heads")
        } else if (randomNum === 1){
            reject("Tails")
        }
    })
}

function getData(){
    return new Promise(resolve => {
        setTimeout(() => resolve('hello world'), 3000)
    })
}

getData()
    .then(response => console.log(`I have resolved ${response}`))
    .catch(error => console.log('I errored'))