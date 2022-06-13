export class Lightbox {
    constructor (listElement) {
        this.currentElement = null; 
        this.listElement = listElement;  
        this.photographerId = listElement.photographerId;
        this.manageEvent();
    }
    getElementById(id) {
        return this.listElement.find(element=> element.id == id);
    }
    show (id) {
        this.currentElement = this.getElementById(id);
        this.display()
       
    }
    next (){
        let index = this.listElement.findIndex(element => element.title === this.currentElement.title);
        if (index == this.listElement.length -1) {
            this.currentElement = this.listElement[0];
        }
        else {
            this.currentElement = this.listElement [index + 1];
        }
        
        this.display();
    }
    previous () {
        let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
        if (index == 0) {
            this.currentElement = this.listElement[this.listElement.length -1];
        }
        else {
            this.currentElement = this.listElement [index - 1];
        }
        
        this.display();
    }
    manageEvent () {
        document.querySelector(".chevron1.R").addEventListener("click", () => {
            this.next();
        })
        document.querySelector(".chevron1.R").addEventListener("keyup", (e) => {
            if(e.key === "ArrowRight"){
                this.next();
            }
        })
        
        document.querySelector(".chevron1.L").addEventListener("click", (e) => {
            this.previous();
            
        })
        document.querySelector(".chevron1.L").addEventListener("keyup", (e) => {
            if(e.key === "ArrowLeft"){
                this.previous();
            }
        })
        document.querySelector(".lightbox__close").addEventListener("click", () => {
            this.close();
        })
        document.querySelector(".lightbox__close").addEventListener("keyup", (e) => {
            if (e.key=== "Escape") {
                this.close();
            }
            
        })
    }
    close (){
        document.querySelector(".lightbox").classList.remove("show");
    }
    
    
    display(){
        document.querySelector(".lightbox").classList.add("show");
        document.querySelector(".lightbox.container").classList.add("show");
        document.querySelector(".lightbox.container.picture").classList.add("show");
        document.querySelector(".lightbox.container.picture").src= `assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.image}`;
    }
    videos(){
     let video = document.createElement("video");
     video.setAttribute("controls", "controls");
     video.setAttribute("class", "ightbox container media");
     let source = document.createElement("source");
     source.setAttribute("src")
     document.querySelector("lightbox.container").innerHTML =`  
        <video class="lightbox container media" controls="controls" data-id="${this.id}"
        <source src="assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.video}"
                type="video/mp4 alt="${this.title}">
    </video>`
    
    }
    
}