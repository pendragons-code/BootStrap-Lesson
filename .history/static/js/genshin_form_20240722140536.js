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
	let document.getElementById("usernameField").value = dummyData.username;
	let document.getElementById("emailField").value = dummyData.email;
	let document.getElementById("passwordField").value = dummyData.password;
	let document.getElementById("dobField").value = dummyData.dob;
	let document.getElementById("charactersField").value = dummyData.characters;
	let document.getElementById("termsField").value = dummyData.terms;

}

function  updateUserDatabase() {
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
	document.getElementById("charactersField").value = dummyData.characters;
	document.getElementById("termsField").value = dummyData.terms;

}


		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')
		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', event => {
					event.preventDefault()
					event.stopPropagation()
					if (!form.checkValidity()) {
						updateUserDatabase();
						
					}
					form.classList.add('was-validated')
				}, false)
			})