
const getStarWarsData = async () => {
    let response, starShip, film
    try{
        response = await axios.get('https://swapi.dev/api/people/4')
        starShip = await axios.get(response.data.starships)
        film = await axios.get(starShip.data.films)
        displayStarWarsToDom(response, starShip, film)
    }
    catch(error){
        console.log(error)
    }
}

function displayStarWarsToDom(response, starShip, film){
    const darth = document.createElement('h1')
    darth.textContent = response.data.name
    document.querySelector('#starwars').appendChild(darth)

    const darthShip = document.createElement('h2')
    darthShip.textContent = starShip.data.name
    document.querySelector('#starwars').appendChild(darthShip)

    const movie = document.createElement('h2')
    movie.textContent = film.data.title
    document.querySelector('#starwars').appendChild(movie)
}
getStarWarsData()

const getSpecies = async () => {
    const speciesData = await axios.get('https://swapi.dev/api/films/1/')
    const speciesAry = speciesData.data.species
    const speciesAll = []

    for(let i = 0; i < speciesAry.length; i++){
        speciesAll.push(axios.get(speciesAry[i]))
    }

    Promise.all(speciesAll)
    .then(res => displaySpeciesToDom(res))
    .catch(err => console.log(err))
}

getSpecies()

function displaySpeciesToDom(res){
    const wookie = document.createElement('h1')
    wookie.textContent = res[2].data.name
    document.querySelector('#species').appendChild(wookie)
}



const getMyData = async () => {
    try{
        response = await axios.get('http://api.bryanuniversity.edu/kurt/list')
        displayMyData(response)
    }
    catch(error){
        console.log(error)
    }
}

getMyData()

const displayMyData = (response) => {
    myData = document.createElement('h1')
    myData.textContent = response.data[3].name
    document.querySelector('#myData').appendChild(myData)

}

const getRickMortyData = async () => {
    let alienMorty
    try{
        alienMorty = await axios.get('https://rickandmortyapi.com/api/character')
        displayRickMortyData(alienMorty)
    }
    catch(err){console.log(err)}
}

getRickMortyData()

const displayRickMortyData = (alienMorty) => {
    const name = document.createElement('h1')
    name.textContent = alienMorty.data.results[13].name
    document.querySelector('#rickAndMorty').appendChild(name)
}