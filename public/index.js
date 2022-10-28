const url = "http://localhost:3000";

//MEMBER CONTAINER
const memberId = document.querySelector('#id-box')
const memberFirstName = document.querySelector('#firstname-box')
const memberLastName = document.querySelector('#lastname-box')

//FILM CONTAINER
const filmId = document.querySelector('#id-film-box')
const filmMemberId = document.querySelector('#member-id-box')
const filmTitle = document.querySelector('#title-box')

//BUTTONS CONTAINER
const createButton = document.querySelector('.create-button')
const readButton = document.querySelector('.read-button')
const updateButton = document.querySelector('.update-button')
const deleteButton = document.querySelector('.delete-button')

//RETURNS CONTAINER
const returnsArea = document.querySelector('#return-textarea')

//EVENT LISTENERS
//createButton.addEventListener('click', createRow)
readButton.addEventListener('click', readTable)
//updateButton.addEventListener('click', updateRow)
//deleteButton.addEventListener('click', deleteRow)

//FUNCTIONS

async function readTable(){

    if (filmId.value){

        getUserById()
        return
    }
    const response = await fetch(`${url}/api/films`);

    const data = await response.json();
    writeToTextarea(data)
    console.log(data)
}

function writeToTextarea(data) {
    let record = "";
    console.log(data.payload[0])
    if (data.payload[1]){

    for (let i = 0; i < data.payload.length; i++){  
         record += `ID: ${data.payload[i].id}\nMember Id: ${data.payload[i].member_id}\nTitle: ${data.payload[i].title}\n`;
    }
    }
    else{
        record += `ID: ${data.payload[0].id}\nMember_Id: ${data.payload[0].member_id}\nTitle: ${data.payload[0].title}\n`; 
    }
    returnsArea.textContent = record;
}

async function getUserById(){
    const idToFind = filmId.value;
   //console.log(idToFind)
    const response = await fetch(`${url}/api/films/${idToFind}`);

    const user = await response.json();
    //console.log(user)
    writeToTextarea(user);
}