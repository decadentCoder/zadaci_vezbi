let logo = document.getElementById("logo");
let persons = document.getElementById("persons");
let ships = document.getElementById("ships");
// let display = document.getElementById("tablescreen");
let fullDisplay = document.getElementById("present");
let buttonPrevious = document.getElementById("previous");
let buttonNext = document.getElementById("next");

let received = []; //where the received data will be stored //not need

// let url = `https://swapi.co/api`
let urlStarships = `https://swapi.co/api/starships`  //?=pageNo
let urlPeople = `https://swapi.co/api/people`

function testing() {
    alert("testing");
}

//API request: ships

let requestShips = () => {
    fetch(urlStarships)
    .then (feedback => feedback.json())  
    .then (feedback => {
        console.log("status feedback before", feedback);
        console.log("feedback results", feedback.results);
        // console.log("status for received before", received);
        
        // console.log("status received after merginf with feedback", received);
        // console.log("status feedback", feedback);
        printShips(fullDisplay, feedback.results);
        next = feedback.next

    });

    buttonNext.addEventListener("click", () => {
        console.log(next);
        fetch(next)
         .then(dataShips => dataShips.json())
         .then(dataShips => {
             console.log(dataShips);
             console.log(dataShips.results);
             // received = feedback;
             console.log(dataShips.next);
             printShips(fullDisplay, dataShips.results);
             next = dataShips.next
             })
         })
         .finally( () => console.log(next));
    
    buttonPrevious.addEventListener("click", testing)
}

let printShips = (table, starships) => {
    table.innerHTML = "";
    table.innerHTML += `<thead> <tr>
        <th> Name </th>
        <th> Model </th>
        <th> Manufacturer </th>
        <th> Cost ( credits ) </th>
        <th> People Capacity ( crew + passengers ) </th>
        <th> Class </th>
        </tr> </thead>`
    for (let i of starships) {
    table.innerHTML += 
        `<tbody> <tr>
            <td>${i.name}</td>
            <td>${i.model}</td>
            <td>${i.manufacturer}</td>
            <td>${i.cost_in_credits}</td>
            <td>${i.crew}</td>
            <td>${i.starship_class}</td>
        </tr> </tbody>`    
    }
}

let next;
let previous;
//API request: people

let requestPeople = () => {
    fetch(urlPeople)
    .then(feedback => feedback.json())
    .then(feedback => {
        console.log(feedback);
        console.log(feedback.results);
        // received = feedback;
        console.log(feedback.next);
        printPeople(fullDisplay, feedback.results);
        next = feedback.next
        // buttonNext.addEventListener("click", printPeople(fullDisplay, feedback.next));
    })
    .finally( () => console.log(next));

        buttonNext.addEventListener("click", () => {
           console.log(next);
           fetch(next)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response.results);
                // received = feedback;
                console.log(response.next);
                printPeople(fullDisplay, response.results);
                next = response.next
                })
            })
            .finally( () => console.log(next));

    
}
function printPeople(table, people) {
    table.innerHTML = "";
    table.innerHTML +=  `<thead> <tr>
        <th> Name </th>
        <th> Height </th>
        <th> Mass </th>
        <th> Gender </th>
        <th> Birth Year </th>
        <th> Films </th>
        </tr> </thead>`
    for (const i of people) {
        table.innerHTML += `    
            <tbody> <tr>
                <td>${i.name} </td>
                <td>${i.height} </td>
                <td>${i.mass} </td>
                <td>${i.gender} </td>
                <td>${i.birth_year} </td>   
                <td>${i.films} </td>
            </td> </tbody>`      
    }
}

ships.addEventListener("click", requestShips);
persons.addEventListener("click", requestPeople);


// fetch(urlStarships) === true ? 
//     .then(feedback = feedback.json())
//     .then(feedback => 
//         console.log(feedback))
//     //printPeople(feedback.next)
//     //koja funkcija tuka?!

// )



// buttonPrevious.addEventListener("click",)

// logo.addEventListener("click", testLogo);
