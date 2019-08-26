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

let mijnParagraaf = document.querySelector("h3");
window.addEventListener("mousemove", function(event) {
mijnParagraaf.innerHTML = "Muiscoördinaten: X="
+ event.pageX + "px, Y=" + event.pageY + "px";
});
