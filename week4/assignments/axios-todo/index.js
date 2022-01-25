

axios.get('http://api.bryanuniversity.edu/kurt/list/')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const ol = document.createElement('ol')
        ol.textContent = response.data[i].name
        document.body.appendChild(ol)
    }
})
.catch(error => console.log(error))



