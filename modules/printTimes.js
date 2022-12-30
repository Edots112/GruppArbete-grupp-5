import Time from "./time.js";

const select = document.getElementById("options");
var count = 2;

document.addEventListener("DOMContentLoaded", function () {
	const showtimeList = document.getElementById("showTimeList");
});

export function printTimes() {
	showtimeList.innerHTML = "";

	const timeSheet = JSON.parse(localStorage.getItem("timeSheet"));

	timeSheet.map((work) => {
		let timeBox = document.createElement("div");
		timeBox.style.border = "1px solid black";
		timeBox.classList.add("timeBox");

		timeBox.innerHTML =
			"<p>" +
			"PREVIOUS HASH: " +
			work.prevHash +
			"<br/>" +
			work.data.user +
			"<br/>" +
			work.data.work +
			"<br/> Poll true or false: " +
			work.data.isPoll +
			"<br/>" +
			"THIS-HASH: " +
			work.hash +
			"</p>";

		showtimeList.appendChild(timeBox);

		if (select) {
			var option = document.createElement("option");
			option.text = work.data.user;

			var options = document.querySelectorAll("select option");
			const vals = [...options].map((el) => el.value);
			if (!vals.includes(work.data.user)) {
				select.appendChild(option);
			}
		}
	});
}
