export class Image {
	constructor(media) {
		this.image = media.image;
		this.title = media.title;
		this.likes = media.likes;
		this.id = media.id;
		this.photographer = media.photographer; 
		this.date = media.date;
	}

	display(){
		return `
    <div class= "media_container" role="listitems">
        <img class="media" src="assets/Sample_Photos/${this.photographer.name.split(" ")[0]}/${this.image}" data-id="${this.id}" alt="Photo :${this.title}" tabindex="9"/>
        <div class="content">
            <div class="content__description">    
                <h3 class="content__description--title" tabindex="9"> ${this.title}  </h3>
                <div class="content__items">
                    <p aria-label="Nombre de likes :${this.likes}" class="content__items--like" tabindex="9"> ${this.likes} </p>
                    <div>
                        <img class="content__items--heart" src="assets/icons/heart.svg" tabindex="9"role="button" aria-label="likes"/>  
                    </div>     
                </div>
            </div>
        </div>
    </div>`;
	}
}

