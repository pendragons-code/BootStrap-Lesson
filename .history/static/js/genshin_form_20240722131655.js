"use strict";

updatePlayerCount();
async function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}

function updatePlaterTable() {
	let tbodyElement = document.getElementById("playerTableBody");
	let tableBodyHtml = "";
	for(user of users) {
		tableBodyHtml += `<tr><td>${user.username}</td></tr>`
	}
	tbodyElement.innerHTML = tableBodyHtml;
}