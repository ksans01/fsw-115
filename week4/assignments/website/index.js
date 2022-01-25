

var page1 = axios.get('https://api.sampleapis.com/simpsons/characters')
.then(response => {
    for (let i=0; i<25; i++){
        const h2 = document.createElement('h2')
        h2.textContent = response.data[i].name
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))


var page2 = axios.get('https://api.imgflip.com/get_memes')
.then(response => {
    for (let i=0; i<response.data.length; i++){
        const h3 = document.createElement('h3')
        h3.textContent = response.data[i].name
        document.body.appendChild(h3)
    }
})
.catch(error => console.log(error))

