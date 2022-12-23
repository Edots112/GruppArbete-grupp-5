import { weatherAPI } from "./modules/fetch.js"; 
import {changeBackground , startChangeBackground} from "./modules/changeBackground.js";
import {scroll} from "./modules/scroll.js";
import {adminDashboard} from "./modules/admin.js";
import {storeData, retrieveData, displayArray, updateElement,} from "./modules/PushSuggestion.js";
import {updateNews, displayNews, retrieveNews, storeNews} from "./modules/PushNews.js";


// Hämtar väderdata från fetch.js
weatherAPI();
// Startar bakgrundsbild på userpage.html
 startChangeBackground(changeBackground);

	
 

  document.getElementById("adminBtn").addEventListener("click", () => {
    adminDashboard();
    retrieveData();
    displayArray();
});
 
 document.getElementById("sgstBtn").addEventListener("click", () => {
        console.log("submitArray");
        updateElement()
 });

//  document.getElementById("nextAttendBtn").addEventListener("click", () => {
//   removeElement()
// });

 window.addEventListener("unload", storeData);
 window.addEventListener("load", retrieveData);
 
document.getElementById("nextVoteBtn").addEventListener("click", () => {
  retrieveNews();
  displayNews();
  console.log("nextNews");
});

document.getElementById("nextNews").addEventListener("click", () => {
  retrieveNews();
  // updateNews();
  displayNews();
});

window.addEventListener("unload", storeNews);
 window.addEventListener("load", retrieveNews);

// // Eventlistener för scrollfunktion för index.html
// document.getElementById("scrollUp").addEventListener("click", () => scroll('up'));
// document.getElementById("scrollDown").addEventListener("click", () => scroll('down'));

//admin eventlistener

displayNews();