function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, } = data;

    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de profil des photographes");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const span0 = document.createElement ('span');
        span0.setAttribute("class", "location");
        span0.textContent = city + `, ${data.country}`;
        const span1 = document.createElement('span');
        span1.setAttribute("class", "tagline");
        span1.textContent = tagline;
        const span2 = document.createElement('span');
        span2.setAttribute("class", "price");
        span2.textContent = `${data.price}€` + "/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(span0);
        article.appendChild(span1);
        article.appendChild(span2);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}