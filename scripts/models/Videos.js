export class Video {
	constructor(media) {	
		this.title = media.title;
		this.likes = media.likes;
		this.video = media.video;
		this.id = media.id;
		this.date = media.date;
		this.photographer = media.photographer; 
	}
	display(){
		return `
    <div class= "media_container" role="listitems">
            <video id="vid" class="media" tabindex="4" data-id="${this.id}"
                <source src="assets/Sample_Photos/${this.photographer.name.split(" ")[0]}/${this.video}"
                    type="video/mp4 alt="Video:${this.title}">
            </video>
        <div class="content">
            <div class="content__description">    
                <h3 class="content__description--title" tabindex="4"> ${this.title}  </h3>
                <div class="content__items">
                    <p aria-label="Nombre de likes :${this.likes}" class="content__items--like" tabindex="4"> ${this.likes} </p>
                    <div>
                        <img class="content__items--heart" src="assets/icons/heart.svg" tabindex="4" role="button" aria-label="likes"/>    
                    </div>   
                </div>
            </div>
        </div>
    </div>`;
	}
    
}