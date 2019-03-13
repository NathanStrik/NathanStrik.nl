// Maak variabele aan voor de hamburgerknop

var knopje = document.getElementById("navBtn");
var navMenu = document.getElementById("navBar");


// Functie om knop van CSS-stijl te laten wisselen

function changeStyle() {

	"use strict";

	if (knopje.classList.contains("is-active") === true) {

		knopje.classList.remove("is-active");
		navMenu.classList.remove("is-active");

	} else {

		knopje.classList.add("is-active");
		navMenu.classList.add("is-active");

	}

}

// Luister naar de button en voer de functie uit

knopje.addEventListener("click", changeStyle);