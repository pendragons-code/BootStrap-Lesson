"use strict";

updatePlayerCount();
function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
}