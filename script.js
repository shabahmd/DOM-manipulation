// Get references to elements
const changeTextBtn = document.getElementById("changeTextBtn");
const paragraph = document.querySelector("p");

// Define a function to change the paragraph text
function changeText() {
    paragraph.textContent = "Text has been changed using DOM manipulation!";
}

// Attach a click event listener to the button
changeTextBtn.addEventListener("click", changeText);
