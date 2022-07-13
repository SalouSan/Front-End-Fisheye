export class Lightbox {
	constructor (listElement,artist) {
		this.currentElement = null; 
		this.listElement = listElement;  
		this.photographerId = listElement.photographerId;
		this.photographer = artist.name; 
		this.manageEvent();
	}
	getElementById(id) {
		return this.listElement.find(element=> element.id == id);
	}
	show (id) {
		this.currentElement = this.getElementById(id);
		this.condition();
       
	}
	next (){
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == this.listElement.length -1) {
			this.currentElement = this.listElement[0];
		}
		else {
			this.currentElement = this.listElement [index + 1];
		}
		this.condition();
               
	}
	previous () {
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == 0) {
			this.currentElement = this.listElement[this.listElement.length -1];
		}
		else {
			this.currentElement = this.listElement [index - 1];
		}
        
		this.condition();
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
			if (e.key=== "Enter") {
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
		document.querySelector(".lightbox.container.element").src = `assets/Sample_Photos/${this.photographer.split(" ")[0]}/${this.currentElement.image}`;
		document.querySelector(".lightbox.container.element").alt =`${this.currentElement.title}`;
		document.querySelector(".lightbox.container.video").style.display = "none";
		document.querySelector(".lightbox.container.element").style.display = "block";
		document.querySelector(".lightbox.container.element").classList.add("show");
        
	}
	displayVideos(){
		document.querySelector(".lightbox").classList.add("show");
		document.querySelector(".lightbox.container").classList.add("show");
		document.querySelector(".lightbox.container.video").src =`assets/Sample_Photos/${this.photographer.split(" ")[0]}/${this.currentElement.video}`;
		document.querySelector(".lightbox.container.video").alt =`${this.currentElement.title}`;
		document.querySelector(".lightbox.container.video").controls = false;
		document.querySelector(".lightbox.container.element").style.display = "none";
		document.querySelector(".lightbox.container.video").style.display = "block";
		document.querySelector(".lightbox.container.video").classList.add("show");
		this.handleControls();		
	}

	condition () {
		let key = Object.keys(this.currentElement); 
		key[3] == "video" ? this.displayVideos() : this.displayImages();
		
	}
	handleControls () {
		let video = document.getElementById("lightbox_vid");
		video.addEventListener("mouseover", (e)=>{
			e.preventDefault();
			video.setAttribute("controls", "controls");
		});
		video.addEventListener("mouseout", (e)=>{
			e.preventDefault();
			video.removeAttribute("controls");
		});
	}
    
                  
}