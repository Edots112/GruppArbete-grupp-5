const pictures = [
    "url('/img/brf 1.jpg')",
    "url('/img/brf 2.jpg')",
    "url('/img/brf 3.jpg')",
    "url('/img/jakobselfie.jpg')",
];

let currentPicture = 0;

export function changeBackground() {
    
	currentPicture = (currentPicture + 1) % pictures.length;
	console.log(currentPicture);
	document.getElementById("userpage").style.backgroundImage =
		pictures[currentPicture];
	console.log("change");
	switch (currentPicture) {
        case 0:
          document.getElementById("quote").innerHTML = "# Vi är här för dig";
          break;
        case 1:
          document.getElementById("quote").innerHTML = "# Naturen är så vacker";
          break;
        case 2:
          document.getElementById("quote").innerHTML = "# Vilken utsikt";
          break;
        default:
          document.getElementById("quote").innerHTML = "# Vi lever i ett fint samhälle ";
          break;
      }

}


export function startChangeBackground(changeBackground){
  if (document.getElementById("userpage")) {
      setInterval(changeBackground, 5000);
  } else {
      clearInterval(changeBackground);
  }
}
