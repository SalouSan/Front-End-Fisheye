export class Video {
    constructor(media) {
        this.title = media.title;
        this.likes = media.likes;
        this.video = media.video;
        this.id = media.id;
        this.photographerId = media.photographerId; 
    }
    display(){
    return `
    <div class= "media_container" role="listitems">
        <video class="media" controls="controls" data-id="${this.id}"
            <source src="assets/Sample_Photos/${this.photographerId}/${this.video}"
                    type="video/mp4 alt="${this.title}">
        </video>
        <div class="content">
            <div class="content__description">    
                <h3 class="content__description--title"> ${this.title} </h3>
                <div class="content__items">
                    <p class="content__items--like"> ${this.likes} </p>
                    <div class="content__items--heart"></div>       
                </div>
            </div>
        </div>
    </div>`
    }
    
}