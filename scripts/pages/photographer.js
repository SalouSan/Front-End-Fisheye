//Fonction asynchrone pour recuperer les données en JSON 

export async function getArtist (){
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
        ul.setAttribute("role", "list");
        ul.setAttribute("tabindex", "3");
        ul.setAttribute("aria-label", "Filtres par items");
        const filtrePopularité = document.createElement("li");
        filtrePopularité.setAttribute("class", "filter--popularité");
        filtrePopularité.setAttribute("aria-label", "filtre par popularité");
        filtrePopularité.setAttribute("role", "listitem");
        filtrePopularité.setAttribute("tabindex", "3");
        const span1 = document.createElement("span");
        span1.setAttribute("class", "chevron top");
        span1.setAttribute("aria-expanded", "false");
        span1.setAttribute("aria-controls", "sous_menu");
        span1.setAttribute("role", "button");
        span1.setAttribute("tabindex", "3");
        const filtreDate = document.createElement("li");
        filtreDate.setAttribute("class", "filter--date");
        filtreDate.setAttribute("aria-describedby", "sous_menu");
        filtreDate.setAttribute("aria-label", "filtre par date");
        filtreDate.setAttribute("role", "listitem");
        filtreDate.setAttribute("tabindex", "3");
        const filtreTitle = document.createElement("li");
        filtreTitle.setAttribute("class", "filter--titre");
        filtreTitle.setAttribute("role", "listitem");
        filtreTitle.setAttribute("tabindex", "3");
        filtreTitle.setAttribute("aria-label", "filtre par titre");
        filtrePopularité.innerText="Popularité";
        filtrePopularité.insertAdjacentElement("afterbegin", span1);
        const sousMenu= document.createElement("ul");
        sousMenu.setAttribute("id", "sous_menu");
        sousMenu.setAttribute("role", "list");
        filtreDate.innerText = "Date";
        filtreTitle.innerText = "Titre";
        const divNav = document.createElement("div");
        divNav.setAttribute("class", "menu-wrapper"); 
        const spanHeader = document.createElement("span");
        spanHeader.setAttribute("class", "Tri");
        spanHeader.innerText= "Trier par";
        divNav.insertAdjacentElement("afterbegin", spanHeader);
        divNav.appendChild(ul);
        ul.appendChild(filtrePopularité);
        filtrePopularité.insertAdjacentElement("afterend", sousMenu);
        sousMenu.appendChild(filtreDate);
        sousMenu.appendChild(filtreTitle);
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
                    <img class="media" src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.image}" data-id="${this.id}" alt="Photo :${this.title}" tabindex="4"/>
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
                        <video class="media" controls="controls" data-id="${this.id} tabindex="4"
                            <source src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video} "tabindex="4"
                                type="video/mp4 alt="Video : ${this.title}">
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
            
           
            const listMedias = media.map((element)=> new Media(element));
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
                    <button class="lightbox__close">&times;</button>                 
                </div>                  
            </div>
            `   
            article.innerHTML= photographer + modale;
            content.appendChild(article);  
            
        

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
                }).join('');
                article.innerHTML = photographer;
                e.preventDefault(); 
                likes();               
               
            });
            // Aria roles 
            let logo = document.querySelector(".logo");
            logo.setAttribute("tabindex", "1")
            let contactBtn = document.querySelector(".contact_button");
            contactBtn.setAttribute("tabindex", "2");
            let items = document.querySelectorAll(".content__items--heart");
            items.forEach((item)=>{
                item.setAttribute("tabindex", "4");
                item.setAttribute("role", "button");
                item.setAttribute("aria-label", "likes");

            })

            let chevronR = document.querySelector(".chevron1.R")
            let chevronL = document.querySelector(".chevron1.L")
            let closeBtn = document.querySelector(".lightbox__close")
            chevronL.setAttribute("tabindex", "4")
            chevronR.setAttribute("tabindex", "4")
            closeBtn.setAttribute("tabindex", "4");
            closeBtn.setAttribute("aria-label", "Fermer");
            
            
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
                        element.addEventListener("keyup", function (e){
                            if (e.key === "Enter") {
                                lightbox.show(e.currentTarget.dataset.id);
                            }
                        })
                });
            return (article);  
        }  
        
        
    }
    photographerContent(idPhotographer);
    
    /* const createDiv = () => {
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
    increment(); */


  
    
    // Fonction qui permet de gerer les likes 
    function likes () { 
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
                        <div class="coeur"></div>  
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
    likes();
    
    // function pour la modale lightbox 
    
}

getArtist ();


