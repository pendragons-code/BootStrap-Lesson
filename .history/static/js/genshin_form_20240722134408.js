"use strict";

updatePlayerCount();
function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}

function updatePlayerTable() {
	let tbodyElement = document.getElementById("playerTableBody");
	let tableBodyHtml = "";
	for(let user of users) {
		tableBodyHtml += `<tr><td>${user.username}</td> <td>${user.dateJoined}</td> <td>${user.character}</td></tr>`;
	}
	console.log(tableBodyHtml)
	tbodyElement.innerHTML = tableBodyHtml;
}
updatePlayerTable();

function dummyData() {
	var dummyData = {
		username: "john_doe",
		email: "john.doe@example.com",
		password: "password123",
		dob: "1990-01-01",
		characters: "Nahida",
		terms: true
	}

	document.getElementById("usernameField").value = dummyData.username;
	document.getElementById("emailField").value = dummyData.email;
	document.getElementById("passwordField").value = dummyData.password;
	document.getElementById("dobField").value = dummyData.dob;
	document.getElementById("usernameField").value = dummyData.characters;
	document.getElementById("usernameField").value = dummyData.terms;

}