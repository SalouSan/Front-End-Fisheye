//Fonction asynchrone pour recuperer les données en JSON 
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let data1 = await responses.json();
    console.log(data1.name)
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
            `<img class="picture" src="assets/Sample Photos/Photographers ID Photos/${artist.portrait}"/>`
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
        
// Condition permettant d'affichant les réalisations du photographer 
        if (idPhotographer) {
            let artist = data1.photographers;
            let photographerId = artist.find((photographer)=> photographer.id === currentIds);
        
            const photograph = media.filter((artist)=> artist.photographerId === idPhotographer)
            .map((person) =>             
            `
            <div class= "picture">
                <img id="photo" src = "assets/Sample Photos/${photographerId.name.split(" ")[0]}/${person.image}"/>
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
            <div id="modale" class="modal">
                <span class="close">&times;</span>
                <div class=modal_content>
                    <img src="assets/Sample Photos/Photographers ID Photos/MimiKeel.jpg " alt="">
                </div>
            </div>`
            article.innerHTML=photograph + div;
            content.appendChild(article);
            return (article);
        }
        
    }
    photographerContent(idPhotographer);

    // Fonction qui permet de gerer les likes 
    function likes () { 
        let heart = document.querySelectorAll(".heart");
        let likes = document.querySelectorAll(".likes");
        let total = 0;
        for (let i = 0, j=0; i < heart.length, j<likes.length; i++, j++) {
            let integer = likes[j].innerText;
            console.log(likes[j]);
            heart[i].addEventListener('click', function () {
                likes[j].innerText=integer;
                integer++;
                total++;  
                
            });
            
        }   
        function globalLikesCounter () {            
            for (let j=0; j <likes.length; j++){
            total+= parseInt(likes[j].innerText);
            console.log(total);
            }
            let counter = document.createElement("div");
            counter.setAttribute("class", "counter_content");
            for (let person of data1.photographers) {
                let price = person.price;
                console.log(price);
                counter.innerHTML = 
                `
                <div class= counter_price> 
                    <p class="counter"> ${total}</p>
                    <p class="price1"> 100€ /jour </p>
                </div>`;
                const content = document.querySelector(".photographers-content");
                content.appendChild(counter);
            }
        }
        globalLikesCounter();    
        
    }
    likes();

    // function pour la modale lightbox 

    window.onload = () => {
        const modale = document.getElementById("modale");
        const close = document.querySelector(".close");
        const links = document.querySelectorAll("a");
    } 

    
}
getArtist ();


