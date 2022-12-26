export {loginUser, errorMsg, removeBorder, storeUserInput};
import {adminDashboard} from './admin.js';

function loginUser (event) {
    event.preventDefault();

    fetch("residents.json")
    .then((response) => response.json())
    .then((data) => checkUser(data));    

    function checkUser(user) {
        const loginInput = document.getElementById("loginTextInput").value;
        const passwordInput = document.getElementById("passwordInput").value;
		

        for (const userInlog in user) {
            let userlogin = user[userInlog].username;              
            let userPassword = user[userInlog].password;
			// let isAdmin = user[userInlog].admin;

            if (userlogin === loginInput && userPassword === passwordInput) {
                storeUserInput();
                window.location.href = "dashboard.html";
				document.getElementById("loginForm").style.display = "none";
				// document.getElementById("A").style.display = "none";
			}
			//  if (isAdmin)  {
			// 	const adminBtn = document.createElement("adminBtn");
			// 	adminBtn.innerHTML = "Admin";
			// 	adminBtn.id = "adminBtn";
			// 	document.getElementById("body").appendChild(adminBtn);
			// 	console.log("admin");
			// 	adminDashboard();
			 else {
				errorMsg();
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


