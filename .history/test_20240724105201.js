"use strict";

const providedUserName = "johndoe"

let users = [
	{
		username: "johndoe",
		character: "Nahida",
		dateJoined: "2024-01-01"
	},
	{
		username: "heehee",
		character: "Zhongli",
		dateJoined: "2024-01-01"
	},
	{
		username: "haaahaaa",
		character: "Kokomi",
		dateJoined: "2024-01-01"
	},
	{
		username: "hehehaha",
		character: "Nahida",
		dateJoined: "2024-01-01"
	},
	{
		username: "hahahehe",
		character: "Nahida",
		dateJoined: "2024-01-01"
	},
	{
		username: "weeeee",
		character: "Nahida",
		dateJoined: "2024-01-01"
	},
];

let result = true;

for(user of users) {
	if(users.username == providedUserName) result = false;
}
return result;