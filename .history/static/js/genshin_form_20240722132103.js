"use strict";

updatePlayerCount();
async function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}
updatePlayerTable()
function updatePlayerTable() {
	let tbodyElement = document.getElementById("playerTableBody");
	let tableBodyHtml = "";
	for(let user of users) {
		tableBodyHtml += `<tr><td>${user.username}</td> <td>${user.dateJoined}</td> <td>${user.character}</td></tr>`;
		tableBodyHtml += ""
	}
	tbodyElement.innerHTML = tableBodyHtml;
}