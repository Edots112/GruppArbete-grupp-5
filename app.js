import { weatherAPI } from "./modules/fetch.js";
import {
	changeBackground,
	startChangeBackground,
} from "./modules/changeBackground.js";
import { scroll } from "./modules/scroll.js";
import { adminDashboard } from "./modules/admin.js";
import {
	storeData,
	retrieveData,
	displayArray,
	updateElement,
} from "./modules/PushSuggestion.js";
import {
	updateNews,
	displayNews,
	retrieveNews,
	storeNews,
} from "./modules/PushNews.js";
import { loginUser, removeBorder } from "./modules/userindex.js";
import { getArray } from "./modules/getArray.js";
import Sheet from "./modules/sheet.js";
import Time from "./modules/time.js";
import { printTimes } from "./modules/printTimes.js";
import { displayBlockchain } from "./modules/showBlockchain.js";

var count = 2;
let alternativ = [];
let info = new getArray(count, alternativ);
let timeSheet = new Sheet();

let chain = localStorage.getItem("timeSheet");

if (chain) {
	timeSheet.timeSheet = JSON.parse(chain);
} else {
	console.log("No one is logged in.");
}

const userid = localStorage.getItem("loginInput");


addEventListener("DOMContentLoaded", function () {
	if (window.location.pathname === "/dashboard.html") {
		console.log("dashboard");
		displayNews();
		printTimes();
		timeSheet.findBlocksByUserId(userid);
		weatherAPI();
	} else {
		console.log("not dashboard");
	}
});

window.onload = function () {
	if (window.location.pathname === "/userpage.html") {
		// Startar bakgrundsbild på userpage.html
		startChangeBackground(changeBackground);
		weatherAPI();
	}
};

if (window.location.pathname === "/index.html") {
	document.getElementById("scrollUp").addEventListener("click", () => scroll('up'));
	document.getElementById("scrollDown").addEventListener("click", () => scroll('down'));
}


document.querySelector("body").addEventListener("click", function (e) {

	if (e.target.id === "adminBtn") {
		adminDashboard();
		retrieveData();
		displayArray();
		timeSheet.findPollBlocks();
	}

	if (e.target.id === "sgstBtn") {
		console.log("submitArray");
		updateElement();
	}

	if (e.target.id === "pushNews") {
		updateNews();
	}

	if (e.target.id === "nextNews") {
		retrieveNews();
		displayNews();
	}

	if (e.target.id === "checkSuggestionBox") {
		displayArray();
	}

	if (e.target.id === "loginBtn") {
		document.querySelector(".login-container").style.display = "block";
		document.getElementById("loginTextInput").focus();
	}

	if (e.target.id === "closeBtn") {
		document.querySelector(".login-container").style.display = "none";
		removeBorder();
	}

	if (e.target.id === "loginBtn2") {
		loginUser(e);
	}

	if (e.target.id === "addAlt") {
		info.addOption();
	}

	if (e.target.id === "saveWorkBtn") {
		let newWorkTime = {
			//QUESTION
			user: options.value,
			work: "Röstade för: " + work.value,
			isPoll: 0,
		};

		// ÄNDRA
		timeSheet.addTime(new Time(newWorkTime));

		setTimeout(printTimes, 100);
		console.log(timeSheet.timeSheet);
		printTimes();
		timeSheet.findPollBlocks();
	}
	if (e.target.id === "createBtn") {
		info.collect();
		console.log(timeSheet.timeSheet);

		// SKAPA NY POLL
		let newWorkTime = {
			user: "Val om: " + adminUser.value,
			work: "Alternativ: " + info.test.slice(1).join(" , "),
			isPoll: 1,
		};

		// ÄNDRA
		timeSheet.addTime(new Time(newWorkTime));

		setTimeout(printTimes, 100);
	}

	if (e.target.id === "saveBtn") {
		localStorage.setItem("timeSheet", JSON.stringify(timeSheet));
		console.log("Sparat");
	}


	if (e.target.id === "checkBlockChain") {
		console.log("checkBlockChain");
		const timeSheetString = localStorage.getItem("timeSheet");
		timeSheet = new Sheet(JSON.parse(timeSheetString));
		displayBlockchain();
		const element = document.getElementById('checkBlockChain'); 

		element.removeEventListener('click', updateElementBorder);

	}

	if (e.target.id === "closeButton") {
		document.getElementById("showtimeList").remove();
	}

	if (e.target.id === "validateButton") {
		timeSheet.isChainValid();
		console.log("isChainValid");
		updateElementBorder()
	}
});

window.addEventListener("unload", storeData);
window.addEventListener("load", retrieveData);

window.addEventListener("unload", storeNews);
window.addEventListener("load", retrieveNews);


function createAdminButton() {

	const url = window.location.href;

	const params = new URLSearchParams(url.split("?")[1]);
	console.log(params);

	if (params.has("isAdmin")) {
		const adminBtn = document.createElement("a");
		adminBtn.innerHTML = "Admin";
		adminBtn.className = "list-navbar";
		adminBtn.id = "adminBtn";
		const adminLink = document.createElement("li");
		adminLink.appendChild(adminBtn);

		document.getElementById("dashboardNav").appendChild(adminLink);
	}
}

window.addEventListener("load", createAdminButton);


async function updateElementBorder() {
	const elements = document.querySelectorAll('.timeBox'); 
	const validateButton = document.getElementById("validateButton"); 
  
	elements.forEach(async element => {
	  if (await timeSheet.isChainValid()) { 
		element.style.backgroundColor = 'green';
		validateButton.innerHTML = "Validerad"
		validateButton.style = "background-color: " + "green";
	  } else {
		element.style.border = '2px solid red'; 
	  }
	});
  }
