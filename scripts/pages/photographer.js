//Mettre le code JavaScript lié à la page photographer.html
async function getArtist (){
    let responses = await fetch ('/data/photographers.json');
    let dataa = await responses.json();
    
    

    const pics = `assets/Sample Photos/Mimi/Portrait_Nora.jpg`
    const naming = dataa.photographers.map((artist) => `${artist.name}`);
    const citi = dataa.photographers.map((artist) => `${artist.city}`);
    const country = dataa.photographers.map((artist) => `${artist.country}`);
    const tagline = dataa.photographers.map((artist) => `${artist.tagline}`);

    function headerPhotographers () {
        const header = document.querySelector(".photograph-header");
        const p = document.createElement("p");
        p.setAttribute("class", "prénom");
        p.innerHTML = `${naming[0]}`;
        const p1 = document.createElement("p");
        p1.setAttribute("class", "city");
        p1.innerHTML = `${citi[0]}`+ `, ${country[0]}`;
        const p2 = document.createElement("p");
        p2.setAttribute("class", "tagline");
        p2.innerHTML =`${tagline[0]}`;
        const img = document.createElement("img");
        img.setAttribute("src",pics);
        header.appendChild(p);
        header.appendChild(p1);
        header.appendChild(p2);
        header.appendChild(img);
        return (header);

    }
    headerPhotographers();

    function photographerContent () {
        const content = document.querySelector(".photographers-content");
        const article = document.createElement('article');
        const p = document.createElement('p');
        const { media } = dataa;
        console.log(media);
        
            const photograph = media.filter((id)=> id.photographerId === 82)
                .map((person) =>
            `
            <div class= "picture">
                <img src = "assets/Sample Photos/Tracy/${person.image}" />
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