// console.log(axios)

// Get requests with axios
// url: http://api.bryanuniversity.edu/kurt/list

// Get All

axios.get('http://api.bryanuniversity.edu/kurt/list/')
// .then(response => console.log(response.data))
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h2 = document.createElement('h2')
        h2.textContent = response.data[i].name
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))

// CORS-anywhere

// https://cors-anywhere.herokuapp.com/

//Get One


