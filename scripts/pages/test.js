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
    const images = media.map((person)=> new Video(person));


    const article = document.createElement("article");
    article.innerHTML=  ` 
    <div class="template">
        <video class="video"> ${this._video} </video>
        <h2 class="title" ${this._title} </h2>
        <span class="likes" ${this._likes} </span> 
    </div> `;

    photographersContener.appendChild(article);
} 
displayPhotographers2();

const messi = document.getElementById("main");
const mess = messi.getAttribute("id");
console.log(mess)



//data.photographers.name//


// Classe qui gère automatiquement l'instanciaton d'un objet à la classe correspondante



class Video {
    constructor(media, type) {
        const element = document.createElement(type);
        const source = document.createElement("source");
        const src = source.setAttribute("src", "");
        this.video = media.video;
        return {
            element,
            setPath() {
                src.innerHTML = `assets/Sample Photos/Mimi/${this.video}`;
            },
            setAttribute () {
                element.setAttribute("controls", "controls")
            }
        };
    }
}
class Image {
    constructor(media, type) {
        const element = document.createElement(type);
        this.video = media.image;
        return {
            element,
            setTag() {
                element.innerHTML = `assets/Sample Photos/Mimi/${this.image}`;
            }
        };
    }
}

class Media {
    constructor (media, type){
        if (type === "video") {
            return new Video(media)
        }
        else if (type === "image") {
            return new Image(media)
        }
        else {
            throw 'Unknown type format'
        }
    }
}

