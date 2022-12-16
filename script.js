import Sheet from "./sheet.js";
import Time from "./time.js";

const user = document.getElementById("user");
const work = document.getElementById("work");
const saveWorkBtn = document.getElementById("saveWorkBtn");
const showtimeList = document.getElementById("showTimeList");
const validateBtn = document.getElementById("validateBtn");
const editBtn = document.getElementById("editBtn");
const adminUser = document.getElementById("adminUser");
const createBtn = document.getElementById("createBtn");
const desc = document.getElementById("desc");
const select = document.getElementById("options");

// SKAPA VÅR KEDJA
let timeSheet = new Sheet();

validateBtn.addEventListener("click", () => {
    console.log("Börjar validering");
    timeSheet.isChainValid();
})


/////////////////////
/////////EDIT////////
/////////////////////

editBtn.addEventListener("click", () => {

    timeSheet.timeSheet[2].data.work = "Ändrad alternativ";
    timeSheet.timeSheet[2].data.user = "Ändrad val";
    printTimes();
});

/////////////////////
/////////VOTE////////
/////////////////////

saveWorkBtn.addEventListener("click", () => {


        // SKAPA NYTT OBJEKT
        let newWorkTime = {
            //user: user.value,
            user: options.value,
            work: "Röstade för: "+work.value,
            isPoll: 0
        }

        // ÄNDRA
        timeSheet.addTime(new Time(newWorkTime));

    setTimeout(printTimes, 100);
})

/////////////////////
////////CREATE///////
/////////////////////

createBtn.addEventListener("click", () => {


    // SKAPA NY POLL
    let newWorkTime = {
        user: "Val om: "+adminUser.value,
        work: "Alternativ: "+desc.value,
        isPoll: 1
    }

    // ÄNDRA
    timeSheet.addTime(new Time(newWorkTime));

setTimeout(printTimes, 100);
})


/////////////////////
//////PUSH-BLOCK/////
/////////////////////

function printTimes() {
    showtimeList.innerHTML = "";

    timeSheet.timeSheet.map(work => {

        //Skapar ett element av typen option som har namnet från user-informationen
        var option = document.createElement("option");
        //Innehållet 
        option.text = work.data.user;
        //Skapar ett värde för allt inom html:en som har select option
        var options = document.querySelectorAll("select option");
        //Gör options till en array
        const vals = [...options].map(el => el.value); 

        //console.log(vals);
        //console.log("work data user: "+work.data.user+" --- ", "work data isPoll.value: "+work.data.isPoll.value+" --- ", "work data isPoll: "+work.data.isPoll+" --- ");   
        //Check for duplicates, if there are no duplicates, append work.data.user (poll name)

        if (work.data.isPoll === 1){
            for(let i=0; i<vals.length; i++){
                //select.setAttribute("value", option)
                console.log(vals);
                if(!vals.includes(work.data.user)){
                select.appendChild(option)
                //option.setAttribute("value", option.value)
              }
                else{
                    console.log(vals[i]+" finns");
                }
            }
        }


/////////////////////
////////LAYOUT///////
/////////////////////

        let timeBox = document.createElement("div");
        timeBox.style.border = "1px solid black";
        timeBox.style.padding = "20px";
        timeBox.style.margin = "20px";
    
        timeBox.id = work.id;
        //Skriver ut förra, och nuvarande hashen (ej synligt i vanlig vy), skriver ut vad man röstar om och valda alternativ,
        timeBox.innerHTML = "<p>"+"PREVIOUS HASH: "+work.prevHash+"<br/>"+work.data.user+"<br/>"+work.data.work+"<br/> Poll true or false: "+work.data.isPoll+"<br/>"+"THIS-HASH: "+work.hash+"</p>";
        
        showtimeList.appendChild(timeBox);
    })
}