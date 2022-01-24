// Fetch
// - Fetch is an api that you can use to make HTTP requests from a javascript application.
// - It's similar to the XHR object, but it expands on that to have more features including being promise based.
// - Fetch is a native API so you don't need to install anything to use it.

// Rick and Morty API URL: "https://rickandmortyapi.com/api/character"

fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(res => {
    for (let i = 0; i < res.results.length; i++){
        console.log(res.results[i].name)
        const h1 = document.createElement('h1')
        h1.textContent = res.results[i].name
        document.body.appendChild(h1)
    }
})
.catch(err => console.log(err))

