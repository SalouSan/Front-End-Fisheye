/* eslint-disable no-inner-declarations */

//Fonction asynchrone qui permet de recuperer les données en JSON 

async function getArtist (){
	let responses = await fetch ("data/photographers.json");
	let data1 = await responses.json();
	let urlParams = new URLSearchParams(window.location.search);
	let idPhotographer = parseInt(urlParams.get("id"));
	const { media } = data1;
	let artist = data1.photographers;
	if (idPhotographer) {       
    
		// Role Accessibilité pour le header de la page 

		let header = document.querySelector("header");
		header.setAttribute("role", "banner");

		// Fonction affichant les infos du photographe en haut de la page
		function ProfilPhotographer (){
			let profileDescription = document.querySelector(".profile__description");
			let image = document.querySelector(".profile__image");

			const profil= artist.filter((person) => person.id === idPhotographer)
				.map((person)=> `
            <h1 class="profile__descrpition--name"> ${person.name} </h1>
            <p class="profile__descrpition--location"> ${person.city}, ${person.country} </p>
            <p class="profile__descrpition--tagline"> ${person.tagline}</p>
            `);
			profileDescription.innerHTML=profil;

			const photo = artist.filter((person) => person.id === idPhotographer)
				.map ((artist) => 
					`<img class="pic" src="assets/Sample_Photos/Photographers-ID_Photos/${artist.portrait}" alt="${artist.name}"/>`
				);
			image.innerHTML= photo;
		}
		ProfilPhotographer();
	}

	// Fonction qui encadre le conteneur des photographes 

	function photographerContent (currentIds) {
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
			let artist = data1.photographers;
			let photographerId = artist.find((photographer)=> photographer.id === currentIds);
			const article = document.createElement("article");
			
			const gallery = media
				.filter((artist)=> artist.photographerId === idPhotographer);


            
			// Classe qui gere l'affichage de l'image ou de la video 
			class Image {
				constructor(media) {
					this.image = media.image;
					this.title = media.title;
					this.likes = media.likes;
					this.id = media.id;
					this.photographerId = media.photographerId; 
				}
            
				display(){
					return `
                <div class= "media_container" role="listitems">
                    <img class="media" src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.image}" data-id="${this.id}" alt="Photo :${this.title}" tabindex="4"/>
                    <div class="content">
                        <div class="content__description">    
                            <h3 class="content__description--title"> ${this.title} </h3>
                            <div class="content__items">
                                <p aria-label="Nombre de likes :${this.likes}" class="content__items--like"> ${this.likes} </p>
                                <div>
                                    <img class="content__items--heart" src="assets/icons/heart.svg"/>  
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>`;
				}
			}
			class Video {
				constructor(media) {
					this.title = media.title;
					this.likes = media.likes;
					this.video = media.video;
					this.id = media.id;
					this.photographerId = media.photographerId; 
				}
				display(){
					return `
                <div class= "media_container" role="listitems">
                        <video class="media" autoplay="false" data-id="${this.id} tabindex="4"
                            <source src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video}"
                                type="video/mp4 alt="Video:${this.title}">
                        </video>
                    <div class="content">
                        <div class="content__description">    
                            <h3 class="content__description--title"> ${this.title} </h3>
                            <div class="content__items">
                                <p aria-label="Nombre de likes :${this.likes}" class="content__items--like"> ${this.likes} </p>
                                <div>
                                    <img class="content__items--heart" src="assets/icons/heart.svg"/>    
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>`;
				}
                
			}
			class Media {
				constructor(media){
					if ("image" in media){
						return new Image(media);
					}
					else {
						return new Video(media);
					}
				}
			}
            
           
			const listMedias = media.map((element)=> new Media(element));
			const photographer = listMedias
				.filter((artist)=> artist.photographerId === idPhotographer)
				.map((element)=>{
					return element.display();
				}).join("");

			// Création de la div qui affiche la lightbox
            
			let modale = `
            <div class="lightbox" id="modale">                        
                <div class="lightbox container">
                    <img role="button" class="chevronL" src="assets/icons/chevronLeft.svg"/> 
                    <img class="lightbox container element" src="" alt=""/>
                    <video class="lightbox container video" controls="controls"
                    <source src=""
                    type="video/mp4" alt="">
                    </video>
                    <img role="button" class="chevronR" src="assets/icons/chevronRight.svg"/>
                    <button class="lightbox__close">&times;</button>                 
                </div>                  
            </div>
            `;   
			article.innerHTML= photographer + modale;
			content.appendChild(article);  

			// Aria roles et attributs pour les éléments de la lightbox

			let chevronR = document.querySelector(".chevronR");
			let chevronL = document.querySelector(".chevronL");
			let closeBtn = document.querySelector(".lightbox__close");
			chevronL.setAttribute("tabindex", "4");
			chevronR.setAttribute("tabindex", "4");
			closeBtn.setAttribute("tabindex", "4");
			closeBtn.setAttribute("aria-label", "Fermer");
            
        
			// Ecouteur d'evenement sur les filtres du menu déroulant
			const date = document.querySelector(".filter--date");
			const titre = document.querySelector(".filter--titre");
	
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
				handleLikes();
				
				
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
				handleLikes();            
  
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
            
            
			class Lightbox {
				constructor (listElement) {
					this.currentElement = null; 
					this.listElement = listElement;  
					this.photographerId = listElement.photographerId;
					this.manageEvent();
				}
				getElementById(id) {
					return this.listElement.find(element=> element.id == id);
				}
				show (id) {
					this.currentElement = this.getElementById(id);
					this.condition();
                   
				}
				next (){
					let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
					if (index == this.listElement.length -1) {
						this.currentElement = this.listElement[0];
					}
					else {
						this.currentElement = this.listElement [index + 1];
					}
					this.condition();
                           
				}
				previous () {
					let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
					if (index == 0) {
						this.currentElement = this.listElement[this.listElement.length -1];
					}
					else {
						this.currentElement = this.listElement [index - 1];
					}
                    
					this.condition();
				}
				manageEvent () {
					document.querySelector(".chevronR").addEventListener("click", () => {
						this.next();
					});
					document.querySelector(".chevronR").addEventListener("keyup", (e) => {
						if(e.key === "ArrowRight"){
							this.next();
						}
					});
                    
					document.querySelector(".chevronL").addEventListener("click", () => {
						this.previous();
                        
					});
					document.querySelector(".chevronL").addEventListener("keyup", (e) => {
						if(e.key === "ArrowLeft"){
							this.previous();
						}
					});
					document.querySelector(".lightbox__close").addEventListener("click", () => {
						this.close();
					});
					document.querySelector(".lightbox__close").addEventListener("keyup", (e) => {
						if (e.key=== "Escape") {
							this.close();
						}
                        
					});
				}
				close (){

					document.querySelector(".lightbox").classList.remove("show");
				}
                
                
				displayImages(){
					document.querySelector(".lightbox").classList.add("show");
					document.querySelector(".lightbox.container").classList.add("show");
					document.querySelector(".lightbox.container.element").src = `assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.image}`;
					document.querySelector(".lightbox.container.element").alt =`${this.currentElement.title}`;
					document.querySelector(".lightbox.container.video").style.display = "none";
					document.querySelector(".lightbox.container.element").style.display = "block";
					document.querySelector(".lightbox.container.element").classList.add("show");
                    
				}
				displayVideos(){
					document.querySelector(".lightbox").classList.add("show");
					document.querySelector(".lightbox.container").classList.add("show");
					document.querySelector(".lightbox.container.video").src =`assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.video}`;
					document.querySelector(".lightbox.container.video").alt =`${this.currentElement.title}`;
					document.querySelector(".lightbox.container.element").style.display = "none";
					document.querySelector(".lightbox.container.video").style.display = "block";
					document.querySelector(".lightbox.container.video").classList.add("show");
				}
				condition(){
					if ("video" in this.currentElement){
						this.displayVideos();
					}
					else {
						this.displayImages();
					}
				}
                              
			}
			// Instanciation de la class lightbox avec comme parametre la galerie puis écouteur d'evenement sur les images de la galerie pour afficher la lightbox
			let lightbox = new Lightbox(gallery);
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
			return (article);  
		}  
        
        
	}
	photographerContent(idPhotographer);
    
    
	function HandleEvent () {
		let heart = document.querySelectorAll(".content__items--heart");
		let likes = document.querySelectorAll(".content__items--like");
		const content = document.querySelector(".photographers-content");
		let counter = document.createElement("div");
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
		content.insertAdjacentElement("beforeend",counter);
		for (let i = 0; i < heart.length, i<likes.length; i++) {
			let integer = likes[i].innerText;
			let compteur = document.querySelector(".counter");
			heart[i].addEventListener("click", function () {
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
	handleLikes();

    
	// Fonction qui permet d'incrémenter le nombre de likes au click sur le coeur et de comptabiliser le nombre total de likes sur la page
	/*  function handleLikes () { 
        let heart = document.querySelectorAll(".content__items--heart");
        let likes = document.querySelectorAll(".content__items--like");
        let total = 0;             
            for (let i=0; i<likes.length; i++){
            total+=parseInt(likes[i].innerText);
            }
            let counter = document.createElement("div");
            counter.setAttribute("class", "counter_content");
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
                    <p class="price1"> ${person.price}€/jour </p>
                </div>`);
                counter.innerHTML=people;
                const content = document.querySelector(".photographers-content");
                content.insertAdjacentElement("beforeend",counter);
            
            for (let i = 0; i < heart.length, i<likes.length; i++) {
                let integer = likes[i].innerText;
                let count = document.querySelector(".counter");
                heart[i].addEventListener('click', function () {
                    likes[i].innerText=integer;
                    count.innerText=total;
                    integer++;
                    total++;
    
                });
                heart[i].addEventListener('keyup', function (e) {
                    if (e.key === "Enter"){
                    likes[i].innerText=integer;
                    count.innerText=total;
                    integer++;
                    total++;
                    }
                });
                               
            }
         
    }
    handleLikes(); */
    
	// Aria attributs pour le compteur global de likes

	let counter = document.querySelector(".counter_content");
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
	price.setAttribute("aria-label", `Prix du photographe : ${priceContent}`);

}

getArtist ();


