
const displayList = document.getElementById("myDiv");

const todoList = () => {
    axios.get('http://api.bryanuniversity.edu/kurt/list/')
    .then(response => (displayItems(response.data)))
    .catch(error => console.log(error))

}

todoList()

const displayItems = (items) => {
    let parentContainer = document.getElementById('myDiv')
    parentContainer.innerHTML = ''

    items.forEach(item => {
        // console.log(item)
        let itemContainer = document.createElement('ol')
        itemContainer.classList.add('todo-card')

        let itemName = document.createElement('h3')
        itemName.textContent = item.name
        itemContainer.appendChild(itemName)

        let itemDescription = document.createElement('p')
        itemDescription.textContent = item.description
        itemContainer.appendChild(itemDescription)

        let itemPrice = document.createElement('p')
        itemPrice.textContent = item.price 
        itemContainer.appendChild(itemPrice)

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.id = item._id
        deleteBtn.addEventListener('click', deleteItems)
        itemContainer.appendChild(deleteBtn)
       
        let completeBtn = document.createElement('button')
        let btnText = 'Mark Incomplete'
        item.isComplete ? itemName.classList.add('item-complete') : btnText = 'Mark Complete'
        completeBtn.textContent = btnText
        completeBtn.value = item.isComplete
        completeBtn.id = item._id
        completeBtn.addEventListener('click', putItems)
        itemContainer.appendChild(completeBtn)

        parentContainer.appendChild(itemContainer)
    })
}

//* POST
const postItems = (e) => {
    e.preventDefault()
    let titleInput = document.getElementById('listTitleInput').value
    let descriptionInput = document.getElementById('listDescriptionInput').value
    let completeInput = document.getElementById('listCompletedInput').checked

    let newItem = {
        name: titleInput,
        description: descriptionInput,
        isComplete: completeInput
    }

    axios.post('http://api.bryanuniversity.edu/kurt/list/', newItem)
    .then(response => todoList())
    .catch(error => console.log(error))
}

let form = document.getElementById('listForm')
form.addEventListener('submit', postItems)

// //* DELETE
const deleteItems = (e) => {
    let id = e.target.id
    
    axios.delete(`http://api.bryanuniversity.edu/kurt/list/${id}`)
    .then(response => todoList())
    .catch(error => console.log(error))
}

// //* PUT
const putItems = (e) => {
    let id = e.target.id
    let value = e.target.value

    let updatedValue = null

    if(value === 'true'){
        updatedValue = false
    } else {
        updatedValue = true
    }

    let updatedItem = {
        isComplete: updatedValue
    }

    axios.put(`http://api.bryanuniversity.edu/kurt/list/${id}`, updatedItem)
    .then(response => todoList())
    .catch(error => console.log(error))
}

const getStarWarsData = async () => {
    let response, starShip, film
    try{
        response = await axios.get('https://swapi.dev/api/people/4')
        starShip = await axios.get(response.data.starships)
        film = await axios.get(starShip.data.films)
        displayStarWarsToDom(response, starShip, film)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

function displayStarWarsToDom(response){
    const vader = document.createElement('h1')
    vader.textContent = response.data.name
    document.querySelector('#starwars').appendChild(vader)
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
