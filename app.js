import { weatherAPI } from "./fetch.js"; 
import {changeBackground , startChangeBackground} from "./changeBackground.js";
import {scroll} from "./scroll.js";
import {adminDashboard} from "./admin.js";


// Byter bakground på userpage.html
// Hämtar väderdata från fetch.js
weatherAPI();
// Startar bakgrundsbild på userpage.html
 startChangeBackground(changeBackground);

	
//  let submitArray = [{suggestion: , date: new Date()}];
//  let index = 0;
//  const area = document.getElementById("sgstInput");
//  const getDate = new Date();

//  function displayArray() {
//     let element = document.getElementById("fromSuggestions");
//     let getDate = document.getElementById("date");
//      element.innerHTML = submitArray[index];
//      index++;
//      if (index === submitArray.length) {
//          index = 0;
//      }
//  }
 
//  function updateElement() {
//      submitArray.push(getDate.toLocaleString() + " " + area.value);
//      console.log(submitArray);
//      localStorage.setItem("submitArray", JSON.stringify(submitArray));
//  }

 function retrieveData() {
    // Get the stored data from local storage
    const storedData = JSON.parse(localStorage.getItem("submitArray")) || [];
  
    // Update the submitArray variable with the stored data
    submitArray = storedData;
  }

  document.getElementById("adminBtn").addEventListener("click", () => {
    adminDashboard();
    retrieveData();
    displayArray();
});

 
 document.getElementById("showCase").addEventListener("click", displayArray);
 // Function to push from förslagslåda
 
 document.getElementById("sgstBtn").addEventListener("click", () => {
        console.log("submitArray");
        updateElement();
 });




// function getDateTime () {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
//     // tolocalestring
//     document.getElementById("todayDate").innerHTML = dateTime;
// }
//  setInterval(getDateTime, 1000);






// // Eventlistener för scrollfunktion för index.html
document.getElementById("scrollUp").addEventListener("click", () => scroll('up'));
document.getElementById("scrollDown").addEventListener("click", () => scroll('down'));

//admin eventlistener