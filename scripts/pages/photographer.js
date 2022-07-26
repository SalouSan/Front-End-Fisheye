/* eslint-disable no-inner-declarations */
import {Media} from "../factories/MediaFactory.js";
import { Photographer } from "../models/photographer.js";
import { handleLikes } from "../utils/displayLikes.js";
import { Lightbox } from "../models/Lightbox.js";
import contactForm  from "../utils/contactForm.js";
//Fonction asynchrone qui permet de recuperer les données en JSON 

async function getArtist (){
	let responses = await fetch ("data/photographers.json");
	let data1 = await responses.json();
	let urlParams = new URLSearchParams(window.location.search);
	let idPhotographer = parseInt(urlParams.get("id"));
	const media  = data1.media.filter((artist)=> artist.photographerId === idPhotographer);
	let artist = data1.photographers.find((person) => person.id === idPhotographer);
	if (artist) {       
    
		// Role Accessibilité pour le header de la page 

		let header = document.querySelector("header");
		header.setAttribute("role", "banner");

		// Fonction affichant les infos du photographe en haut de la page

		let photographer = new Photographer(artist);
		let profileContent = document.querySelector(".profile__content");
		let profileImage = document.querySelector(".profile__image");
		profileContent.innerHTML= photographer.displayHeader();		
		profileImage.innerHTML= photographer.displayImage();
		
		// Affichage des medias du photographe
		const article = document.createElement("article");
		const listMedias = media.map((element)=> new Media(element,photographer));
		article.innerHTML=listMedias.sort((a,b)=>
			new Date(b.date) - new Date(a.date))
			.map((element)=>{
				return element.display();
			}).join("");
		

		document.querySelector(".photographers-content").insertAdjacentElement("beforeend", article);		
		
		// Création du compteur global de likes

		document.querySelector("#main").innerHTML+= `
		<div class="counter_content">
			<div class="counter_price"> 
                    <div class="container">
                        <p class="counter"> ${listMedias.map((media)=>media.likes).reduce((likes,total)=>likes+total)} </p>
                        <div>
                            <img class="heart" src="assets/icons/CounterHeart.svg"/>   
                        </div>   
                    </div>
                    <p class="price1"> ${photographer.price} €/jour </p>
            </div>
		</div>`;
		handleLikes();

		const content = document.querySelector(".photographers-content");

		// Création du menu de navigation à partir des elements DOM pour le filtrage des photographies selon 3 critères : popularité, date et titre.
		const nav = document.createElement("nav");
		const divNav = document.createElement("div");
		divNav.setAttribute("class", "menu-wrapper"); 
		const ul = document.createElement("ul");
		ul.setAttribute("class", "filter");
		const filtrePopularite = document.createElement("li");
		filtrePopularite.setAttribute("class", "filter--popularité");
		filtrePopularite.innerText="Popularité";
		const spanHeader = document.createElement("span");
		spanHeader.setAttribute("class", "Tri");
		spanHeader.innerText= "Trier par";

		// Création du sous-menu enfant du menu principal et qui englobe les deux autres filtres : date et titre
		const sousMenu= document.createElement("ul");
		sousMenu.setAttribute("id", "sous_menu");
		const filtreDate = document.createElement("li");
		filtreDate.setAttribute("class", "filter--date");
		filtreDate.innerText = "Date";
        
		const filtreTitle = document.createElement("li");
		filtreTitle.setAttribute("class", "filter--titre");
		filtreTitle.innerText = "Titre";

		// Attributs ARIA et rôles pour l'accessibilité
		ul.setAttribute("role", "list");
		ul.setAttribute("tabindex", "12");
		ul.setAttribute("aria-label", "Filtres par items");
		filtrePopularite.setAttribute("aria-label", "filtre par popularité");
		filtrePopularite.setAttribute("role", "listitem");
		filtrePopularite.setAttribute("tabindex", "13");
		sousMenu.setAttribute("role", "region");
		filtreDate.setAttribute("aria-describedby", "sous_menu");
		filtreDate.setAttribute("aria-label", "filtre par date");
		filtreDate.setAttribute("role", "listitem");
		filtreDate.setAttribute("tabindex", "15");
		filtreTitle.setAttribute("role", "listitem");
		filtreTitle.setAttribute("tabindex", "16");
		filtreTitle.setAttribute("aria-label", "filtre par titre");

		// Création d'une div qui permet d'afficher le chevron
		const division = document.createElement("div");
		division.setAttribute("class", "svg");
        
		// Chevron SVG importé qui gère le deroulant du menu  
		const svg = "<img class=\"chevron up down\" role=\"button\" tabindex=\"14\" aria-label=\"button\" aria-controls=\"sous_menu\" aria-expanded=\"false\" src=\"assets/icons/chevronTop.svg\"/>";
    
        
		// Insertion des éléments enfants dans leur element parent   
		divNav.insertAdjacentElement("afterbegin", spanHeader);
		divNav.appendChild(ul);
		ul.appendChild(filtrePopularite);
		filtrePopularite.insertAdjacentElement("beforeend", division);
		division.insertAdjacentHTML("afterbegin",svg);
		filtrePopularite.insertAdjacentElement("afterend", sousMenu);    
		sousMenu.appendChild(filtreDate);
		sousMenu.appendChild(filtreTitle);
		nav.appendChild(divNav);
		content.insertAdjacentElement("beforebegin", nav);

		// Ecouteur d'évenement sur les filtres du menu déroulant

		function displaySort () {
			const date = document.querySelector(".filter--date");
			const titre = document.querySelector(".filter--titre");
			const popularite = document.querySelector(".filter--popularité");


			function event (sortType, filter1, filter2, filter3) {
				document.querySelector("article").innerHTML=listMedias.sort(sortType)
					.map((element)=>{
						return element.display();
					}).join("");
				filter1.classList.add("pointer");
				filter2.classList.remove("pointer");
				filter3.classList.remove("pointer");
				handleLikes();
				displayLightbox();
				handleControls();
			}
			
	
			function sortByDate (a,b){
				return new Date(b.date) - new Date (a.date);
			}
			function sortByLikes (a,b){
				return a.likes - b.likes;
			}
			
			function sortByTitle (a,b) {
				return a.title.localeCompare(b.title);
			}
		
			popularite.addEventListener("click", (e) =>{
				e.preventDefault();
				console.log(e);
				event(sortByLikes, popularite, date, titre);	
				
			});
			popularite.addEventListener("keyup", (e)=>{
				if (e.key== "Enter" && e.target == popularite){
					event(sortByLikes,popularite, date, titre);
				}
			});

			date.addEventListener("click", (e) =>{
				e.preventDefault();
				event(sortByDate, date, titre, popularite);
				
			});

			date.addEventListener("keyup", (e)=>{
				if (e.key=="Enter") {
					event(sortByDate, date, titre, popularite);
				}
			});

			titre.addEventListener("click", (e) =>{
				e.preventDefault();
				event(sortByTitle, titre, date, popularite);				
			});

			titre.addEventListener("keyup", (e)=>{
				if(e.key=="Enter"){
					event(sortByTitle, titre, date, popularite);
				}
			});

		}
		displaySort();

		// Fonction qui permet de gerer l'aria-expanded sur le chevron du menu deroulant
		function ariaExpand () {
			let chevronUpDown = document.querySelector(".chevron.up.down");
			let sousMenu = document.querySelector("#sous_menu");
			let filtermain = document.querySelector(".filter");
			chevronUpDown.addEventListener("keydown", function (e) {
				if (e.key == "Enter" && e.currentTarget==chevronUpDown) {			
					chevronUpDown.setAttribute("aria-expanded", "true");
					chevronUpDown.style.transform = "rotate(180deg)";
					filtermain.style.display= "block";
					sousMenu.style.visibility = "visible";
				} else if (e.key == "Escape"){
					sousMenu.style.visibility="hidden";
					chevronUpDown.setAttribute("aria-expanded", "false");
					chevronUpDown.style.transform = "rotate(0deg)";
				}
			});
		}
		ariaExpand();
           
		// Aria roles et attributs pour les éléments du header
		let logo = document.querySelector(".logo");
		logo.setAttribute("tabindex", "1");

		let name = document.querySelector(".profile__descrpition--name");
		name.setAttribute("tabindex", "2");

		let location = document.querySelector(".profile__descrpition--location");
		location.setAttribute("tabindex","3");
		let tagline = document.querySelector(".profile__descrpition--tagline");
		tagline.setAttribute("tabindex","3");

		let contactBtn = document.querySelector(".contact_button");
		contactBtn.setAttribute("tabindex", "4");
				
		let photo = document.querySelector(".pic");
		photo.setAttribute("tabindex", "11");
   
		// Contrôle de la video pour affichage de la miniature
		
		function handleControls () {	
			let vid = document.getElementById("vid");	
			vid.addEventListener("mouseover", (e)=>{
				e.preventDefault();
				vid.setAttribute("controls", "controls");
			});
			vid.addEventListener("mouseout", (e)=>{
				e.preventDefault();
				vid.removeAttribute("controls");
			});
			vid.addEventListener("focus", (e)=>{
				e.preventDefault();
				vid.setAttribute("controls", "controls");
						
			});	
		}
		handleControls();

		
		// Création de la div qui affiche la lightbox   
        
		let modale = `
            <div class="lightbox" id="modale" >                        
                <div class="lightbox container">
					<div class="items">
						<img role="button" class="chevronL" src="assets/icons/chevronLeft.svg"/> 
						<img class="lightbox container element" src="" alt=""/>
						<video class="lightbox container video" controls="false" id="lightbox_vid"
						<source src=""
						type="video/mp4" alt="">
						</video>
						<img role="button" class="chevronR" src="assets/icons/chevronRight.svg"/>
						<img role="button" class="lightbox__close" src="assets/icons/closeLightbox.svg"/>  
					</div>              
                </div>                  
            </div>
            `;   
		
		content.insertAdjacentHTML("afterbegin",modale);
		
		// Aria roles et attributs pour les éléments de la lightbox
	
		let chevronR = document.querySelector(".chevronR");
		let chevronL = document.querySelector(".chevronL");
		let closeBtn = document.querySelector(".lightbox__close");
		let image = document.querySelector(".lightbox.container.element");
		let video = document.querySelector(".lightbox.container.video");

		image.setAttribute("tabindex", "17");
		video.setAttribute("tabindex", "17");
		chevronL.setAttribute("tabindex", "17");
		chevronR.setAttribute("tabindex", "17");
		closeBtn.setAttribute("tabindex", "17");
		closeBtn.setAttribute("aria-label", "Fermer");

		// Instanciation de la class lightbox puis écouteur d'evenement sur les images de la galerie pour afficher la lightbox

		function displayLightbox () {
			let lightbox = new Lightbox(media,artist);
			document.querySelectorAll(".media").forEach((element) => {
				element.addEventListener("click", function (e){
					lightbox.show(e.currentTarget.dataset.id);

				});
				element.addEventListener("keyup", function (e){
					if (e.key === "Enter") {
						lightbox.show(e.currentTarget.dataset.id);	
					}
				});
			
			});
		}
		displayLightbox();

		// Aria attributs pour le compteur global de likes

		let counter = document.querySelector(".counter_content");
		counter.setAttribute("tabindex", "18");
		counter.setAttribute("aria-label", "compteur de likes");

		let total = document.querySelector(".counter");
		let TotalValue = total.innerText;
		total.setAttribute("tabindex", "19");
		total.setAttribute("aria-describedby", "counter");
		total.setAttribute("aria-label", `Nombre total de likes : ${TotalValue}`);

		let heart = document.querySelector(".heart");
		heart.setAttribute("aria-label", "icône coeur");
		heart.setAttribute("tabindex", "20");
    
		let price = document.querySelector(".price1");
		let priceContent = price.innerText;
		price.setAttribute("tabindex", "21");
		price.setAttribute("aria-label", `Prix du photographe : ${priceContent}`);

		// Event listener sur la modale

		document.querySelector(".contact_button").addEventListener("click", contactForm.displayModal);
		document.querySelector(".close-modal").addEventListener("click", contactForm.closeModal);
		let btnSubmit = document.querySelector("#btn_submit");
		btnSubmit.addEventListener("click", function (e){
			e.preventDefault();
			contactForm.checkForm();
		} );
		let closeModalBtn = document.querySelector(".close-modal");
		const modal = document.getElementById("contact_modal");
		closeModalBtn.addEventListener("keyup", (e)=>{
			if (e.key== "Escape"){
				modal.style.display = "none";
			}
		});	
	}
	
}
getArtist ();


