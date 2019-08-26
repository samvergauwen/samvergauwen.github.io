let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);

let darkLink = document.querySelectorAll("nav a")[5];
let lightLink = document.querySelectorAll("nav a")[6];
let mijnBody = document.querySelector("body");
function switchToLight() {
	mijnBody.classList.add("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

let mijnParagraaf = document.querySelector("h3");
window.addEventListener("mousemove", function(event) {
mijnParagraaf.innerHTML = "Muiscoördinaten: X="
+ event.pageX + "px, Y=" + event.pageY + "px";
});
