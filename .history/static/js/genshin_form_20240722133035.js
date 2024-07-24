"use strict";

updatePlayerCount();
function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}

updatePlayerTable()
function updatePlayerTable() {
	let tbodyElement = document.getElementById("playerTableBody");
	let tableBodyHtml = "";
	for(let user of users) {
		tableBodyHtml += `<tr><td>${user.username}</td> <td>${user.dateJoined}</td> <td>${user.character}</td></tr>`;
	}
	tbodyElement.innerHTML = tableBodyHtml;
}