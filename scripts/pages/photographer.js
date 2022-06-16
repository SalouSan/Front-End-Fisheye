//Fonction asynchrone pour recuperer les données en JSON 
import {displaySort} from "../utils/displaySort.js";


displaySort();
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let data1 = await responses.json();
    let urlParams = new URLSearchParams(window.location.search);
    let idPhotographer = parseInt(urlParams.get("id"));
    const { media } = data1;
    const { id, name, city, country, tagline } = data1;
    let artist = data1.photographers;
    if (idPhotographer) {
        

    // Role Accessibilité 

    let header = document.querySelector("header");
    header.setAttribute("role", "banner");

// Fonction affichant les infos du photographe en haut de la page
        function ProfilPhotographer (){
            let profilContent = document.querySelector(".profile");
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
        const article = document.createElement('article');

        // DOM elements tri 
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "filter");
        const li = document.createElement("li");
        li.setAttribute("class", "filter--popularité");
        li.setAttribute("aria-label", "filtre par popularité");
        const span1 = document.createElement("span");
        // Eviter les span et mettre des balise button pour les menus déroulants 
        span1.setAttribute("class", "chevron top");
        span1.setAttribute("aria-expanded", "false");
        span1.setAttribute("aria-controls", "sous_menu");
        span1.setAttribute("role", "button");
        const li2 = document.createElement("li");
        li2.setAttribute("class", "filter--date");
        li2.setAttribute("aria-describedby", "sous_menu");
        li2.setAttribute("aria-label", "filtre par date");
        const li3 = document.createElement("li");
        li3.setAttribute("class", "filter--titre");
        li3.setAttribute("aria-describedby", "sous_menu");
        li3.setAttribute("aria-label", "filtre par titre");
        li.innerText="Popularité";
        li.insertAdjacentElement("afterbegin", span1);
        const sousMenu= document.createElement("ul");
        sousMenu.setAttribute("id", "sous_menu");
        li2.innerText = "Date";
        li3.innerText = "Titre";
        const divNav = document.createElement("div");
        divNav.setAttribute("class", "menu-wrapper"); 
        const spanHeader = document.createElement("span");
        spanHeader.setAttribute("class", "Tri");
        spanHeader.innerText= "Trier par";
        divNav.insertAdjacentElement("afterbegin", spanHeader);
        divNav.appendChild(ul);
        ul.appendChild(li);
        li.insertAdjacentElement("afterend", sousMenu);
        sousMenu.appendChild(li2);
        sousMenu.appendChild(li3);
        nav.appendChild(divNav);
        content.insertAdjacentElement("beforebegin", nav);
        
// Condition permettant d'affichant les réalisations du photographer 
        if (idPhotographer) {
            let artist = data1.photographers;
            let photographerId = artist.find((photographer)=> photographer.id === currentIds);
            const popularité = document.querySelector(".filter--popularité");
            const date = document.querySelector(".filter--date");
            const titre = document.querySelector(".filter--titre");
            const gallery = media
            .filter((artist)=> artist.photographerId === idPhotographer)
            
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
                    <img class="media" src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.image}" data-id="${this.id}" alt="${this.title}"/>
                    <div class="content">
                        <div class="content__description">    
                            <h3 class="content__description--title"> ${this.title} </h3>
                            <div class="content__items">
                                <p class="content__items--like"> ${this.likes} </p>
                                <div class="content__items--heart"></div>       
                            </div>
                        </div>
                    </div>
                </div>`
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
                    <video class="media" controls="controls" data-id="${this.id}"
                        <source src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video}"
                                type="video/mp4 alt="${this.title}">
                    </video>
                    <div class="content">
                        <div class="content__description">    
                            <h3 class="content__description--title"> ${this.title} </h3>
                            <div class="content__items">
                                <p class="content__items--like"> ${this.likes} </p>
                                <div class="content__items--heart"></div>       
                            </div>
                        </div>
                    </div>
                </div>`
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
            
           
            const listMedias = media.map((element)=> new Media (element));
            const photographer = listMedias
            .filter((artist)=> artist.photographerId === idPhotographer)
            .map((element)=>{
                return element.display();
            }).join('');
            
            let modale = `
            <div class="lightbox" id="modale">                        
                <div class="lightbox container">
                    <span role="button" class="chevron1 L"></span>  
                    <img class="lightbox container element" src="" alt=""/>
                    <video class="lightbox container video" controls="controls"
                    <source src=""
                    type="video/mp4" alt="">
                    </video>
                    <span role="button" class="chevron1 R"></span>
                    <button class="lightbox__close"> &times;</button>                 
                </div>                  
            </div>
            `   
            article.innerHTML= photographer + modale;
            content.appendChild(article);  
            
        
            // Evenements qui permettent de trier les images 

            /* let filters = document.querySelectorAll(".filter").forEach((element)=>{
                element.addEventListener("click", function (e){
                    if ("popularité"){
                        console.log("popularité");
                        likes(); 
                        e.preventDefault();
                    }
                })
            }) */

            popularité.addEventListener("click", function (e){
                
            });
            titre.addEventListener("click", function Title(e){
                titre.classList.toggle("border");
                const listMedias = media.map((element)=> new Media (element));
                const photographer = listMedias
                .sort((a,b)=> a.title.localeCompare(b.title))
                .filter((artist)=> artist.photographerId === idPhotographer)
                .map((element)=>{
                return element.display();
                }).join('');
                article.innerHTML = photographer;   
                increment();
                
                
            });

            date.addEventListener("click", function Date (e){
                date.classList.toggle("border");
                const listMedias = media.map((element)=> new Media (element));
                const photographer = listMedias
                .filter((artist)=> artist.photographerId === idPhotographer)
                .sort((a,b)=> a.date - b.date)
                .map((element)=>{
                return element.display();
                }).join('');
                article.innerHTML = photographer;
                e.preventDefault(); 
                increment();               
               
            });
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
                    document.querySelector(".chevron1.R").addEventListener("click", () => {
                        this.next();
                    })
                    document.querySelector(".chevron1.R").addEventListener("keyup", (e) => {
                        if(e.key === "ArrowRight"){
                            this.next();
                        }
                    })
                    
                    document.querySelector(".chevron1.L").addEventListener("click", (e) => {
                        this.previous();
                        
                    })
                    document.querySelector(".chevron1.L").addEventListener("keyup", (e) => {
                        if(e.key === "ArrowLeft"){
                            this.previous();
                        }
                    })
                    document.querySelector(".lightbox__close").addEventListener("click", () => {
                        this.close();
                    })
                    document.querySelector(".lightbox__close").addEventListener("keyup", (e) => {
                        if (e.key=== "Escape") {
                            this.close();
                        }
                        
                    })
                }
                close (){
                    document.querySelector(".lightbox").classList.remove("show");
                }
                
                
                displayImages(){
                    document.querySelector(".lightbox").classList.add("show");
                    document.querySelector(".lightbox.container").classList.add("show");
                    document.querySelector(".lightbox.container.element").src = `assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.image}`;
                    document.querySelector(".lightbox.container.element").alt =`${this.currentElement.title}`
                    document.querySelector(".lightbox.container.video").style.display = "none";
                    document.querySelector(".lightbox.container.element").style.display = "block";
                    document.querySelector(".lightbox.container.element").classList.add("show");
                    
                };
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
           
                let lightbox = new Lightbox(gallery);
                document.querySelectorAll(".media").forEach((element) => {
                        element.addEventListener("click", function (e){
                            lightbox.show(e.currentTarget.dataset.id);
                        })
                });
            return (article);  
        }  
        
        
    }
    photographerContent(idPhotographer);
    
    const createDiv = () => {
        let counter = document.createElement("div");
        counter.setAttribute("class", "counter_content"); 
        return counter  
    }
    const HandleEvent = () => {
        let heart = document.querySelectorAll(".content__items--heart");
        let likes = document.querySelectorAll(".content__items--like");
        const content = document.querySelector(".photographers-content");
        let element= null;
        let total = 0; 
        for (let j=0; j<likes.length; j++){
            total+=parseInt(likes[j].innerText);
        }
        let person = data1.photographers;
        let people = person.filter((person) => person.id === idPhotographer)
                .map((person)=>
                `
                <div class="counter_price"> 
                    <div class="container">
                        <p id="counter"> ${total} </p>
                        <div class="coeur"></div>  
                    </div>
                    <p class="price1"> ${person.price}€/jour </p>
                </div>`);
        for (let i = 0, j=0; i < heart.length, j<likes.length; i++, j++) {
            let integer = likes[j].innerText;
            let compteur = document.querySelector("#counter");
            heart[i].addEventListener('click', function () {
                likes[j].innerText=integer;
                compteur.innerText=total;
                integer++;
                total++;

            });
            
        }
        return () => {
            if (!element){
                element = createDiv();
                content.appendChild(element)
            }

            element.innerHTML=people;
        }
        
    }
    const increment = HandleEvent();
    increment();


  
    
    // Fonction qui permet de gerer les likes 
    /* function likes () { 
        let heart = document.querySelectorAll(".content__items--heart");
        let likes = document.querySelectorAll(".content__items--like");
        let total = 0;             
            for (let j=0; j<likes.length; j++){
            total+=parseInt(likes[j].innerText);
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
                        <div class="coeur"></div>  
                    </div>
                    <p class="price1"> ${person.price}€/jour </p>
                </div>`);
                counter.innerHTML=people;
                const content = document.querySelector(".photographers-content");
                content.insertAdjacentElement("beforeend",counter);
            
            for (let i = 0, j=0; i < heart.length, j<likes.length; i++, j++) {
                let integer = likes[j].innerText;
                let count = document.querySelector(".counter");
                heart[i].addEventListener('click', function () {
                    likes[j].innerText=integer;
                    count.innerText=total;
                    integer++;
                    total++;
    
                });
                
            }
         
    }
    likes(); */
    
    // function pour la modale lightbox 
    const mediasPhotographer = Array.from(document.querySelectorAll(".media_container"));
    const next = document.querySelector(".chevron1.R");
    const prev = document.querySelector(".chevron1.L");
    const lightboxContent = document.querySelector(".lightbox.container img");
           
   
    
}



getArtist ();


