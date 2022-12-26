
const select = document.getElementById("options");
const addAlt = document.getElementById("addAltBtn");
var count = 2;


document.addEventListener("DOMContentLoaded", function() {
    const showtimeList = document.getElementById("showTimeList");
  });


export function printTimes() {
  showtimeList.innerHTML = "";

  // Retrieve the time sheet data from local storage
  const timeSheet = JSON.parse(localStorage.getItem("timeSheet"));
  
  timeSheet.map(work => {
    // Create a div element for each item in the time sheet
    let timeBox = document.createElement("div");
    timeBox.style.border = "1px solid black";
    timeBox.style.padding = "20px";
    timeBox.style.margin = "20px";
    timeBox.id = work.id;
    
    // Add the information from the time sheet item to the div element
    timeBox.innerHTML = "<p>"+"PREVIOUS HASH: "+work.prevHash+"<br/>"+work.data.user+"<br/>"+work.data.work+"<br/> Poll true or false: "+work.data.isPoll+"<br/>"+"THIS-HASH: "+work.hash+"</p>";
    
    // Append the div element to the showtimeList element
    showtimeList.appendChild(timeBox);

    // Create an option element for the select element
    var option = document.createElement("option");
    option.text = work.data.user;
    
    // Check if the value is already present in the select element
    var options = document.querySelectorAll("select option");
    const vals = [...options].map(el => el.value);
    if (!vals.includes(work.data.user)) {
      select.appendChild(option)
    }
  })
}

