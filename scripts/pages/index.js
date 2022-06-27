let api_url = "data/photographers.json";
const article = document.querySelector(".photographer_section");
const getPhotographers = async function () {
	let response = await fetch (api_url);
	let data = await response.json();
	console.log(data);
	let headerIndex = document.querySelector("header");
	headerIndex.setAttribute("role", "banner");
	article.innerHTML = renderPhotographers(data);
	function renderPhotographers (data) {
		const displayArtists = data.photographers.map((artist) => `
        <div class = "photographer__profil">
            <a href= "photographer.html?id=${artist.id} "class="photographer__profil--IDlink"> 
                <img class="photographer__profil--portrait" src= "assets/Sample_Photos/Photographers-ID_Photos/${artist.portrait}" alt= " Photo de :${artist.name}" 
                />         
                <h2 class="photographer__profil--name"> ${artist.name} </h2>
                <span class="photographer__profil--location"> ${artist.city}, ${artist.country} </span> </br>
                <span class="photographer__profil--tagline"> ${artist.tagline} </span> </br>
                <span class="photographer__profil--price"> ${artist.price} €/jour </span> 
            </a>
        </div>
        ` 
		).join(" ");
		return `${displayArtists}`;
        

	}
   
};

getPhotographers();




  

