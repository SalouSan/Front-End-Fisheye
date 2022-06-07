
//Fonction asynchrone pour recuperer les données en JSON 
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let data1 = await responses.json();
    let urlParams = new URLSearchParams(window.location.search);
    let idPhotographer = parseInt(urlParams.get("id"));
    const { media } = data1;
    console.log(idPhotographer);
    if (idPhotographer) {
        let artist = data1.photographers;

// Fonction affichant les infos du photographe dans le header
        function headerPhotographer (){
            let header = document.querySelector(".photograph-header");
            let profile = document.querySelector(".profile__descrpition");
            let image = document.querySelector(".profile__image");

            const profil= artist.filter((person) => person.id === idPhotographer)
            .map((person)=> `
            <h1 class="profile__descrpition--name"> ${person.name} </h1>
            <p class="profile__descrpition--location"> ${person.city}, ${person.country} </p>
            <p class="profile__descrpition--tagline"> ${person.tagline}</p>
            `);
            profile.innerHTML=profil;

            const photo = artist.filter((person) => person.id === idPhotographer)
            .map ((artist) => 
            `<img class="pic" src="assets/Sample_Photos/Photographers-ID_Photos/${artist.portrait}"/>`
            );
            image.innerHTML= photo;
        }
        headerPhotographer();
    }

    // Fonction qui encadre le conteneur des photographes 

    function photographerContent (currentIds) {
        const content = document.querySelector(".photographers-content");
        const article = document.createElement('article');
        
        console.log(media);
        let firstNames = data1.photographers.map(character => character.name.split(" ")[0]);
        console.log(firstNames);

        // DOM elements tri 
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "filter");
        ul.setAttribute("role", "navigation");
        const li = document.createElement("li");
        li.setAttribute("class", "filter--popularité");
        const span1 = document.createElement("span");
        // Eviter les span et mettre des balise button pour les menus déroulants 
        span1.setAttribute("class", "chevron top");
        const li2 = document.createElement("li");
        li2.setAttribute("class", "filter--date");
        const li3 = document.createElement("li");
        li3.setAttribute("class", "filter--titre");
        li.innerText="Popularité";
        li.insertAdjacentElement("afterbegin", span1);
        const sousMenu= document.createElement("ul");
        sousMenu.setAttribute("class", "sous_menu");
        li2.innerText = "Date";
        li3.innerText = "Titre";
        const divNav = document.createElement("div");
        divNav.setAttribute("class", "divNav"); 
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
                <div class= "media_container" data-id="${this.id}">
                    <img class="media" src="/assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.image}"/>
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
        
            class Video{
                constructor(media) {
                    this.title = media.title;
                    this.likes = media.likes;
                    this.video = media.video;
                    this.id = media.id;
                    this.photographerId = media.photographerId; 
                }
                display(){
                return `
                <div class= "media_container" data-id="${this.id}">
                    <video class="media" controls="controls"
                        <source src="/assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video}"
                                type="video/mp4">
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
                <span class="chevron1 L"></span>                        
                <div class="lightbox container">
                    <img class="lightbox container picture" src="" alt=""/>
                    <span class="chevron1 R"></span>
                    <span class="lightbox__close">&times;</span>
                     
                </div>  
                
            </div>
            `   
            article.innerHTML= photographer + modale;
            content.appendChild(article);
            function pop (e) {
                console.log("pop");
                e.preventDefault();
                const listMedias = media.map((element)=> new Media (element));
                const photographer = listMedias
                .sort((a,b)=> a.likes - b.likes)
                .filter((artist)=> artist.photographerId === idPhotographer)
                .map((element)=>{
                return element.display();
                }).join('');
                article.innerHTML = photographer;
            }
            
            function Titre (e) {
                console.log("title");
                e.preventDefault();
                const listMedias = media.map((element)=> new Media (element));
                const photographer = listMedias
                .sort((a,b)=> a.title.localeCompare(b.title))
                .filter((artist)=> artist.photographerId === idPhotographer)
                .map((element)=>{
                return element.display();
                }).join('');
                article.innerHTML = photographer;
                likes();
            }
            

            // Evenements qui permettent de trier les images 

            const filters = document.querySelectorAll("li");
            for (let i=0; i<filters.length; i++) {
                filters[i].addEventListener("click", function (e){
                    if ("popularité") {
                        pop(e)
                        
                    }
                    else if ("title") {                        
                    Titre (e);
                    filters[i].removeEventListener("click", pop(e));
                        
                        
                    }
                })
            }

            
            popularité.addEventListener("click", function (e){
                
            });
            titre.addEventListener("click", function Title (e){
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

            date.addEventListener("click", function (e){
                e.preventDefault();
                const listMedias = media.map((element)=> new Media (element));
                const photographer = listMedias
                .filter((artist)=> artist.photographerId === idPhotographer)
                .sort((a,b)=> a.date -b.date)
                .map((element)=>{
                return element.display();
                }).join('');
                article.innerHTML = photographer;
                likes();
            });
            return (article);  
        }  
        
        
    }
    photographerContent(idPhotographer);
    


    // Fonction qui permet de gerer les likes 
    function likes () { 
        let heart = document.querySelectorAll(".content__items--heart");
        let likes = document.querySelectorAll(".content__items--like");
        let total = 0;   
        function globalLikesCounter () {            
            for (let j=0; j <likes.length; j++){
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
                content.appendChild(counter);
            
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
        globalLikesCounter();    
        
    }
    likes();

    // function pour la modale lightbox 
    const mediasPhotographer = Array.from(document.querySelectorAll(".media_container"));
    const next = document.querySelector(".chevron1.R");
    const prev = document.querySelector(".chevron1.L");
    const lightboxContent = document.querySelector(".lightbox.container img");
    class Lightbox {
        constructor (listElement) {
            this.currentElement = null; 
            this.listElement = listElement;  
    
        }
        show (image) {
            this.currentElement = this.listElement.find(element => element.image == image);
            console.log(this.currentElement);
            document.querySelector(".lightbox").classList.add("show");
            document.querySelector(".lightbox.container").classList.add("show");
            document.querySelector(".lightbox.container.picture").classList.add("show");
            document.querySelector(".lightbox.container.picture").src= `assets/Sample_Photos/Tracy/${this.currentElement.image}`;
            
        

        }
        next (){
    
        }
        previous () {
    
        }
        manageEvent () {
    
        }
        getElementById(id) {
            return this.listElement.find(element=> element.id == id);
        }
    }
    

        let lightbox = new Lightbox (media);
            document.querySelectorAll(".media").forEach((media) => {
                media.addEventListener("click", function (e){
                    lightbox.show(e.currentTarget.dataset.id);
                })
            });
        
   
    
}











getArtist ();


