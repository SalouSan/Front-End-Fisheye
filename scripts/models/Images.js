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
        <img class="media" src="assets/Sample_Photos/${this.photographer.name.split(" ")[0]}/${this.image}" data-id="${this.id}" alt="Image :${this.title}" tabindex="17"/>
        <div class="content">
            <div class="content__description">    
                <h3 class="content__description--title" tabindex="17"> ${this.title}  </h3>
                <div class="content__items">
                    <p aria-label="Nombre de likes :${this.likes}" class="content__items--like" tabindex="17"> ${this.likes} </p>
                    <div>
                        <img class="content__items--heart" src="assets/icons/heart.svg" tabindex="17"role="button" aria-label="likes"/>  
                    </div>     
                </div>
            </div>
        </div>
    </div>`;
	}
	displayLightbox(){
		document.querySelector(".lightbox").classList.add("show");
		document.querySelector(".lightbox.container").classList.add("show");
		document.querySelector(".lightbox.container.element").src = `assets/Sample_Photos/${this.photographer.name.split(" ")[0]}/${this.image}`;
		document.querySelector(".lightbox.container.element").alt =`Image ${this.title}`;
		document.querySelector(".image_title").innerText =`${this.title}`;
		document.querySelector(".image_title").setAttribute("aria-label", `Titre ${this.title}`);
		document.querySelector(".image_title").style.display ="block";
		document.querySelector(".video_title").style.display ="none";
		document.querySelector(".lightbox.container.video").style.display = "none";
		document.querySelector(".lightbox.container.element").style.display = "block";
		document.querySelector(".lightbox.container.element").classList.add("show");
        
	}
}


