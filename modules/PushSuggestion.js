export { updateElement, displayArray, storeData, retrieveData };

let suggestionArray = [{ id: 0, suggestion: "Test", date: new Date() }];
let getDate = new Date();


function displayArray() {
	let element = document.getElementById("fromSuggestions");
	let getDate = document.getElementById("dateTime");
	let id = document.getElementById("id");
	let counter = 0;

	element.innerHTML = suggestionArray[counter].suggestion;
	getDate.innerHTML = suggestionArray[counter].date;
	id.innerHTML = suggestionArray[counter].id + 1;

	counter++;

	if (counter >= suggestionArray.length) {
		counter = 0;
	}
}

function updateElement() {
	const area = document.getElementById("sgstInput");

	let newQuestion = {
		id: suggestionArray.length,
		suggestion: area.value,
		date: getDate.toLocaleString(),
	};
	suggestionArray.push(newQuestion);
	console.log(suggestionArray);
	localStorage.setItem("suggestionArray", JSON.stringify(suggestionArray));
}

function retrieveData() {
	const storedData = JSON.parse(localStorage.getItem("suggestionArray")) || [];
	suggestionArray = storedData;
}

function storeData() {
	localStorage.setItem("suggestionArray", JSON.stringify(suggestionArray));
}
