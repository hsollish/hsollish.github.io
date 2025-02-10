const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pizza.jpg") {
    myImage.setAttribute("src", "images/pizza-ingredients.jpg");
  } else {
    myImage.setAttribute("src", "images/pizza.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Do you love pizza, ${myName}?`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Do you love pizza, ${storedName}?`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
