export function toggleScale() {
  let scale = 1;
  // Select the element
  let element = document.getElementById("sgstBtn");

  // Toggle the scale
  if (scale === 1) {
    scale = 1.2;
  } else {
    scale = 1;
  }


  // Set the transform property
  element.style.transform = "scale(" + scale + ")";
}