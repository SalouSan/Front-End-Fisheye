//Mettre le code JavaScript lié à la page photographer.html
async function getArtist (){
    let responses = await fetch ('data/photographers.json');
    let dataa = await responses.json();
    let header = document.querySelector(".photograph-header");

    const naming = dataa.photographers.map((artist)=>artist.name);
    const cities = dataa.photographers.map((artist)=>artist.city);
    const countries = dataa.photographers.map((artist)=>artist.country);
    const taglines = dataa.photographers.map((artist)=>artist.tagline);
    const portrait = dataa.photographers.map((artist)=>artist.portrait);

    header.innerHTML = headerPhotographers();

    function headerPhotographers () {
        const profiles = 
        `       <div class= "profil">
                    <h1 class = "name"> ${naming[1]} </h1>
                    <span class = "location"> ${cities[1]},${countries[1]} </span>
                    <span class = "tagline"> ${taglines[1]} </span>
                </div>
            <img class="picture" src="/assets/Sample Photos/Photographers ID Photos/${portrait[1]}" alt= "photo de profil" /> 
            `
        return `${profiles}`;

    }
    headerPhotographers();

    function photographerContent () {
        const content = document.querySelector(".photographers-content");
        const article = document.createElement('article');
        const p = document.createElement('p');
        const { media } = dataa;
        console.log(media);
        const firstNames = dataa.photographers.map(character => character.name.split(" ")[0]);
        console.log(firstNames);
        let url0_string = document.querySelector(".photographer_link");
        let url = new URLSearchParams(url2_string)
        let ch = url.get("id")

        console.log(ch);

        
            const photograph = media.filter((id)=> id.photographerId == 243)
                .map((person) =>
            `
            <div class= "picture">
                <img src = "assets/Sample Photos/Mimi/${person.image}" />
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


