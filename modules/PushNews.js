
export {updateNews, displayNews, storeNews, retrieveNews};

let NewsArray = [{id: 0, suggestion: "Rekord varmt i kommunen!", date: new Date()}];
let getDate = new Date();
let counter = 0; 

function displayNews() {
 let element = document.getElementById("newsFeed");
 let getDate = document.getElementById("dateTimeNews");
 let id = document.getElementById("idNews");

 element.innerHTML = NewsArray[counter].suggestion ;
 getDate.innerHTML = NewsArray[counter].date.toLocaleString();
 id.innerHTML = NewsArray[counter].id + 1;

 counter++;

 if (counter >= NewsArray.length) {
   counter = 0;
 }
}

function updateNews() {
 const area = document.getElementById("news");

 let news = {
   id: NewsArray.length,
   suggestion: area.value,
   date: getDate.toLocaleString()
 }
	NewsArray.push(news);
	console.log(NewsArray);
	localStorage.setItem("NewsArray", JSON.stringify(NewsArray));
}

function retrieveNews() {
   const storedData = JSON.parse(localStorage.getItem("NewsArray")) || [];
   NewsArray = storedData;
 }

 function storeNews() {
   localStorage.setItem("NewsArray", JSON.stringify(NewsArray));
 }
