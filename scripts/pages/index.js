let api_url = '/data/photographers.json'
async function getPhotographers() {
    try {
    let response = await fetch (api_url)
    let data = await response.json();
    console.log(data);
    }
    catch (error) {
        console.log(error)
    }
     const photographers = [
        {
			name: "Mimi Keel",
			city: "London",
			country: "UK",
			tagline: "Voir le beau dans le quotidien",
			price: 400,
			portrait: "MimiKeel.jpg"
		},
        {
			name: "Ellie-Rose Wilkens",
			city: "Paris",
			country: "France",
			tagline: "Capturer des compositions complexes",
			price: 250,
			portrait: "EllieRoseWilkens.jpg"
		},
        {
			name: "Tracy Galindo",
			city: "Montreal",
			country: "Canada",
			tagline: "Photographe freelance",
			price: 500,
			portrait: "TracyGalindo.jpg"
		},
        {
			name: "Nabeel Bradford",
			city: "Mexico City",
			country: "Mexico",
			tagline: "Toujours aller de l'avant",
			price: 350,
			portrait: "NabeelBradford.jpg"
		},
        {
			name: "Rhode Dubois",
			city: "Barcelona",
			country: "Spain",
			tagline: "Je crée des souvenirs",
			price: 275,
			portrait: "RhodeDubois.jpg"
		},
        {
			name: "Marcel Nikolic",
			city: "Berlin",
			country: "Germany",
			tagline: "Toujours à la recherche de LA photo",
			price: 300,
			portrait: "MarcelNikolic.jpg"
		},
     ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers]})
}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographers) => {
            const photographerModel = photographerFactory(photographers);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();


    