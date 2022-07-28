export class Lightbox {
	constructor (listElement,artist) {
		this.currentElement = null; 
		this.listElement = listElement;  
		this.photographerId = listElement.photographerId;
		this.photographer = artist.name; 
		this.isOpen = false;
		this.manageEvent();
	}

	getElementById(id) {
		return this.listElement.find(element=> element.id == id);
	}
	show (id) {
		this.currentElement = this.listElement.find(element=> element.id == id);
		this.currentElement.displayLightbox(this.handleControls);
		this.isOpen = true;
		let lightbox = document.querySelector(".lightbox");
		this.trapFocus(lightbox);
       
	}
	
	trapFocus (element) {
		let focusableElements = "img, video";
		let focusableContent = element.querySelectorAll(focusableElements);
		let firstFocusableEl = element.querySelectorAll(focusableElements)[0];
		let lastFocusableEl = focusableContent[focusableContent.length -1];
	
		document.addEventListener("keydown", (e)=>{
			let isTabPressed = e.key === "Tab"; 
	
			if (!isTabPressed){
				return;
			}
	
			if (e.shiftKey){
				if(document.activeElement === firstFocusableEl) {
					lastFocusableEl.focus();
					e.preventDefault();
				}
			}else {
				if (document.activeElement === lastFocusableEl) {
					firstFocusableEl.focus();
					e.preventDefault();
				}
			}
			
		});
		firstFocusableEl.focus();
	
	}

	next (){
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == this.listElement.length -1) {
			this.currentElement = this.listElement[0];
		}
		else {
			this.currentElement = this.listElement [index + 1];
		}
		this.currentElement.displayLightbox(this.handleControls);
               
	}
	previous () {
		let index = this.listElement.findIndex(element => element.id === this.currentElement.id);
		if (index == 0) {
			this.currentElement = this.listElement[this.listElement.length -1];
		}
		else {
			this.currentElement = this.listElement [index - 1];
		}
        
		this.currentElement.displayLightbox(this.handleControls);
	}
	manageEvent () {
		document.querySelector(".chevronR").addEventListener("click", () => {
			this.next();
		});
		document.addEventListener("keydown", (e)=>{
			if(e.key === "ArrowRight" && this.isOpen){
				this.next();
			}
		});
				
		document.querySelector(".chevronL").addEventListener("click", () => {
			this.previous();
            
		});
		document.addEventListener("keydown", (e)=>{
			if(e.key === "ArrowLeft" && this.isOpen){
				this.previous();
			}
		});
		
		document.querySelector(".lightbox__close").addEventListener("click", () => {
			this.close();
		});
		document.addEventListener("keydown", (e)=>{
			if(e.key === "Escape" && this.isOpen){
				this.close();
			}
		});
	}
	close (){
		document.querySelector(".lightbox").classList.remove("show");
		this.isOpen = false;
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
		video.addEventListener("focus", (e)=>{
			e.preventDefault();
			video.setAttribute("controls", "controls");
		});
	}
    
                  
}