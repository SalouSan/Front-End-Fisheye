export class Image {
	constructor(media) {
		this.image = media.image;
		this.title = media.title;
		this.likes = media.likes;
		this.id = media.id;
		this.photographerId = media.photographerId; 

    
	}

	display(){
		return `
    <div class= "media_container" role="listitems">
        <img class="media" src="assets/Sample_Photos/${this.photographerId.name}/${this.image}" data-id="${this.id}" alt="${this.title}"/>
        <div class="content">
            <div class="content__description">    
                <h3 class="content__description--title"> ${this.title} </h3>
                <div class="content__items">
                    <p class="content__items--like"> ${this.likes} </p>
                    <div class="content__items--heart"></div>       
                </div>
            </div>
        </div>
    </div>`;
	}
}


