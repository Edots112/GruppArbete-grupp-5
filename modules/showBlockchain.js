import { printTimes } from "./printTimes.js";

export function displayBlockchain() {
	const blockchainDiv = document.createElement("div");
	blockchainDiv.id = "showtimeList";
	document.body.appendChild(blockchainDiv);

	printTimes();
	const closeButton = document.createElement("span");
	closeButton.id = "closeButton";
	closeButton.innerHTML = "&times;";
	document.getElementById("showtimeList").appendChild(closeButton);

	const validateButton = document.createElement("button");
	validateButton.id = "validateButton";
	validateButton.innerHTML = "Validera blockkedjan";
	document.getElementById("showtimeList").appendChild(validateButton);
}
