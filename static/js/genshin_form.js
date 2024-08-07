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
	document.getElementById("charactersField").value = dummyData.characters;
	document.getElementById("termsField").value = dummyData.terms;

}

function  updateUserDatabase() {
	let usernameValue = document.getElementById("usernameField").value;
	let charactersValue = document.getElementById("chractersField").value;

	let userObject = {
		username: usernameValue,
		charcter: charactersValue,
		dateJoined: "2024-07-22"
	}
	users.push(userObject)
}


		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')
		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', event => {
					event.preventDefault()
					event.stopPropagation()
					if(form.checkValidity()) {
					if (!form.checkValidity() && isPasswordComplex()) {
						updateUserDatabase();
						updatePlayerCount();
						updatePlayerTable();
						form.reset();
						document.getElementById("passwordField").classList.remove("is-invalid");
						document.getElementById("usernameField").classList.remove("is-invalid");
					} else {
						if(!isUsernameUnique()) {
						document.getElementById("usernameError").classList.add("d-none");
						document.getElementById("usernameUniqueError").classList.remove("d-none");
						document.getElementById("usernameField").classList.add("is-invalid");
						}
						if(!isPasswordComplex()) {
							document.getElementById("passwordError").classList.add("d-none");
							document.getElementById("passwordComplexError").classList.remove("d-none");
							document.getElementById("passwordField").classList.add("is-invalid");
						}
					}
					} else {
					form.classList.add('was-validated');
					}
				}, false)
			})


			function isPasswordComplex() {
				let password = document.getElementById("passwordField").value;
				let passwordRegex = /^[a-zA-Z\d]{8,}$/;
				let result = passwordRegex.test(password);
				return result;
			}


function isUsernameUnique() {
	let result = true;
	let username = document.getElementById("usernameField").value;
	for(let i=0; i  < users.length; ++i) {
		if(users[i].username === username) result = false
		break;
	}
	return result;
}