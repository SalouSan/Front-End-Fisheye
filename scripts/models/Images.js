class Image {
    constructor(media) {
        this.image = media.image;
        this.title = media.title;
        this.likes = media.likes;
        this.photographerId = media.photographerId; 
    }

    display(){
    return `
    <div class= "media_container">
        <img class="media" src="/assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.image}"/>
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

export {Image}