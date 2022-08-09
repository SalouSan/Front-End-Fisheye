import {Photographer} from "../models/photographer.js";

let api_url = "data/photographers.json";
const article = document.querySelector(".photographer_section");
const getPhotographers = async function () {
	let response = await fetch (api_url);
	let data = await response.json();
	let headerIndex = document.querySelector("header");
	headerIndex.setAttribute("role", "banner");
	article.innerHTML = renderPhotographers(data);
	function renderPhotographers (data) {
		const displayArtists = data.photographers.map((artist) =>{
			let photographer = new Photographer(artist);
			return photographer.display();
		}
		).join(" ");
		return `${displayArtists}`;
        

	}
	let locations = document.querySelectorAll(".photographer__profil--location");
	console.log(locations);

	// Tabindex sur elements de la page //

	let logo = document.querySelector(".logo");
	logo.setAttribute("tabindex", "1");
	
	let h1 = document.querySelector("h1");
	h1.setAttribute("tabindex", "2");

	let img = document.querySelectorAll(".photographer__profil--portrait");
	img.forEach((img) => {
		img.setAttribute("tabindex", "3");
	});

	let names = document.querySelectorAll(".photographer__profil--name");
	names.forEach((name) => {
		name.setAttribute("tabindex", "3");
	});

	let location = document.querySelectorAll(".photographer__profil--location");
	location.forEach((loc)=>{
		loc.setAttribute("tabindex", "3");
	});

	let taglines = document.querySelectorAll(".photographer__profil--tagline");
	taglines.forEach((tagline) => {
		tagline.setAttribute("tabindex", "3");
	});
	let prices = document.querySelectorAll(".photographer__profil--price");
	prices.forEach((price) => {
		price.setAttribute("tabindex", "3");
	});
   
};

getPhotographers();




  

