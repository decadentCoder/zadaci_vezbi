let logo = document.getElementById("logo");
let persons = document.getElementById("persons");
let ships = document.getElementById("ships");
let display = document.getElementById("tablescreen");

let received = []; //where the received data will be stored

//API request: ships

let requestShips = () =>
    fetch(`https://swapi.co/api/starships/1/`)
    .then (feedback => feedback.json())  
    .then (feedback => {
        console.log("status feedback before", feedback);
        console.log("status for received before", received);
        received = feedback;
        console.log("status received after merginf with feedback", received);
        console.log("status feedback", feedback);
        printShips(display, feedback);
    });
    

let printShips = (table, starships) => {
    table.innerHTML = "";
    // for (let i of feedback) {
        table.innerHTML += `<tr>
            <td>${starships.name}</td>
            <td>${starships.model}</td>
            <td>${starships.manufacturer}</td>
            <td>${starships.cost_in_credits}</td>
            <td>${starships.crew}</td>
            <td>${starships.class}</td>
        ` 
    // }
}

//API request: people

let requestPeople = () => 
    fetch(`https://swapi.co/api/people/1/`)
    .then(feedback => feedback.json())
    .then(json => {
        console.log(json);
        // received = feedback;
        printPeople(display, json);
    });
    
function printPeople(table, people) {
    table.innerHTML = "";
    // for (const table of received) {
        table.innerHTML += `<tr>
            <td>${people.name} </td>
            <td>${people.height} </td>
            <td>${people.mass} </td>
            <td>${people.gender} </td>
            <td>${people.birth_year} </td>   
            <td>${people.films} </td>
            `      
    // }
}



function testShips() {
    alert("ships are clicked");
}

function testLogo() {
    alert("logo is clicked");
}

function testPeople() {
    alert("people are clicked");
}





ships.addEventListener("click", requestShips);
persons.addEventListener("click", requestPeople);
logo.addEventListener("click", testLogo);
