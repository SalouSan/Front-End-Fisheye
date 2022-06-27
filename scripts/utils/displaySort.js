console.log("displaySort");
import {Media} from "../factories/MediaFactory.js";   
import { getArtist } from "../pages/photographer.js";
import { media,likes,idPhotographer,} from "../pages/photographer.js";
getArtist();
export function displaySort  () {
	
	const date = document.querySelector(".filter--date");
	const titre = document.querySelector(".filter--titre");
	const article = document.createElement("article");
  

	titre.addEventListener("click", function Title(e){
		titre.classList.toggle("border");
		e.preventDefault();
		const listMedias = media.map((element)=> new Media (element));
		const photographer = listMedias
			.sort((a,b)=> a.title.localeCompare(b.title))
			.filter((artist)=> artist.photographerId === idPhotographer)
			.map((element)=>{
				return element.display();
			}).join("");
		article.innerHTML = photographer;   
		likes();
        
        
	});

	date.addEventListener("click", function Date (e){
		date.classList.toggle("border");
		const listMedias = media.map((element)=> new Media (element));
		const photographer = listMedias
			.filter((artist)=> artist.photographerId === idPhotographer)
			.sort((a,b)=> a.date - b.date)
			.map((element)=>{
				return element.display();
			}).join("");
		article.innerHTML = photographer;
		e.preventDefault(); 
		likes();               
       
	});
}

