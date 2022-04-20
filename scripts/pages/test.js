console.log("test.js");

const photographersContener = document.querySelector(".photographers");
const renderPhotographers = function (data) {
    const html = `<p> Photographe(s): ${data.name} </p> `;
    photographersContener.insertAdjacentHTML("beforeend", html);
}


const displayPhotographers = async function (){
    const resp = await fetch (`http://127.0.0.1:5502/data/photographers.json`);
    const data = await resp.json();
    console.log(data);
    // renderPhotographers(data.photographers[0])
    photographersContener.innerHTML = renderPhotographers(data);
    function renderPhotographers (data) {
        const names = data.photographers.map((artist)=> `<li> ${artist.name}</li>`).join("-");
        return `<ul> ${names} </ul>`;
        
    }

};

displayPhotographers(); 

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    city : function () {
        console.log (this);
    }
  };
  const { name, realName } = hero;
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

  console.log(name, realName);

const main = document.getElementById("main");
const displayPhotographers2 = async function () {
    const resp2 = await fetch (`http://127.0.0.1:5502/data/photographers.json`);
    const data2 = await resp2.json();
    const picture = `assets/Sample Photos/Mimi/Portrait_Nora.jpg`
    const map = data2.media.map ((media) => new Photos (media));
    console.log(map);

    
    function renderPhotographers2 () {
        for (const person of data2.media) {
            const article = document.createElement('article');
            main.appendChild(article);
            const cardPhotos = 
            `<div class = "template">
                <img 
                    alt="La photo"
                    src="${photos[1]._image}"
                />
                <h2 class="title"> ${photos._title} </h2>
                <span class= "likes">  ${photos._likes} </span>
            </div>`
            article.innerHTML = cardPhotos;
        }
    }
    renderPhotographers2();
} 
displayPhotographers2();

//data.photographers.name//