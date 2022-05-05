console.log ("photographer2.js");


const photographerContener = document.querySelector(".photographers-content");
const urlParams = new URLSearchParams(window.location.search);

const photographerId = parseInt(urlParams.get("id"));
console.log(photographerId);
const infosPhotograph = async function (currentId) {
    const resp = await fetch ("data/photographers.json");
    const data3 = await resp.json();
    console.log(data3);

    if(photographerId) {
        const artistSelected = data3.photographers;
        let photographerData = artistSelected.find((photographers) => photographers.id === currentId);

        function renderPhotograph () {
            const displayArtist = document.createElement("p");
            photographerContener.appendChild(displayArtist);
            displayArtist.innerHTML = `Voila l'artiste : ${photographerData.name.split(" ")[0]} `;

        }
        renderPhotograph();
    }


}
infosPhotograph(photographerId);

