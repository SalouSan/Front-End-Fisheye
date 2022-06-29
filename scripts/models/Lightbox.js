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
		this.displayImages(); this.displayVideos();
       
	}
	next (){
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == this.listElement.length -1) {
			this.currentElement = this.listElement[0];
		}
		else {
			this.currentElement = this.listElement [index + 1];
		}
		this.displayImages(); this.displayVideos();
               
	}
	previous () {
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == 0) {
			this.currentElement = this.listElement[this.listElement.length -1];
		}
		else {
			this.currentElement = this.listElement [index - 1];
		}
        
		this.displayImages(); this.displayVideos();
	}
	manageEvent () {
		document.querySelector(".chevronR").addEventListener("click", () => {
			this.next();
		});
		document.querySelector(".chevronR").addEventListener("keyup", (e) => {
			if(e.key === "ArrowRight"){
				this.next();
			}
		});
        
		document.querySelector(".chevronL").addEventListener("click", () => {
			this.previous();
            
		});
		document.querySelector(".chevronL").addEventListener("keyup", (e) => {
			if(e.key === "ArrowLeft"){
				this.previous();
			}
		});
		document.querySelector(".lightbox__close").addEventListener("click", () => {
			this.close();
		});
		document.querySelector(".lightbox__close").addEventListener("keyup", (e) => {
			if (e.key=== "Escape") {
				this.close();
			}
            
		});
	}
	close (){

		document.querySelector(".lightbox").classList.remove("show");
	}
    
    
	displayImages(){
		document.querySelector(".lightbox").classList.add("show");
		document.querySelector(".lightbox.container").classList.add("show");
		document.querySelector(".lightbox.container.element").src = `assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.image}`;
		document.querySelector(".lightbox.container.element").alt =`${this.currentElement.title}`;
		document.querySelector(".lightbox.container.video").style.display = "none";
		document.querySelector(".lightbox.container.element").style.display = "block";
		document.querySelector(".lightbox.container.element").classList.add("show");
        
	}
	displayVideos(){
		document.querySelector(".lightbox").classList.add("show");
		document.querySelector(".lightbox.container").classList.add("show");
		document.querySelector(".lightbox.container.video").src =`assets/Sample_Photos/${photographerId.name.split(" ")[0]}/${this.currentElement.video}`;
		document.querySelector(".lightbox.container.video").alt =`${this.currentElement.title}`;
		document.querySelector(".lightbox.container.element").style.display = "none";
		document.querySelector(".lightbox.container.video").style.display = "block";
		document.querySelector(".lightbox.container.video").classList.add("show");
	}
    
                  
}