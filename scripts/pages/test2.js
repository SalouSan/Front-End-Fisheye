console.log ("test2.js");


class User {
	constructor(firstName, lastName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		if(this.firstName){
			this.displayFirstName();
		}
		else if (this.lastName){
			this.displaylastName();
		}
	}
  
	displayFirstName(){
		return `J'affiche le firstname : ${this.firstName}`;
	}
	displaylastName(){
		return `J'affiche le lastName : ${this.lastName}`;
	}

	/* fullName() {
      return `${this.firstName} ${this.lastName}`;
    } */
}
  
const user1 = new User("John","Doe","john@doe.com");
  
const user2 = new User("Jane","Doe","jane@doe.com");

console.log(user2.displayFirstName());





  

class Image {
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
    </div>`;
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
    </div>`;
	}
    
}