"use strict";

console.log(users);
updatePlayerCount();
updatePlayerTable();

const forms = document.querySelectorAll('.needs-validation')


Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()
        if (form.checkValidity()) {
            //append the new user to our users array
            updateUserDatabase()
            updatePlayerCount()
            updatePlayerTable()
            form.reset();
        } 

        form.classList.add('was-validated')
    }, false)
});

function updateUserDatabase(){
    let usernameValue = document.getElementById("usernameField").value;
    let charactersValue = document.getElementById("charactersField").value;

    let userObject = {
        username: usernameValue,
        character: charactersValue,
        dateJoined: "2024-07-22"
    }
    users.push(userObject)
    console.log(users);
}


function updatePlayerCount (){
    let playerCountElement = document.getElementById("playerCount");
    playerCountElement.innerHTML = users.length;
}

function updatePlayerTable() {
    // get element by ID of tbody
    let tbodyElement = document.getElementById("playerTableBody");
    let tableBodyHTML = "";

    //for loop to iterate each of the users, and append <tr> to innerHTML
    for (let i=0; i < users.length; i++){
        tableBodyHTML += <tr><td>${users[i].username}</td> <td>${users[i].dateJoined}</td> <td>${users[i].character}</td> </tr>;
        //append to tableBodyHTML string <tr></tr>
    }
    tbodyElement.innerHTML = tableBodyHTML;
}

function dummyData(){
    var dummyData = {
        username: "Nicholas",
        email: "imracist@gmail.com",
        password: "Ilovegymandhateniggers",
        dob: "2001-09-11",
        characters: "Kokomi",
        terms: true
    };

    document.getElementById("usernameField").value = dummyData.username;
    document.getElementById("emailField").value = dummyData.email;
    document.getElementById("passwordField").value = dummyData.password;
    document.getElementById("dobField").value = dummyData.dob;
    document.getElementById("charactersField").value = dummyData.characters;
    document.getElementById("termsField").checked = dummyData.terms;
}