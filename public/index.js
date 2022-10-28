const url = "http://localhost:3000";

//MEMBER CONTAINER
const memberId = document.querySelector('.id-box')
const memberFirstName = document.querySelector('.firstname-box')
const memberLastName = document.querySelector('.lastname-box')

//FILM CONTAINER
const filmId = document.querySelector('.id-film-box')
const filmMemberId = document.querySelector('.member-id-box')
const filmTitle = document.querySelector('.title-box')

//BUTTONS CONTAINER
const createButton = document.querySelector('.create-button')
const readButton = document.querySelector('.read-button')
const updateButton = document.querySelector('.update-button')
const deleteButton = document.querySelector('.delete-button')

//EVENT LISTENERS
//createButton.addEventListener('click', createRow)
readButton.addEventListener('click', readTable)
//updateButton.addEventListener('click', updateRow)
//deleteButton.addEventListener('click', deleteRow)

//FUNCTIONS

async function readTable(){
    const response = await fetch(`${url}/api/films`);

    const data = await response.json();

    console.log(data)
}