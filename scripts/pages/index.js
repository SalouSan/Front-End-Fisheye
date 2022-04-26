let api_url = 'data/photographers.json';
const article = document.querySelector(".photographer_section");
const getPhotographers = async function () {
    let response = await fetch (api_url);
    let data = await response.json();
    console.log(data);
    article.innerHTML = renderPhotographers(data);
    function renderPhotographers (data) {
        const displayArtists = data.photographers.map((artist) => `
        <div class = "profil1">
            <a href= "photographer.html?id=${artist.id} "class="photographer_link"> 
                <img class="profil" src= "assets/Sample Photos/Photographers ID Photos/${artist.portrait}" alt= "photo de profil" 
                />
            
                <h2> ${artist.name} </h2>
                <span class="location"> ${artist.city}, ${artist.country} </span> </br>
                <span class="tagline"> ${artist.tagline} </span> </br>
                <span class="price"> ${artist.price} €/jour </span> 
            </a>
        </div>
        ` 
        ).join(" ");
        return `${displayArtists}`;
        

    }
    let url2_string = document.querySelector(".photographer_link");
    console.log(url2_string)
   
}

getPhotographers();




   /*  function renderPhotographers () {

            const article = document.querySelector(".photographer_section");
            const names = data.photographers.map((artist) => artist.name);
            const city = data.photographers.map((artist) => artist.city);
            const country = data.photographers.map((artist) => artist.country);
            const tagline = data.photographers.map((artist) => artist.tagline);
            const price = data.photographers.map((artist) => artist.price);
            const photographers = 
            `
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/MimiKeel.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[0]} </h2>
                <span class="location"> ${city[0]}, ${country[0]} </span> </br>
                <span class="tagline"> ${tagline[0]} </span> </br>
                <span class="price"> ${price[0]} €/jour </span> 
            </div>
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/EllieRoseWilkens.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[1]} </h2>
                <span class="location"> ${city[1]}, ${country[1]} </span> </br>
                <span class="tagline"> ${tagline[1]} </span> </br>
                <span class="price"> ${price[1]} €/jour </span>  
            </div>
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/TracyGalindo.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[2]} </h2>
                <span class="location"> ${city[2]}, ${country[2]} </span> </br>
                <span class="tagline"> ${tagline[2]} </span> </br>
                <span class="price"> ${price[2]} €/jour </span> 
            </div>
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/NabeelBradford.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[3]} </h2>
                <span class="location"> ${city[3]}, ${country[3]} </span> </br>
                <span class="tagline"> ${tagline[3]} </span> </br>
                <span class="price"> ${price[3]} €/jour </span> 
            </div>
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/RhodeDubois.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[4]} </h2>
                <span class="location"> ${city[4]}, ${country[4]} </span> </br>
                <span class="tagline"> ${tagline[4]} </span> </br>
                <span class="price"> ${price[4]} €/jour </span> 
            </div>
            <div class = "profil1">
                <img class= "profil" src = "/assets/Sample Photos/Photographers ID Photos/MarcelNikolic.jpg" alt = "Photo de profil du photographe" />
                <h2> ${names[5]} </h2>
                <span class="location"> ${city[5]}, ${country[5]} </span> </br>
                <span class="tagline"> ${tagline[5]} </span> </br>
                <span class="price"> ${price[5]} €/jour </span> 
            </div>
            `  

            article.innerHTML = photographers;
        
    }
    renderPhotographers();
}
getPhotographers ();
 */

let url1_string = document.querySelector(".photographer_link");
console.log(url1_string);
