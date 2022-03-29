console.log("test.js");

const photographersContener = document.querySelector(".photographers");
const renderPhotographers = function (data) {
    const html = `<p> Photographe(s): ${data.name} </br>
    ${data.id} </br>
    ${data.city} </br>
    ${data.country} </br>
    ${data.tagline} </br>
    ${data.price} </br>
    ${data.portrait} </br>
    </p> `;
    photographersContener.insertAdjacentHTML("beforeend", html);
}


const displayPhotographers = async function (){
    const resp = await fetch (`http://127.0.0.1:5502/data/photographers.json`);
    const data = await resp.json();
    console.log(data);
    renderPhotographers(data.photographers[0])
}
displayPhotographers();
