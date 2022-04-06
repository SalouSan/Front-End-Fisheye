//Mettre le code JavaScript lié à la page photographer.html
async function getArtist (){
    let responses = await fetch ('/data/photographers.json');
    let dataa = await responses.json();
    let dataPhotographers = dataa.photographers;
    console.log(dataPhotographers);



    const pics = `assets/Sample Photos/Mimi/Portrait_Nora.jpg`
    const naming = dataa.photographers.map((artist) => `${artist.name}`);
    const citi = dataa.photographers.map((artist) => `${artist.city}`);
    const country = dataa.photographers.map((artist) => `${artist.country}`);
    const tagline = dataa.photographers.map((artist) => `${artist.tagline}`);
    console.log(naming[1]);

    function headerPhotographers () {
        const header = document.querySelector(".photograph-header");
        const p = document.createElement("p");
        p.setAttribute("class", "prénom");
        p.innerHTML = `${naming[0]}`;
        const p1 = document.createElement("p");
        p1.setAttribute("class", "city");
        p1.innerHTML = `${citi[0]}`+ `, ${country[0]}`;
        const p2 = document.createElement("p");
        p2.setAttribute("class", "tagline");
        p2.innerHTML =`${tagline[0]}`;
        const img = document.createElement("img");
        img.setAttribute("src",pics);
        header.appendChild(p);
        header.appendChild(p1);
        header.appendChild(p2);
        header.appendChild(img);
        return (header);

    }
    headerPhotographers();

    function photographerContent () {
        const { image, likes, title } = dataa.media;
        console.log(title);
        const content = document.querySelector(".photographers-content");
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = [
            {
                title: "Wedding Gazebo",
                image: "Event_WeddingGazebo.jpg",
                likes: 69,
            },
            {
                title: "Fashion Pattern on a Pattern",
			    image: "Fashion_Pattern_on_Pattern.jpg",
			    likes: 72, 
            },
            {
                title: "Fashion Yellow Beach",
			    image: "Fashion_Yellow_Beach.jpg",
			    likes: 62,
            },
            {
                title: "Fashion Urban Jungle",
			    image: "Fashion_Urban_Jungle.jpg",
			    likes: 11,
            },
            {
                title: "Sparkles",
			    image: "Event_Sparklers.jpg",
			    likes: 2,
            },
        ];
        content.appendChild(article);
        article.appendChild(p);
        return (article)

    }
    photographerContent();
}
getArtist ();