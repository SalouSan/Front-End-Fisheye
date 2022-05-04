//Mettre le code JavaScript lié à la page photographer.html
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let dataa = await responses.json();
    let header = document.querySelector(".photograph-header");

    /* const naming = dataa.photographers.map((artist)=>artist.name);
    const cities = dataa.photographers.map((artist)=>artist.city);
    const countries = dataa.photographers.map((artist)=>artist.country);
    const taglines = dataa.photographers.map((artist)=>artist.tagline);
    const portrait = dataa.photographers.map((artist)=>artist.portrait);
    const id = dataa.photographers.map((artist)=> artist.id);

    function headerPhotographers () {
        const profil = document.querySelector(".profile")
        const photo = document.querySelector(".image")
        const profiles = 
        `   <h1 class= "name1"> ${naming[1]} </h1>
            <span class= "location1"> ${cities[1]}, ${countries[1]} </span> </br>
            <span class= "tagline1"> ${taglines[1]} </span>
        `
        const image = 
        `<img class="picture" src="/assets/Sample Photos/Photographers ID Photos/${portrait[1]}" alt= "photo de profil" /> 
        `     
        profil.innerHTML = profiles;
        photo.innerHTML = image;

        return `${profiles} ${image}`;

    }
    headerPhotographers(); */

    function photographerContent () {
        const content = document.querySelector(".photographers-content");
        const article = document.createElement('article');
        const { media } = dataa;
        console.log(media);
        let firstNames = dataa.photographers.map(character => character.name.split(" ")[0]);
        console.log(firstNames);
        let urlParams = new URLSearchParams(window.location.search);
        let id_ = parseInt(urlParams.get("id"));
        console.log(id_)  
        let names = {
            Mimi : "243",
        }



        console.log(names);
        let key = Object.keys(names);
        console.log(key);

            const photograph = media.filter((id)=> id.photographerId == id_)
                .map((person) =>             
            `
            <div class= "picture">
                <img id="photo" src = "assets/Sample Photos/${key}/${person.image}" />
                <h2 class = "title"> ${person.title} </h2>
                <p class = "likes"> ${person.likes} </p>
            </div>
    
            `).join('');


        article.innerHTML=photograph;
        content.appendChild(article);
        return (article);
        }
    photographerContent();
}
getArtist ();


function replace (id_) {
    const div = document.querySelector(".title");
    console.log(div);
    if(id_ == "82") {
        src.replace(`${key}`, "Tracy")
    }
}
replace();