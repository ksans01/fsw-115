
const getSimpsonsCharacters = () => {
    axios.get('https://api.sampleapis.com/simpsons/characters')
    .then(response => {
        for (let i=0; i<25; i++){
            const h2 = document.createElement('h2')
            h2.textContent = response.data[i].name
            document.body.appendChild(h2)
        }
            })
    .catch(error => console.log(error))
}

const getMemes = () => {
    axios.get('https://api.imgflip.com/get_memes')
    .then(response => {
        const memesArray = response.data.data.memes
        for (let i=0; i<memesArray.length; i++){
            const h3 = document.createElement('h3')
            h3.textContent = memesArray[i].name
            document.body.appendChild(h3)
    }
})
.catch(error => console.log(error))

}

