let api_url = '/data/photographers.json'
async function getPhotographers() {
    try {
    let response = await fetch (api_url)
    let data = await response.json();
    let PhotographersData = data.photographers;
    }
    catch (error) {
        console.log(error)
    }
    const photographers = PhotographersData.map(photographer => new Photographe (photographer))
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


    