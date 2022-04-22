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
    const {media} = data2;
    

    
    
    function renderPhotographers2 () {
        console.log(media);
        const article = document.createElement('article');
        main.appendChild(article);
        for (let ids of media) {
            let id = ids.photographerId;
            console.log(id);
            for (let i=0; i<id.length; i++){
                const card = media.map((person) =>
                    `<div class = "template">
                        <h2 class="title"> ${person.title} </h2>
                        <span class= "likes">  ${person.likes} </span>
                    </div>`
                ).join('')
                article.innerHTML = card;
            }
            
        }
        const cardPhotos = media.map((person) =>
                    `<div class = "template">
                        <h2 class="title"> ${person.title} </h2>
                        <span class= "likes">  ${person.likes} </span>
                    </div>`
                    ).join('')

        
       /*  for (const person of data2.media) {
            console.log(person)
            const article = document.createElement('article');
            main.appendChild(article);
            const cardPhotos = 
            `<div class = "template">
                <img 
                    alt="La photo"
                    src="${person.image}"
                />
                <h2 class="title"> ${person.title} </h2>
                <span class= "likes">  ${person.likes} </span>
            </div>`
            article.innerHTML = cardPhotos;
        } */
    }
    renderPhotographers2();
} 
displayPhotographers2();

let url = "q=URLUtils.searchParams&topic=api";
let paramstring = new URLSearchParams(url);

paramstring.set("topic", "More webdev");

console.log(url);


//data.photographers.name//