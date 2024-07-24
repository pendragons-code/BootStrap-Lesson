"use strict";

console.log(users);

async function fetchSite() {
	let main = await fetch("https://www.sp.edu.sg/");
	console.log(main);
}

fetchSite()