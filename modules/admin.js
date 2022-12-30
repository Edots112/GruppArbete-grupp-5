import { displayArray } from "./PushSuggestion.js";
import { updateNews } from "./PushNews.js";

export function adminDashboard() {
	document.getElementById("dateTimeNews").remove();
	document.getElementById("idNews").remove();
	document.getElementById("newsAdd").innerHTML = "Lägg till Nyhet";
	document.getElementById("newsFeed").remove();

	const textArea = document.createElement("textarea");
	textArea.classList = ".dashboard";
	textArea.id = "news";
	textArea.placeholder = "Skriv nyhet här";
	document.getElementById("newsAdd").appendChild(textArea);

	// Line break
	const br = document.createElement("br");
	document.getElementById("newsAdd").appendChild(br);

	const PushNewsBtn = document.createElement("button");
	PushNewsBtn.classList = "article";
	PushNewsBtn.id = "pushNews";
	PushNewsBtn.innerHTML = "Lägg till";
	document.getElementById("newsAdd").appendChild(PushNewsBtn);
	PushNewsBtn.addEventListener("click", updateNews);

	// Förslag från förslagslådan
	document.getElementById("sgstInput").style.display = "none";
	document.getElementById("sgstBtn").style.display = "none";
	document.getElementById("suggestionBox").innerHTML =
		"Förslag från förslagslådan";

	// Datum
	const dateTime = document.createElement("h5");
	dateTime.id = "dateTime";
	dateTime.style.fontSize = "20px";
	document.getElementById("suggestionBox").appendChild(dateTime);

	const fromSuggestions = document.createElement("p");
	fromSuggestions.innerHTML = "Förslag från förslagslådan";
	fromSuggestions.id = "fromSuggestions";
	fromSuggestions.style.fontSize = "15px";
	fromSuggestions.style.fontWeight = "500";
	document.getElementById("suggestionBox").appendChild(fromSuggestions);

	// Kolla förslagslådan
	const checkSuggestionBox = document.createElement("button");
	checkSuggestionBox.classList = "article";
	checkSuggestionBox.id = "checkSuggestionBox";
	checkSuggestionBox.innerHTML = "Nästa förslag";
	document.getElementById("suggestionBox").appendChild(checkSuggestionBox);

	// Skapa Omröstning
	document.querySelector(".voteOne").style.display = "none";
	document.getElementById("vote").innerHTML = "Skapa Omröstning";

	// Avsluta Omröstning
	document.getElementById("blockchainStatus").innerHTML = "Avsluta Omröstning";
	const blockElements = document.querySelectorAll(".blockElement");
	for (const element of blockElements) {
		element.remove();
	}

	const endVote = document.createElement("button");
	endVote.classList = "article";
	endVote.id = "endVote";
	endVote.innerHTML = "Sammanställ";
	document.getElementById("blockchain").appendChild(endVote);

	// Ändra knapp
	const li = document.createElement("li");
	const userBtn = document.createElement("a");
	userBtn.innerHTML = "User Dashboard";
	li.appendChild(userBtn);
	document.querySelector(".list-navbar").appendChild(li);

	const adminBtn = document.getElementById("adminBtn");
	adminBtn.removeEventListener("click", adminDashboard);
	adminBtn.style.display = "none";

	const parentElement = document.getElementById("vote");

	const div = `
      <div>
        <input type="text" id="adminUser" placeholder="Vad ska vi rösta om">
        <br>
        <ul id="adminAlt">
          <li>
            <label for="desc1">Alternativ 1:</label>
            <input id="desc1" type="text" placeholder="Alternativ 1:">
          </li>
          <li>
            <label for="desc2">Alternativ 2:</label>
            <input id="desc2" type="text" placeholder="Alternativ 2:">
          </li>
        </ul>
        <button id="addAlt">Lägg till</button>
        <button id="createBtn">Skapa</button>
        
      </div>
    `;
	parentElement.insertAdjacentHTML("beforeend", div);

	document.getElementById("userVote").remove();

	if (userBtn)
		userBtn.addEventListener("click", () => {
			window.location.reload();
		});

	document.getElementById("nextNews").remove();
}
