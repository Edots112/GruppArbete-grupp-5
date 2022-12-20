

const users = [{ login: "admin", password: "admin" }];

function loginUser(event) {
	event.preventDefault();
	const loginInput = document.getElementById("loginTextInput").value;
	const passwordInput = document.getElementById("passwordInput").value;

	const userFound = users.find(function (user) {
		return user.login === loginInput && user.password === passwordInput;
	});
	if (userFound) {
		document.querySelector(".login-container").style.display = "none";
		window.location.href = "/userpage.html";
		removeBorder();
		storeUserInput();
	} else {
		errorMsg();
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

document.getElementById("loginBtn").addEventListener("click", function (e) {
	document.querySelector(".login-container").style.display = "block";
	document.getElementById("loginTextInput").focus();
});

//create a exit button for the signup page
document.querySelector(".close-btn").addEventListener("click", function (e) {
	document.querySelector(".login-container").style.display = "none";
	removeBorder();
});

document
	.getElementById("loginBtn2")
	.addEventListener("click", function (event) {
		loginUser(event);
	});



		