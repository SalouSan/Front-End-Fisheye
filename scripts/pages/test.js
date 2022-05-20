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
            const div = document.querySelectorAll(".picture");
            const img = document.querySelector("img");

            if (media.map((element)=> element.video)) {
                const vid = document.createElement("video");
                const vidClass = vid.setAttribute("class", "player");
                const controls = vid.setAttribute("controls", "controls");
                const source = document.createElement("source");
                source.src = "assets/Sample Photos/Mimi/${person.video}";
                source.type = "video/mp4";
                for (let i=0; i<div.length; i++){
                vid.insertAdjacentElement('afterbegin',source);
                div[i].insertAdjacentElement('afterbegin',vid);     
                }       
            }
            return div;
            
        }
    } 
    Media(); 
    

} 


    class Video {
        constructor(media,data2) {
            this._title = media.title;
            this._likes = media.likes;
            this._video = media.video;
            this._name = data2.name;
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

        createVideoCard(){
            `<div class= "picture">
            <img class="photo" src = "assets/Sample_Photos/${this._name.split(" ")[0]}/${this._video}"/>
            <div class="content">
                <div class="title_likes">    
                    <h2 class="title"> ${this._title} </h2>
                    <div class="likes_heart">
                        <p class="likes"> ${this._likes} </p>
                        <div class="heart"></div>       
                    </div>
                </div>
            </div>
        </div>`
        }
        
    }


    class Image {
        constructor(media,data2) {
            this._title = media.title;
            this._likes = media.likes;
            this._image = media.image;
            this._name = data2.name;
        }
        get title () {
            return this._title
        }
        get likes () {
            return this._likes
        }
        get video () {
            return `assets/Sample Photos/${this._name.split(" ")[0]}/${this._video}`;
        }

        createPhotoCard(){
            `<div class= "picture">
            <img class="photo" src = "assets/Sample_Photos/${this._name.split(" ")[0]}/${this._image}"/>
            <div class="content">
                <div class="title_likes">    
                    <h2 class="title"> ${this._title} </h2>
                    <div class="likes_heart">
                        <p class="likes"> ${this._likes} </p>
                        <div class="heart"></div>       
                    </div>
                </div>
            </div>
        </div>`
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








displayPhotographers2();

//data.photographers.name//


class person {
    constructor(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    }

    getfullName (){
        return `${this.firstName} ${this.lastName}`;

    }
}


const person1 = new person ("John", "Doe", "john@gmail.com");
const person2 = new person ("Bruce", "Wayne", "bw@gmail.com");

console.log(person1.getfullName());
console.log(person2.getfullName());



let John 