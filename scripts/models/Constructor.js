        
class Photos {
    constructor (media) {
        this._photographerId = media.photographerId;
        this._id = media.id;
        this._title = media.title;
        this._image = media.image;
        this._likes = media.likes;
        this._price = media.price;
    }
    get title () {
        return this._title
    }
    get image() {
        return `/assets/Sample Photos/Ellie Rose/${this._image}`
    }
    get likes(){
        return this._likes
    }
    get price(){
        return this._price
    }
    
}


