// Promise Chaining
// url: https://swapi.dev/api/people/1

const getData = () => {
    axios.get('https://swapi.dev/api/people/1')

    .then(res => {
        const homeworldUrl = res.data.homeworld
        console.log(homeworldUrl)
        return axios.get(homeworldUrl)
    })
    .then(response => {
        const film1 = response.data.films[0]
        console.log(film1)
        return axios.get(film1)
    })
    .then(res => axios.get(res.data.species[1]))
    .then(response => console.log(response.data.name))
    .catch(err => console.log(err))
}

getData()


// Async - Await

const getData1 = async () => {
    let response, homeworld, film
    try{
        response = await axios.get('https://swapi.dev/api/people/1')
        homeworld = await axios.get(response.data.homeworld)
        film = await axios.get(homeworld.data.films[0])
        displayDataToDom(response, homeworld, film)
    }
    catch(error){
        console.log(error)
    }
}

getData1()

function displayDataToDom(response, homeworld, film){
    console.log(response.data.name)
    const luke = document.createElement('h1')
    luke.textContent = response.data.name
    document.body.appendChild(luke)

    console.log(homeworld.data.name)
    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    console.log(film.data.title)
    const h2 = document.createElement('h2')
    h2.textContent = film.data.title
    document.body.appendChild(h2)
}

// // Promise.all()

async function getAllLukeMovies(){
    const lukeData = await axios.get("https://swapi.dev/api/people/1")
    const lukeFilms = lukeData.data.films
    const pendingFilmsPromises = []

    for(let i = 0; i < lukeFilms.length; i++){
        pendingFilmsPromises.push(axios.get(lukeFilms[i]))
    }

    Promise.all(pendingFilmsPromises)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

getAllLukeMovies()

const data = () => {
    fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

data()