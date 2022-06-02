class Video{
    constructor(media) {
        this.title = media.title;
        this.likes = media.likes;
        this.video = media.video;
        this.photographerId = media.photographerId; 
    }
    display(){
    return `
    <div class= "media_container">
        <video class="media" controls="controls"
            <source src="/assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video}"
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