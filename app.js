import { weatherAPI } from "./fetch.js"; 
import {changeBackground , startChangeBackground} from "./changeBackground.js";
import {scroll} from "./scroll.js";
import {adminDashboard} from "./admin.js";


// Byter bakground på userpage.html
// Hämtar väderdata från fetch.js
weatherAPI();
// Startar bakgrundsbild på userpage.html
 startChangeBackground(changeBackground);


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



document.getElementById("adminBtn").addEventListener("click", adminDashboard);


// // Eventlistener för scrollfunktion för index.html
document.getElementById("scrollUp").addEventListener("click", () => scroll('up'));
document.getElementById("scrollDown").addEventListener("click", () => scroll('down'));

//admin eventlistener 