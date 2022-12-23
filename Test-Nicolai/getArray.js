
/* const adminUser = document.getElementById("adminUser");
const createBtn = document.getElementById("createBtn");
const desc = document.getElementById("desc");
const select = document.getElementById("options");
const addAlt = document.getElementById("addAltBtn");
const alt = document.getElementById("adminAlt");
let addid = 2; */
export default class getArray{

    constructor(counter, ngtArray){
        this.addid = counter;
        this.test = ngtArray;
    }

    collect(){
        this.test =[];
        var totalList = document.getElementById("adminAlt").getElementsByTagName("li").length;
        this.test.push(adminUser.value);
        for (let i = 1; i<=totalList; i++){
            this.test.push(document.getElementById("desc"+i).value);
            console.log("current desc id = "+document.getElementById("desc"+i).value);
        }
        console.log("Array = "+this.test);
        console.log("current addid count = "+totalList);
    }

    addOption(){

        this.addid+=1;
    
        var addList = document.getElementById('adminVy');
        var text = document.createElement('li');
        const alt = document.getElementById("adminAlt");
        text.style.cssText = 'margin-top:10px'
        text.innerHTML = "<label/> Alternativ "+this.addid+": <input type='text' id='desc"+this.addid+"' value='' name='items[]' />";
    
        if (this.addid<=5){
            alt.appendChild(text);
        }
    }

}