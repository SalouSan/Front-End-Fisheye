//Mettre le code JavaScript lié à la page photographer.html

function renderPhotos (data) {

    const pics = `assets/Sample Photos/Mimi/${image}`;

    const {title, image} = data.media; 
    const content = document.querySelector(".photographers-content");
    const photos = document.createElement ('img');
    const h2 = document.createElement ('h2');
    h2.textContent = title;
    photos.setAttribute("alt", "photos des photographers");
    photos = image;
    content.appendChild(photos);
    content.appendChild(h2);

    return (content);
}


function likes (photographers) {
    photographers.forEach(element => {
        element.addEventlistener("click", photos) 
    });
}