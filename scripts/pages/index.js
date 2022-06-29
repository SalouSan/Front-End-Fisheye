import {Photographer} from "../models/photographer.js";

let api_url = "data/photographers.json";
const article = document.querySelector(".photographer_section");
const getPhotographers = async function () {
	let response = await fetch (api_url);
	let data = await response.json();
	console.log(data);
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
   
};

getPhotographers();




  

