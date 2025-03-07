let btn = document.querySelector("#btn");
let btnBack = document.querySelector("#btn-background");
let mainColor = document.querySelector("body");
let color = "white";
let mainHeading = document.querySelector("h2");

btn.addEventListener("click", () => {
  if (color === "white") {
    color = "black";
    btnBack.style.backgroundColor = "white";
    btn.setAttribute("id", "btn-active");
    mainColor.style.backgroundColor = "black";
    mainColor.style.transition = "all 0.5s ease";
    mainHeading.style.color = "white";
  } else if (color === "black") {
    color = "white";
    btnBack.style.backgroundColor = "black";
    mainColor.style.backgroundColor = "white";
    mainColor.style.transition = "all 0.5s ease";
    btn.setAttribute("id", "btn");
    mainHeading.style.color = "black";
  }
});