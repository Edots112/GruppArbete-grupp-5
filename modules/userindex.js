export { loginUser, errorMsg, removeBorder, storeUserInput };
import { adminDashboard } from "./admin.js";

function loginUser(event) {
	event.preventDefault();

	fetch("residents.json")
		.then((response) => response.json())
		.then((data) => checkUser(data));

	async function checkUser(user) {
		const loginInput = document.getElementById("loginTextInput").value;
		const passwordInput = document.getElementById("passwordInput").value;

		for (const userInlog in user) {
			let userlogin = user[userInlog].username;
			let userPassword = user[userInlog].password;
			let isAdmin = user[userInlog].admin;

			if (userlogin === loginInput && userPassword === passwordInput) {
				storeUserInput();
				window.location.href = "dashboard.html";
				document.getElementById("loginForm").style.display = "none";
				console.log("user");
			}
			if (
				isAdmin === true &&
				userlogin === loginInput &&
				userPassword === passwordInput
			) {
				window.location.href = `dashboard.html?isAdmin=${isAdmin}`;
				storeUserInput();
				console.log("admin");
			} else {
				errorMsg();
				console.log("error");
			}
		}
	}
}

function errorMsg() {
	document.getElementById("loginTextInput").style.border = "2px solid red";
	document.getElementById("passwordInput").style.border = "2px solid red";
	document.getElementById("loginForm").style.border = "2px solid red";
	document.getElementById("loginBtn2").style.border = "2px solid red";
	document.getElementById("errorMsgLogin").innerHTML =
		"Fel användarnamn eller lösenord";
}

function removeBorder() {
	document.getElementById("loginTextInput").style.border = "2px solid black";
	document.getElementById("passwordInput").style.border = "2px solid black";
	document.getElementById("loginForm").style.border = "2px solid black";
	document.getElementById("loginBtn2").style.border = "2px solid black";
	document.getElementById("errorMsgLogin").innerHTML = "";
}

function storeUserInput() {
	const loginInput = document.getElementById("loginTextInput").value;
	localStorage.setItem("loginInput", loginInput);
}
