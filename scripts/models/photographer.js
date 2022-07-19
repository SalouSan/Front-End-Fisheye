export class Photographer {
	constructor(json){
		Object.assign(this,json); 
	}
	display(){
		return  `
        <div class = "photographer__profil">
            <a href= "photographer.html?id=${this.id} "class="photographer__profil--IDlink"> 
                <img class="photographer__profil--portrait" src= "assets/Sample_Photos/Photographers-ID_Photos/${this.portrait}" alt= " Photo de :${this.name}" 
                />         
                <h2 class="photographer__profil--name"> ${this.name} </h2>
                <span class="photographer__profil--location" aria-label= "${this.city}, ${this.country}"> ${this.city}, ${this.country} </span> </br>
                <span class="photographer__profil--tagline" aria-label="${this.tagline}"> ${this.tagline} </span> </br>
                <span class="photographer__profil--price" aria-label="${this.price} euros par jour"> ${this.price} €/jour </span> 
            </a>
        </div>
        ` ;
	}
	displayHeader(){
		return `
        <div class="profile__description">
            <h1 class="profile__descrpition--name"> ${this.name} </h1>
            <p class="profile__descrpition--location"> ${this.city}, ${this.country} </p>
            <p class="profile__descrpition--tagline"> ${this.tagline}</p>
        </div>
        `;
				
	}
	displayImage () {
		return `<img class="pic" src="assets/Sample_Photos/Photographers-ID_Photos/${this.portrait}" alt="${this.name}"/>`;
	}
}