import { displayArray } from "./PushSuggestion.js";
import { updateNews } from "./PushNews.js";

export function adminDashboard(){
    // Lägg till nyhet
   document.getElementById("newsAdd").innerHTML = "Lägg till Nyhet";
   document.getElementById("newsFeed").style.display = "none";
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
    document.getElementById("suggestionBox").innerHTML = "Förslag från förslagslådan";

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

    // Ta bort förslag
    const removeSuggestion = document.createElement("button");
    removeSuggestion.classList = "sgstBtn";
    removeSuggestion.id = "removeSuggestion";
    removeSuggestion.innerHTML = "Nästa";
    document.getElementById("suggestionBox").appendChild(removeSuggestion);
    removeSuggestion.addEventListener("click", displayArray);


   // Skapa Omröstning
   document.querySelector(".voteOne").style.display = "none";
    document.getElementById("yesBtn1").style.display = "none";
    document.getElementById("noBtn1").style.display = "none";
    document.getElementById("vote").innerHTML = "Skapa Omröstning";

    const voteArea = document.createElement("textarea");
    voteArea.classList = ".dashboard";
    voteArea.id = "voteArea";
    voteArea.placeholder = "Skriv om";
    document.getElementById("vote").appendChild(voteArea);

    const br2 = document.createElement("br");
    document.getElementById("vote").appendChild(br2);


    //skapa omröstning
    const submitVote = document.createElement("button");
    submitVote.classList = "article";
    submitVote.id = "submitVote";
    submitVote.innerHTML = "Skapa";
    document.getElementById("vote").appendChild(submitVote);


    // Avsluta Omröstning
    document.getElementById("yesBtn2").style.display = "none";
    document.getElementById("noBtn2").style.display = "none";
    document.getElementById("blockchainStatus").innerHTML = "Avsluta Omröstning";
    document.getElementById("blockchainInput").innerHTML = document.getElementById("voteInput").innerHTML;
    
    

    const endVote = document.createElement("button");
    endVote.classList = "article";
    endVote.id = "endVote";
    endVote.innerHTML = "Sammanställ";
    document.getElementById("blockchain").appendChild(endVote);

    // Ändra knapp 
    const userBtn = document.createElement("a");
    userBtn.innerHTML = "User Dashboard";
    document.querySelector(".list-navbar").appendChild(userBtn);


    const adminBtn = document.getElementById("adminBtn");
    // adminBtn.innerHTML = "User Dashboard";
    adminBtn.removeEventListener("click", adminDashboard);
    adminBtn.style.display = "none";
    
    if (userBtn)
    userBtn.addEventListener("click", () => {
        window.location.reload();
    });

    document.getElementById("nextNews").remove();
}


