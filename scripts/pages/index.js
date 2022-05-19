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
                <img class="profil" src= "assets/Sample_Photos/Photographers-ID_Photos/${artist.portrait}" alt= "photo de profil" 
                />         
                <h2 class="name"> ${artist.name} </h2>
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




  

