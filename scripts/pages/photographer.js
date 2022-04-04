//Mettre le code JavaScript lié à la page photographer.html

const pics = `assets/Sample Photos/Mimi/Portrait_Nora.jpg`

function headerPhotographers () {
    const header = document.querySelector(".photograph-header");
    const p = document.createElement("p");
    p.setAttribute("class", "prénom");
    p.textContent = "Mimi Keel";
    const img = document.createElement("img");
    img.setAttribute("src",pics);
    header.appendChild(p);
    header.appendChild(img);
    return (header);

}
headerPhotographers()