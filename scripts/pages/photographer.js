//Fonction asynchrone pour recuperer les données en JSON 
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let data1 = await responses.json();
    let urlParams = new URLSearchParams(window.location.search);
    let idPhotographer = parseInt(urlParams.get("id"));
    console.log(idPhotographer);
    if (idPhotographer) {
        let artist = data1.photographers;

// Fonction affichant les infos du photographe dans le header
        function headerPhotographer (){
            let header = document.querySelector(".photograph-header");
            let profile = document.querySelector(".profile");
            let image = document.querySelector(".image");

            const profil= artist.filter((person) => person.id === idPhotographer)
            .map((person)=> `
            <h1 class="name1"> ${person.name} </h1>
            <p class="location1"> ${person.city}, ${person.country} </p>
            <p class="tagline1"> ${person.tagline}</p>
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
        const { media } = data1;
        console.log(media);
        let firstNames = data1.photographers.map(character => character.name.split(" ")[0]);
        console.log(firstNames);

        // DOM elements tri 
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "wrapper");
        const li = document.createElement("li");
        li.setAttribute("class", "popularité");
        const span1 = document.createElement("span");
        span1.setAttribute("class", "chevron top");
        const li2 = document.createElement("li");
        li2.setAttribute("class", "date");
        const li3 = document.createElement("li");
        li3.setAttribute("class", "titre");
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
            
        
            let photograph = media.filter((artist)=> artist.photographerId === idPhotographer)
            .map((person) =>             
            `
            <div class= "picture">
                <img class="photo" src = "assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${person.image}"/>
                <div class="content">
                    <div class="title_likes">    
                        <h2 class="title"> ${person.title} </h2>
                        <div class="likes_heart">
                            <p class="likes"> ${person.likes} </p>
                            <div class="heart"></div>       
                        </div>
                    </div>
                </div>
            </div>
            `).join('');
            
            let div = `
            <div class="lightbox" id="modale">
                <button class="lightbox__close">Fermer</button>
                <button class="lightbox__next">Suivant</button>
                <button class="lightbox__prev">Precedent</button>
                <div class=lightbox__container>
                    <img class="pics" src="https://picsum.photos/500/500" alt=""/> 
                </div>
            </div>`        
            article.innerHTML=photograph + div;
            content.appendChild(article);
            return (article);      
        }  
        
    }
    photographerContent(idPhotographer);
    

    // function qui permet de trier les images 

    function Sort(){
        const date = document.querySelector(".date");
        const titre = document.querySelector(".titre");
        const popularité = document.querySelector(".popularité");
        date.addEventListener("click", function (e){
            e.preventDefault;
            console.log("Date");
            console.log(photograph)
        });
        titre.addEventListener("click", function (e){
            e.preventDefault;
            console.log("Titre");
            photograph+= media.sort((a,b)=> a.title.localeCompare(b.title));
        });
        popularité.addEventListener("click", function (e){
            e.preventDefault;
            console.log("Popularité");
            photograph+= media.sort((a,b)=> a.likes - b.likes);
        });

    }
    Sort();


    // Fonction qui permet de gerer les likes 
    function likes () { 
        let heart = document.querySelectorAll(".heart");
        let likes = document.querySelectorAll(".likes");
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
    
    window.onload = () => {
        const modale = document.getElementById("modale");
        const close = document.querySelector(".lightbox__close");
        const imgs = Array.from(document.querySelectorAll(".photo"));
        const gallery = imgs.map((img)=> img.getAttribute("src"));
        gallery.sort((a,b)=> {
            return a.localeCompare(b);
        });
        console.log(gallery);
        const modalContent = document.querySelector(".modal_content");
        let nbr = 9;
        let p =0;
        for (let i=0; i<imgs.length; i++){
            
            

    // on ajoute l'ecouteur click 
        for (let img of imgs) {
            img.addEventListener("click", function (e){
                e.preventDefault();
                let src = e.currentTarget.getAttribute("src");
                console.log(src);
                // On ajoute l'image de la page photographe dans la modale

                // on affiche la modale
                modale.classList.add("show");
            });
            close.addEventListener("click", function (e){
                modale.classList.remove("show");
            })

        } 
        }

    }

    
   
    
}


getArtist ();


