// XMLHttpRequest

// xhr.onreadystatechange
// xhr.readystate
// xhr.status
// xhr.open
// xhr.send
// xhr.responseText

const xhr = new XMLHttpRequest()
          // Method    // URL                    // Async?
xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        console.log(data.results)
        showData(data.results)
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.append(character)
    }    

}
