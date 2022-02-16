const url = 'http://localhost:3000/movies' 
console.log ('hello world')
const form = document.getElementById("mform")

//create a function where an item is created / aka lsiten for form submit and display item
form.addEventListener("submit", function (event){
    event.preventDefault()
    const movieText = document.getElementById("mtext").value
    createMovie(movieText)
})

//create a delete button / aka. listen for different actions / delete / edit / update / cancel change


//mark as complete 



//import moment library for "time stamp"



//display movie list in alphabtical order

