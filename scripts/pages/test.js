

const photographersCt = document.querySelector(".photographers");


const displayPhotographers = async function (){
	const resp = await fetch ("http://127.0.0.1:5502/data/photographers.json");
	const data = await resp.json();
	console.log(data);
	// renderPhotographers(data.photographers[0])
	photographersCt.innerHTML = renderPhotographers(data);
	function renderPhotographers (data) {
		const names = data.photographers.map((artist)=> `<li> ${artist.name}</li>`).join("-");
		const html = `<p> Photographe(s): ${data.name} </p> `;
		photographersCt.insertAdjacentHTML("beforeend", html);
		return `<ul> ${names} </ul>
                <button class="boutton"> &times;</button>
                <button class= "Trier"> Filter </button>`
		;
        
	}


};


    
/* const createDiv = () => {
        let counter = document.createElement("div");
        counter.setAttribute("class", "counter_content"); 
        return counter  
    }
    const HandleEvent = () => {
        let element= null;
        let total = 0; 
        for (let j=0; j<likes.length; j++){
            total+=parseInt(likes[j].innerText);
        }
        let person = data.photographers;
        let people = person.filter((person) => person.id === idPhotographer)
                .map((person)=>
                `
                <div class="counter_price"> 
                    <div class="container">
                        <p class="counter"> ${total} </p>
                        <div class="coeur"></div>  
                    </div>
                    <p class="price1"> ${person.price}€/jour </p>
                </div>`);
        for (let i = 0, j=0; i < heart.length, j<likes.length; i++, j++) {
            let integer = likes[j].innerText;
            let count = document.querySelector(".counter");
            heart[i].addEventListener('click', function () {
                likes[j].innerText=integer;
                count.innerText=total;
                integer++;
                total++;

            });
            
        }
        return () => {
            if (!element){
                element = createDiv();
                content.appendChild(element)
            }

            element.innerHTML=people;
        }
        
    }
    const increment = HandleEvent()
 */






displayPhotographers(); 

const hero = {
	name: "Batman",
	realName: "Bruce Wayne",
	city : function () {
		console.log (this);
	}
};
const { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'

console.log(name, realName);


const displayPhotographers2 = async function () {
	const resp2 = await fetch ("http://127.0.0.1:5502/data/photographers.json");
	const data2 = await resp2.json();
	const {media} = data2;
	const article = document.createElement("article");
    

    
    
	function renderPhotographers2 () {
		console.log(media);
        

		let card = media.map((person) =>
			`<div class = "template">
                <h2 class="title"> ${person.title} </h2>
                <span class= "likes">  ${person.likes} </span>
             </div>`
		).join("");
		const template = document.querySelectorAll(".template");
		const button = document.createElement("button");
		button.setAttribute("class", "btn");
		button.innerText="Tri";
		photographersCt.appendChild(article);
		article.insertAdjacentElement("beforebegin", button);
		article.insertAdjacentElement("afterbegin", card);
		article.insertAdjacentElement("afterend", template);

		class Media {
			constructor(media) {
				this.image = media.image;
				this.title = media.title;
				this.likes = media.likes;
				this.video = media.video;
				this.photographerId = media.photographerId; 
        
				if(this.image in media){
					this.displayMedias(this.displayImage);
				}
				else if (this.video in media){
					this.displayMedias(this.displayVideo);
				}
        
			}
			displayMedias(choice){
				return `<div class= "picture">
                           Video ou image : ${choice}
                            <div class="content">
                                <div class="title_likes">    
                                    <h2 class="title"> ${this.title} </h2>
                                    <div class="likes_heart">
                                        <p class="likes"> ${this.likes} </p>
                                        <div class="heart"></div>       
                                    </div>
                                </div>
                            </div>
                        </div>`;
			}
			displayImage(){
				this.displayImage = `<img class="media" src ="assets/Sample_Photos/Mimi/${this.image}"/>`;
				this.displayMedias(this.displayImage);
			}
			displayVideo(){
				this.displayVideo = `<video class="media" controls="controls"
                <source src="/assets/Sample_Photos/Mimi/${this.video}"
                        type="video/mp4">
            </video>`;
				this.displayMedias(this.displayVideo);
			}
        
            
		}
		const mediasInsert = new Media(media);
        
		const displayMedias =mediasInsert.map((element)=>{
			return element.displayMedias();
		}).join("");
		article.insertAdjacentElement("afterbegin", displayMedias);
        


		button.addEventListener("click", function (e){
			e.preventDefault();
			console.log("tri");
			let card = media.sort((a,b) => a.likes - b.likes)
				.map((person) =>
					`<div class = "template">
                            <h2 class="title"> ${person.title} </h2>
                            <span class= "likes">  ${person.likes} </span>
                         </div>`
				).join("");
			article.innerHTML = card;
			return (card);
		});

	}
                
                
                

    
	renderPhotographers2();
    
   
    
	// Classe qui gère automatiquement l'instanciaton d'un objet à la classe correspondante
   
}; 





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
	getEmail(){
		return `${this.email}`;
	}
}


const person1 = new person ("John", "Doe", "john@gmail.com");
const person2 = new person ("Bruce", "Wayne", "bw@gmail.com");

console.log(person1.getfullName());
console.log(person2.getfullName());

let messi = "Messi";
messi+= "Neymar";

console.log(messi);



console.log(this.Mapper);


const prenom = "Karl";
const nom = "Toko Ekambi";

console.log ("Bonjour je m'appelle " + prenom + " " + nom );






