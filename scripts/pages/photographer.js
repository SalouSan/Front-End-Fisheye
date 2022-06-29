/* eslint-disable no-inner-declarations */
import {Media} from "../factories/MediaFactory.js";
import { Photographer } from "../models/photographer.js";
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
		let profileDescription = document.querySelector(".profile__description");
		profileDescription.innerHTML= photographer.displayHeader();

		const listMedias = media.map((element)=> new Media(element,photographer));
		document.querySelector(".photographers-content").innerHTML=listMedias.map((element)=>{
			return element.display();
		}).join("");
		

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
		handleLikes2();

	}

	// Fonction qui encadre le conteneur des photographes 

	function photographerContent () {
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
		ul.setAttribute("tabindex", "3");
		ul.setAttribute("aria-label", "Filtres par items");
		filtrePopularite.setAttribute("aria-label", "filtre par popularité");
		filtrePopularite.setAttribute("role", "listitem");
		filtrePopularite.setAttribute("tabindex", "3");
		sousMenu.setAttribute("role", "region");
		filtreDate.setAttribute("aria-describedby", "sous_menu");
		filtreDate.setAttribute("aria-label", "filtre par date");
		filtreDate.setAttribute("role", "listitem");
		filtreDate.setAttribute("tabindex", "3");
		filtreTitle.setAttribute("role", "listitem");
		filtreTitle.setAttribute("tabindex", "3");
		filtreTitle.setAttribute("aria-label", "filtre par titre");

		// Création d'une div qui permet d'afficher le chevron
		const division = document.createElement("div");
		division.setAttribute("class", "svg");
        
		// Chevron SVG importé qui gère le deroulant du menu  
		const svg = "<img class=\"chevron up down\" role=\"button\" tabindex=\"3\" aria-label=\"button\" aria-controls=\"sous_menu\" aria-expanded=\"false\" src=\"assets/icons/chevronTop.svg\"/>";
    
        
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

        
		// Condition permettant d'affichant les réalisations du photographer 
		if (idPhotographer) {
			const article = document.createElement("article");
			
			/* const gallery = media
				.filter((artist)=> artist.photographerId === idPhotographer);
 */

            
			// Classe qui gere l'affichage de l'image ou de la video 
			
			
			
            
           
			


				

			// Création de la div qui affiche la lightbox
            
			/* let modale = `
            <div class="lightbox" id="modale">                        
                <div class="lightbox container">
                    <img role="button" class="chevronL" src="assets/icons/chevronLeft.svg"/> 
                    <img class="lightbox container element" src="" alt=""/>
                    <video class="lightbox container video" autoplay="false"
                    <source src=""
                    type="video/mp4" alt="">
                    </video>
                    <img role="button" class="chevronR" src="assets/icons/chevronRight.svg"/>
                    <button class="lightbox__close">&times;</button>                 
                </div>                  
            </div>
            `;    */
			/* article.innerHTML= photographer + modale; */
			content.appendChild(article);  

			// Aria roles et attributs pour les éléments de la lightbox

			/* let chevronR = document.querySelector(".chevronR");
			let chevronL = document.querySelector(".chevronL");
			let closeBtn = document.querySelector(".lightbox__close");
			chevronL.setAttribute("tabindex", "4");
			chevronR.setAttribute("tabindex", "4");
			closeBtn.setAttribute("tabindex", "4");
			closeBtn.setAttribute("aria-label", "Fermer"); */
            
        
			// Ecouteur d'evenement sur les filtres du menu déroulant
			const date = document.querySelector(".filter--date");
			const titre = document.querySelector(".filter--titre");

	
			titre.addEventListener("click", function Title(e){
				e.preventDefault();
				const {media} = data1;
				const listMedias = media.map((element)=> new Media (element));
				const photographer = listMedias
					.sort((a,b)=> a.title.localeCompare(b.title))
					.filter((artist)=> artist.photographerId === idPhotographer)
					.map((element)=>{
						return element.display();
					}).join("");

				let modale = `
					<div class="lightbox" id="modale">                        
						<div class="lightbox container">
							<img role="button" class="chevronL" src="assets/icons/chevronLeft.svg"/> 
							<img class="lightbox container element" src="" alt=""/>
							<video class="lightbox container video" autoplay="false"
							<source src=""
							type="video/mp4" alt="">
							</video>
							<img role="button" class="chevronR" src="assets/icons/chevronRight.svg"/>
							<button class="lightbox__close">&times;</button>                 
						</div>                  
					</div>
					`;   
				article.innerHTML = photographer+modale;  
				this.classList.add("pointer");
				date.classList.remove("pointer");
				
				
				
				
				
				
			});
		
			date.addEventListener("click", function Date (e){
				e.preventDefault();
				const listMedias = media.map((element)=> new Media (element));
				const photographer = listMedias
					.filter((artist)=> artist.photographerId === idPhotographer)
					.sort((a,b)=> a.date - b.date)
					.map((element)=>{
						return element.display();
					}).join("");
				let modale = `
					<div class="lightbox" id="modale">                        
						<div class="lightbox container">
							<img role="button" class="chevronL" src="assets/icons/chevronLeft.svg"/> 
							<img class="lightbox container element" src="" alt=""/>
							<video class="lightbox container video" autoplay="false"
							<source src=""
							type="video/mp4" alt="">
							</video>
							<img role="button" class="chevronR" src="assets/icons/chevronRight.svg"/>
							<button class="lightbox__close">&times;</button>                 
						</div>                  
					</div>
					`;   
				article.innerHTML = photographer+modale;
				this.classList.add("pointer");
				titre.classList.remove("pointer");
				
				
           
  
			});
			

			// Aria roles et attributs pour les éléments de la page : logo, 
			let logo = document.querySelector(".logo");
			logo.setAttribute("tabindex", "1");
			let contactBtn = document.querySelector(".contact_button");
			contactBtn.setAttribute("tabindex", "2");
			let items = document.querySelectorAll(".content__items--heart");
			items.forEach((item)=>{
				item.setAttribute("tabindex", "4");
				item.setAttribute("role", "button");
				item.setAttribute("aria-label", "likes");

			});
			let titles = document.querySelectorAll(".content__description--title");
			titles.forEach((title) => {
				title.setAttribute("tabindex", "4");

			});
			let like = document.querySelectorAll(".content__items--like");
			like.forEach((like) =>{
				like.setAttribute("tabindex", "4");
			});

           

			// Fonction qui permet de gerer l'aria-expanded sur le chevron du menu deroulant
			function ariaExpand () {
				let chevronUpDown = document.querySelector(".chevron.up.down");
				let sousMenu = document.querySelector("#sous_menu");
				let filtermain = document.querySelector(".filter");
				filtermain.addEventListener("keydown", function (e) {
					if (e.key == "Enter") {
						sousMenu.style.visibility = "visible";
						chevronUpDown.setAttribute("aria-expanded", "true");
						chevronUpDown.style.transform = "rotate(180deg)";
						filtermain.style.display ="block";
					}
					else {
						sousMenu.style.visibility = "hidden";
						chevronUpDown.setAttribute("aria-expanded", "false");
					}
				} );
			}
			ariaExpand();
            
            
			
			// Instanciation de la class lightbox avec comme parametre la galerie puis écouteur d'evenement sur les images de la galerie pour afficher la lightbox
			/* let lightbox = new Lightbox(gallery);
			document.querySelectorAll(".media").forEach((element) => {
				element.addEventListener("click", function (e){
					lightbox.show(e.currentTarget.dataset.id);
				});
				element.addEventListener("keyup", function (e){
					if (e.key === "Enter") {
						lightbox.show(e.currentTarget.dataset.id);
					}
				});
			}); */
			return (article);  
		}  
        
        
	}
	photographerContent(idPhotographer);
	
	/* function HandleEvent () {
		let heart = document.querySelectorAll(".content__items--heart");
		let likes = document.querySelectorAll(".content__items--like");
		let counter = document.createElement("div");
		const content = document.querySelector(".photographers-content");
		content.insertAdjacentElement("beforeend",counter);
		counter.setAttribute("class", "counter_content"); 
		let element= null;
		let total = 0; 
		for (let i=0; i<likes.length; i++){
			total+=parseInt(likes[i].innerText);
		}
		console.log(total);
		let person = data1.photographers;
		let people = person.filter((person) => person.id === idPhotographer)
			.map((person)=>
				`
                <div class="counter_price"> 
                    <div class="container">
                        <p class="counter"> ${total} </p>
                        <div>
                            <img class="heart" src="assets/icons/CounterHeart.svg"/>   
                        </div>   
                    </div>
                    <p class="price1"> ${person.price} €/jour </p>
                </div>`);
				
		counter.innerHTML=people;
		for (let i = 0; i < heart.length, i<likes.length; i++) {
			let integer = likes[i].innerText;
			let compteur = document.querySelector(".counter");
			heart[i].addEventListener("click", function (e) {
				e.preventDefault();
				likes[i].innerText=integer;
				integer++;
				compteur.innerText= total;
				total++;    

			});
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	 		heart[i].addEventListener("keyup", function (e) {
				if (e.key === "Enter"){
					likes[i].innerText=integer;
					compteur.innerText=total;
					integer++;
					total++;
				}
			});
            
		}
		return () => {
			if (!element){
				element = counter;
				content.appendChild(element);    
			} 
			element.innerHTML=people;  

		};
        
	}
	const handleLikes = HandleEvent();
	handleLikes(); */
	

    
	// Fonction qui permet d'incrémenter le nombre de likes au click sur le coeur et de comptabiliser le nombre total de likes sur la page
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	
	/* handleLikes(); */
    
	// Aria attributs pour le compteur global de likes

	/* let counter = document.querySelector(".counter_content");
	counter.setAttribute("tabindex", "5");
	counter.setAttribute("aria-label", "compteur de likes");

	let total = document.querySelector(".counter");
	let TotalValue = total.innerText;
	total.setAttribute("tabindex", "5");
	total.setAttribute("aria-describedby", "counter");
	total.setAttribute("aria-label", `Nombre total de likes : ${TotalValue}`);

	let heart = document.querySelector(".heart");
	heart.setAttribute("aria-label", "icône coeur");
	heart.setAttribute("tabindex", "6");
    
	let price = document.querySelector(".price1");
	let priceContent = price.innerText;
	price.setAttribute("tabindex", "7");
	price.setAttribute("aria-label", `Prix du photographe : ${priceContent}`); */

	
	
}


getArtist ();


function handleLikes2() {
	let heart = document.querySelectorAll(".content__items--heart");
	for (let i of heart){
		i.addEventListener("click", function (e){
			let counter = e.target.closest(".content__items").querySelector(".content__items--like");
			counter.innerHTML = parseInt(counter.innerHTML)+1;
			let counterTotal = document.querySelector(".counter_content .counter");
			counterTotal.innerHTML = parseInt(counterTotal.innerHTML)+1;

			

		});
	}
}
