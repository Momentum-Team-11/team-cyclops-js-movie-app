const url = 'http://localhost:3000/movies' 
console.log ('hello world')
const form = document.getElementById("mform")

function createMovie(movieName) {
    fetch(url, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: movieText}),
        },
    )
    .then((response) => response.json())
    .then((data) => {
// write a function to do work
console.log(data)
    })
    form.reset()
}

//create a function where an item is created / aka lsiten for form submit and display item
form.addEventListener("submit", function (event){
    event.preventDefault()
    const movieText = document.getElementById("mtext").value
    console.log('click')


// write a function to do work


    createMovie(movieText)
})


//create a delete button / aka. listen for different actions / delete / edit / update / cancel change


//mark as complete 



//import moment library for "time stamp"



//display movie list in alphabtical order

// CRUD functions

function movieList() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            for (let movieObj of data) {
                // renderMovieItem(movieObj)
                console.log(movieObj)
            }
        })
}


movieList()