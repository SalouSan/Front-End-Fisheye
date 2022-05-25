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
        

        let card = media.map((person) =>
            `<div class = "template">
                <h2 class="title"> ${person.title} </h2>
                <span class= "likes">  ${person.likes} </span>
             </div>`
            ).join('')
            const article = document.createElement('article');
            article.innerHTML = card;
            const template = document.querySelectorAll(".template");
            const button = document.createElement("button");
            button.setAttribute("class", "btn");
            button.innerText="Tri";
            photographersContener.appendChild(article);
            article.insertAdjacentElement("beforebegin", button);


                    button.addEventListener("click", function (e){
                        e.preventDefault();
                        console.log("tri");
                        let card = media.sort((a,b) => a.likes - b.likes)
                        .map((person) =>
                        `<div class = "template">
                            <h2 class="title"> ${person.title} </h2>
                            <span class= "likes">  ${person.likes} </span>
                         </div>`
                        ).join('')
                        article.innerHTML = card;
                        return card
                    });

        }
                
                
                

    
    renderPhotographers2();
    

    
    // Classe qui gère automatiquement l'instanciaton d'un objet à la classe correspondante
    class Media {
        constructor(media) {
            this._title = media.title;
            this._likes = media.likes;
            this._image = media.image;
            this._video = media.video;

            if(this._image){
                this.displayImage();
            }
            else if (this._video){
                this.displayVideo();
            }
        }

        displayImage(){
            `<div class= "picture">
            <img class="media" src ="assets/Sample_Photos/Mimi/${this._image}"/>
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
        displayVideo(){
            `<div class= "picture">
            <video class="media" controls="controls"
                <source src = "assets/Sample_Photos/Mimi/${this._video}"
                        type="video/mp4">
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

let messi = "Messi"
messi+= "Neymar";

console.log(messi);