

axios.get('http://api.bryanuniversity.edu/kurt/list/')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h2 = document.createElement('ol')
        h2.textContent = response.data[i].name
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))



