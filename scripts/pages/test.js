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

    }
    renderPhotographers2();
    const article = document.createElement("article");
    article.innerHTML=  ` 
    <div class="template">
        <video class="video"> ${this._video} </video>
        <h2 class="title" ${this._title} </h2>
        <span class="likes" ${this._likes} </span> 
    </div> `;
   

    photographersContener.appendChild(article);

    function Media () {
        for (let type of media) {
            const {media} = data2;
            let video = type.video;
            let image = type.image;
            const div = document.querySelector(".picture");
            const img = document.querySelector("img");

            if (media.map === video) {
                const vid = document.createElement("video");
                const vidClass = vid.setAttribute("class", "player");
                const controls = vid.setAttribute("controls", "controls");
                const source = document.createAttribute("source");
                source.src = "assets/Sample Photos/Mimi/${person.video}";
                source.type = "video/mp4";
                div.appendChild(vid);
                div.removeChild(img);              
            }
            
        }
    } 
    Media();
    

} 



    class Video {
        constructor(media) {
            this._title = media.title;
            this._likes = media.likes;
            this._video = media.video;
        }
        get title () {
            return this._title
        }
        get likes () {
            return this._likes
        }
        get video () {
            return `assets/Sample Photos/Mimi/${this._video}`;
        }
        
    }


    class Image {
        constructor(media, type) {
            const element = document.createElement("img");
            const src = element.setAttribute("src", "");
            this.video = media.image;
            return {
                element,
                setPath() {
                    src.innerHTML = `assets/Sample Photos/Mimi/${this.image}`;
                }
            };
        }
    }


    // Classe qui gère automatiquement l'instanciaton d'un objet à la classe correspondante
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

    const source = document.createElement("source");
    source.type = "video/mp4";
    source.src = "assets/Sample Photos/Photographers ID/ Mimi.jpg";
    console.log(source);








displayPhotographers2();

//data.photographers.name//








