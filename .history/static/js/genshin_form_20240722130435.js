"use strict";

updatePlayerCount();
async function updatePlayerCount() {
	let playerCountElement = document.getElementById("playerCount");
	playerCountElement.innerHTML = users.length;
	let main = await fetch("https://pendragonscode.xyz/")
	console.log(main);
}