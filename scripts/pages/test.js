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
    const article = document.createElement('article');
    

    
    
    function renderPhotographers2 () {
        console.log(media);
        

        let card = media.map((person) =>
            `<div class = "template">
                <h2 class="title"> ${person.title} </h2>
                <span class= "likes">  ${person.likes} </span>
             </div>`
            ).join('')
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
    
    class Media {
        constructor(media) {
            this.image = media.image;
            this.title = media.title;
            this.likes = media.likes;
            this.video = media.video;

            if(this.image){
                this.displayImage();
            }
            else if (this.video){
                this.displayVideo();
            }
        }

        displayImage(){
        return `
        <div class= "picture">
            <img class="media" src="assets/Sample_Photos/Mimi/${this.image}"/>
            <div class="content">
                <div class="title_likes">    
                    <h2 class="title"> ${this.title} </h2>
                    <div class="likes_heart">
                        <p class="likes"> ${this.likes} </p>
                        <div class="heart"></div>       
                    </div>
                </div>
            </div>
        </div>`
        }
        displayVideo(){
        return `
        <div class= "picture">
            <video class="media" controls="controls"
                <source src="assets/Sample_Photos/Mimi/${this.video}"
                        type="video/mp4">
            </video>
            <div class="content">
                <div class="title_likes">    
                    <h2 class="title"> ${this.title} </h2>
                    <div class="likes_heart">
                        <p class="likes"> ${this.likes} </p>
                        <div class="heart"></div>       
                    </div>
                </div>
            </div>
        </div>`
        }
        
    }
    const listMedias = media.map((element)=> new Media (element));
    const division = document.createElement("div");
    division.setAttribute("class", "test");
    article.insertAdjacentElement("afterend", division);
    const mapVideos = listMedias.map((element)=> element.displayImage()).join("");
    article.innerHTML= mapVideos;
    
    // Classe qui gère automatiquement l'instanciaton d'un objet à la classe correspondante
   
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


