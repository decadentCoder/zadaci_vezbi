//-------SWAPI-------
       
// --------------------- !!!TO DO: -------------------------
// LOADER!
// SEARCH input!
// PAGINATION!
// Button for ASCENDING - DESCENDING! (sort functionality)


let logo = document.getElementById("logo");
let persons = document.getElementById("persons");
let ships = document.getElementById("ships");
// let display = document.getElementById("tablescreen");
let fullDisplay = document.getElementById("present");


let received = []; //where the received data will be stored //not needed

// let url = `https://swapi.co/api`
let urlStarships = `https://swapi.co/api/starships`  //?=pageNo
let urlPeople = `https://swapi.co/api/people`

let timer = 0; //evtl. used as trigerrer for hiding/showing the prev/next buttons

let next;
let previous;
let data = null;
let feedback = null;

// // API request: SHIPS-------------------------------------------------------------------------------------------

async function requestShips() {
    feedback = await fetch(urlStarships)
    data = await feedback.json()
        console.log("status data", data);
        console.log("data results", data.results);
        console.log("data previus", data.previous);
        console.log("data next", data.next);
        printShips(fullDisplay, data.results);
            next = data.next;
            previous = data.previous;
}

async function requestShipsNext() {
        if(next === null) {
            alert(`no more ships to display!`)
        }
        feedback = await fetch(next);
        data = await feedback.json();
        console.log("status data", data)
        console.log("status feedback", feedback)
        console.log("data previus", data.previous); // here everything is OK with data.previous
        console.log("data next", data.next);    
        printShips(fullDisplay, data.results)
        next = data.next
        previous = data.previous
        console.log("next (data.next)", next)
}

async function requestShipsPrevious() {
        if(previous === null || previous === undefined) {
            alert(`no previous entry for ships to display!`)
        }
        feedback = await fetch(previous);
        data = await feedback.json();
        console.log("status dataP", data);
        printShips(fullDisplay, data.results);
        previous = data.previous;     //!!! for each call the values for previous and next should be initialised respectively!!! ...
        next = data.next;             //... the lack of this initialization was the reason for throwing the "CORS" error!!!
}

    // buttonPrevious.addEventListener("click", testing) 
   

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
            ` <tr id="row">
                <td>${i.name}</td>
                <td>${i.model}</td>
                <td>${i.manufacturer}</td>
                <td>${i.cost_in_credits}</td>
                <td>${i.crew}</td>
                <td>${i.starship_class}</td>
                <td><button id="del"> Delete </button></td>

            </tr> `    
        }
    table.innerHTML += `
    <button id="previous"> Previous </button>
    <button id ="next"> Next </button>
    `
    let buttonNext = document.getElementById("next");
    let buttonPrevious = document.getElementById("previous");


    buttonNext.addEventListener("click", requestShipsNext)

    buttonPrevious.addEventListener("click", requestShipsPrevious);

    let buttonDelete = document.getElementById("del");
            
    function deleteRow() {
        row.innerHTML = "";  //Bug: works ONLY for the first row?!!! why?
    }

    buttonDelete.addEventListener("click", deleteRow);
    
}

// buttonNext.addEventListener("click", requestShipsNext);
// buttonPrevious.addEventListener("click", requestShipsPrevious);

// // API request: PEOPLE------------------------------------------------------------------------------------------

async function requestPeople () {
    feedback = await fetch(urlPeople)
    data = await feedback.json()
        console.log("data", data);
        console.log("data results", data.results);
        console.log("data.previous", data.previus) //
        console.log("data.next", data.next);
        printPeople(fullDisplay, data.results);
        next = data.next;
        previous = data.previous;
        // buttonNext.addEventListener("click", printPeople(fullDisplay, feedback.next));
        console.log(data.next);
        console.log(data.previous);
}

async function requestPeopleNext() {
    if(next === null) {
        alert(`no more people to display!`)
    }
    feedback = await fetch(next);
    data = await feedback.json();
    console.log("status data", data);
    printPeople(fullDisplay, data.results);
    previous = data.previous;
    next = data.next;
}

async function requestPeoplePrevious() {
    if(previous === null || previous === undefined) {
        alert(`no previous entry for people to display!`)
    }
    feedback = await fetch(previous);
    data = await feedback.json();
    console.log("status data", data);
    printPeople(fullDisplay, data.results);
    previous = data.previous;
    next = data.next;
    
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
        
    for (let i of people) {
        table.innerHTML += `    
             <tr id="row">
                <td class="cell"> ${i.name} </td>
                <td class="cell"> ${i.height} </td>
                <td class="cell"> ${i.mass} </td>
                <td class="cell"> ${i.gender} </td>
                <td class="cell"> ${i.birth_year} </td>   
                <td class="cell"> ${i.films} </td>
                <td><button id="del"> Delete </button></td>
            </tr> 
            `    
        }
            
    table.innerHTML += `
    <button id="previous"> Previous </button>
    <button id ="next"> Next </button>`

    //buttons for this function (printPeople)

    let buttonNext = document.getElementById("next");
    let buttonPrevious = document.getElementById("previous");
    let buttonDelete = document.getElementById("del");
    
    //functions for the buttons

    buttonNext.addEventListener("click", requestPeopleNext);

    
    buttonPrevious.addEventListener("click", requestPeoplePrevious);

            
    function deleteRow() {
        row.innerHTML = "";  //Bug: works ONLY for the first row?!!! why?
    }

    buttonDelete.addEventListener("click", deleteRow);
    
}


ships.addEventListener("click", requestShips);
persons.addEventListener("click", requestPeople);

 
    // async function next() {
    //     let feedback = await fetch(urlPeople);
    //     let dataPeople = await feedback.json();
    //     printPeople(fullDisplay,)
    // }

//---------------GARBAGE(removed code)---------------

// .finally( () => console.log(next));

//         buttonNext.addEventListener("click", () => {
//            console.log(next);
//            fetch(next)
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response);
//                 console.log(response.results);
//                 // received = feedback;
//                 console.log(response.next);
//                 printPeople(fullDisplay, response.results);
//                 next = response.next
//                 })
            
//             // .finally( () => console.log(next));

//         })
//         // buttonPrevious.addEventListener("click", testing)

// }

// function testingNext() {
//     alert("testing Next")
// }

// fetch(urlStarships) === true ? 
//     .then(feedback = feedback.json())
//     .then(feedback => 
//         console.log(feedback))
//     //printPeople(feedback.next)
//     //koja funkcija tuka?!

// )

// ------ 
//why people is undefined here (in the for loop for people: )
// async function requestPeople () {
//     feedback = await fetch(`https://swapi.co/api/people/?page=3`)
//     data = await feedback.json()
//         console.log("data", data);
//         console.log("data results", data.results);
//         console.log("data.previous", data.previus) // undefined!!! дали затоа ми фрла ерор за previous? И зошто е undefined?
//         console.log("data.next", data.next);
//         printPeople(fullDisplay, feedback.results);
//         next = data.next;
//         previous = data.previous;
//         // buttonNext.addEventListener("click", printPeople(fullDisplay, feedback.next));
//         console.log(data.next);
//         console.log(data.previous);
// }


