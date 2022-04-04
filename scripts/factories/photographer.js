function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    console.log();

    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;
    const article = document.createElement( 'article' );

    function getUserCardDOM() {
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de profil des photographes");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const span0 = document.createElement ('span');
        span0.setAttribute("class", "location");
        span0.textContent = city + `, ${country}`;
        const span1 = document.createElement('span');
        span1.setAttribute("class", "tagline");
        span1.textContent = tagline;
        const span2 = document.createElement('span');
        span2.setAttribute("class", "price");
        span2.textContent = `${price}€` + "/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(span0);
        article.appendChild(span1);
        article.appendChild(span2);
        return (article);
    }

    function getID () {
        let a = document.createElement('a');
        a.setAttribute("href", "photographer.html");
        a.setAttribute("id","photographer_link");
        a.textContent = "lien";
        article.appendChild(a);
        a.href+=`?id=${id}`;
    }
    getID();
    
    return { name, picture, city, country, tagline, price, id, getUserCardDOM, }
}
