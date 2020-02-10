let testingButton = document.getElementById("testbutton")
let display = document.getElementById("tablescreen");
let submitButton = document.getElementById("submitbutton");

let data = []

//function for requesting user (fetch)

function getUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(response => {
        console.log("status data before", data);
        console.log("response, obj. type check", response)
        data = response
        console.log("status data after merging with response", data)
        console.log("status response, after merging with data", response)
        printUsers(display, response)
    })
}

testingButton.addEventListener("click", getUsers);

//troubleshooting

let checkType = fetch(`https://jsonplaceholder.typicode.com/users`);
let checkTypeSW = fetch(`https://swapi.co/api/starships`);
console.log(checkType);
console.log(checkTypeSW);
let checkTypeGet = fetch(`https://jsonplaceholder.typicode.com/users`).then(data => JSON.parse(data)).then(data => console.log(data));
let checkTypeSWGet = fetch(`https://swapi.co/api/starships`).then(data => JSON.parse(data)).then(data => console.log(data));
console.log(checkTypeGet);
console.log(checkTypeSWGet);


function printUsers(table, people) {
    table.innerHTML = "";
    for(let viktor of people) {
        table.innerHTML += `<tr>
            <td>${viktor.name} </td>
            <td>${viktor.email} </td>
            <td>${viktor.phone} </td>
        `
    }        
}


// function filterUsers() {
//     // return people.indexOf().toUpperCase().toLowerCase()

    
// }

// date = people.filter(people => people.name)

// function submit() {
//     alert("I`m clicked")
// }

// submitButton.addEventListener("click", submit);
