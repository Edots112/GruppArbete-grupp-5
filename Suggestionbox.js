	
let submitArray = ["Kan vi fixa en ny grill?"];
document.getElementById("newsOne").innerHTML = submitArray[0];
let index = 0;
const element = document.getElementById("newsOne");
const area = document.getElementById("sgstInput");

function displayArray() {
	element.innerHTML = submitArray[index];
	index++;
	if (index === submitArray.length) {
		index = 0;
	}
}

function updateElement() {
	submitArray.push(area.value);
	console.log(submitArray);
	displayArray();
}

document.getElementById("showCase").addEventListener("click", displayArray);
// Function to push from förslagslåda

document.getElementById("sgstBtn").addEventListener("click", updateElement);
