class Lightbox {
    static init(){
        const mediasPhotographer = Array.from(document.querySelectorAll(".media"))
        const gallery = mediasPhotographer.map((media)=>media.getAttribute('src'));
        mediasPhotographer.forEach((media)=> media.addEventListener('click', e =>{
                e.preventDefault();
                new Lightbox (e.currentTarget.getAttribute('src'), gallery);
            }))
    }


    constructor(url,images){
        this.element = this.buildDOM(url)
        this.images=images
        document.body.appendChild(this.element)
    }
    loadImage(){
        this.url = null;
        const image = new Image();
        const container = this.element.querySelector(".lightbox__container");
        container.innerHTML=""
        image.onload = () => {
            container.appendChild(image);
            this.url=url;
        }
        image.src=url
    }
    next(e){
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url)
        if(i === this.images.length -1){
            i=-1
        }
        this.loadImage(this.images[i+1])
    }
    prev (e) {
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url)
        this.loadImage(this.images[i+1]);
        if(i == 0){
            i= this.images.length -1
        }
        this.loadImage(this.images[i-1]);
    }

    close (e){
        e.preventDefault();
        this.element.classList.add('')
    }
    onKeyUp(e){
        if (e.key === 'Escape'){
            this.close(e);
        }
    }

    buildDOM (url){
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `<button class="lightbox__close"></button>
        <button class="next"> Suivant </button>
        <button class="prev"> Précédent </button>                              
        <div class=lightbox__container>
            <img class="pics" src="https://picsum.photos/500/500" alt=""/> 
        </div>`
        dom.querySelector(".lightbox__close").addEventListener('click', 
        this.close.bind(this))
        dom.querySelector(".next").addEventListener('click', 
        this.next.bind(this))
        dom.querySelector(".prev").addEventListener('click', 
        this.prev.bind(this))
        
        return dom
    }
}
Lightbox.init()
const {media} = data1