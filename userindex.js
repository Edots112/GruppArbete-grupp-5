

const pictures = [
    "url('/img/brf 1.jpg')",
    "url('/img/brf 2.jpg')",
    "url('/img/brf 3.jpg')",
    "url('/img/jakobselfie.jpg')",
  ];
let currentPicture = 0;

  function changeBackground() {   
    currentPicture = (currentPicture + 1) % pictures.length;
    console.log(currentPicture);
    document.getElementById("userpage").style.backgroundImage = pictures[currentPicture];
    console.log("change");
    if (currentPicture == 0) {
        document.getElementById("quote").innerHTML = "# Vi är här för dig";
    } else if (currentPicture == 1) {
        document.getElementById("quote").innerHTML = "# Naturen är så vacker";
    } else if (currentPicture == 2) {
        document.getElementById("quote").innerHTML = "# Vilken utsikt";
        } else {
        document.getElementById("quote").innerHTML = "# Vi lever i ett fint samhälle ";
  }

}

setInterval(changeBackground, 5000);


const users =  [ { login: "admin", password: "admin" } ];



function loginUser (event) {
    event.preventDefault();
    const loginInput = document.getElementById("loginTextInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    const userFound = users.find(function (user) {
        return user.login === loginInput && user.password === passwordInput;
    });
    if (userFound) {
        document.querySelector(".login-container").style.display = "none";
        window.location.href = "/userpage.html";
        removeBorder()
        storeUserInput()
    } else {
        errorMsg()
    }
}


function errorMsg(){
document.getElementById("loginTextInput").style.border = "2px solid red";
document.getElementById("passwordInput").style.border = "2px solid red";
document.getElementById("loginForm").style.border = "2px solid red";
document.getElementById("loginBtn2").style.border = "2px solid red";
document.getElementById("errorMsgLogin").innerHTML = "Fel användarnamn eller lösenord";
}

function removeBorder(){
    document.getElementById("loginTextInput").style.border = "2px solid black";
    document.getElementById("passwordInput").style.border = "2px solid black";
    document.getElementById("loginForm").style.border = "2px solid black";
    document.getElementById("loginBtn2").style.border = "2px solid black";
    document.getElementById("errorMsgLogin").innerHTML = "";
}


function storeUserInput() {
    const loginInput = document.getElementById("loginTextInput").value;
    localStorage.setItem("loginInput", loginInput);
}

    

document.getElementById("loginBtn").addEventListener("click", function(e) {
    document.querySelector(".login-container").style.display = "block";
    document.getElementById("loginTextInput").focus();
} );

//create a exit button for the signup page
document.querySelector(".close-btn").addEventListener("click", function(e) {
    document.querySelector(".login-container").style.display = "none";
    removeBorder()
} );

document.getElementById("loginBtn2").addEventListener("click", function(event) {
   loginUser(event);  

} );




function scrollUp() {
    window.scrollBy(0, -window.innerHeight);
}



document.getElementById("scrollUp").addEventListener("click", scrollUp);





function scrollDown() {
    window.scrollBy(0, window.innerHeight);

}



//eventlistener for the scroll down button

document.getElementById("scrollDown").addEventListener("click", scrollDown);




