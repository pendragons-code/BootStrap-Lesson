"use strict";

updatePlayerCount();
async function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}

function updatePlaterTable() {
	let tbodyElement = document.getElementById("playerTableBody");
	let tableBodyHtml = "";
	tbodyElement.innerHTML = tableBodyHtml;
}