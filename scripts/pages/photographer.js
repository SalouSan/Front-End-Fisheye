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
            `<img class="pic" src="assets/Sample Photos/Photographers ID Photos/${artist.portrait}"/>`
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
                <img class="photo" src = "assets/Sample Photos/${photographerId.name.split(" ")[0]}/${person.image}"/>
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
            const picture = document.querySelectorAll(".picture");
            console.log(picture); 
            
            let div = `
            <div id="modale" class="modal">
                <span class="close">&times;</span>
                <div class=modal_content>
                    <span class="chevron left"></span>  
                    <span class="chevron right"></span>
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
        function globalLikesCounter () {            
            for (let j=0; j <likes.length; j++){
            total+=parseInt(likes[j].innerText);
            console.log(total);
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
                    </div>
                    <p class="price1"> ${person.price}€/jour </p>
                </div>`);
                counter.innerHTML=people;
                const content = document.querySelector(".photographers-content");
                content.appendChild(counter);
            
            for (let i = 0, j=0; i < heart.length, j<likes.length; i++, j++) {
                let integer = likes[j].innerText;
                let count = document.querySelector(".counter");
                console.log(likes[j]);
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
        const close = document.querySelector(".close");
        const imgs = document.querySelectorAll(".photo");
        let leftButton = document.querySelector(".chevron.left");
        let rightButton = document.querySelector(".chevron.right");
        const im = document.querySelector(".modal_content img");
        const modalContent = document.querySelector(".modal_content");
        let nbr = 9;
        let p =0;
        modalContent.style.width=(800*nbr)+"px";
        for (let i=0; i<imgs.length; i++){
            
            

    // on ajoute l'ecouteur click 
        for (let img of imgs) {
            img.addEventListener("click", function (e){
                e.preventDefault();
                // On ajoute l'image de la page photographe dans la modale
                const elementDiv = document.createElement("div");
                elementDiv.setAttribute("class","photographies");
                elementDiv.style.backgroundImage = `url('${imgs[i].src}')`;
                modalContent.appendChild(elementDiv);
                modalContent.style.width=(900*nbr)+"px";
                modalContent.style.height=(20*nbr)+"px";

                // on affiche la modale
                modale.classList.add("show");
            });
            leftButton.addEventListener("click", function (e){
                console.log("left");
                im.src--;
            })
            rightButton.addEventListener("click", function (e){
                console.log("right");
                im.src++;
            })
            close.addEventListener("click", function (e){
                modale.classList.remove("show")
            })

        } 
    }

    }
}
getArtist ();


