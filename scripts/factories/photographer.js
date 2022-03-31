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
        const span1 = document.createElement ('span');
        span1.setAttribute("class", "location");
        span1.textContent = city + `, ${data.country}`;
        const span2 = document.createElement('span');
        span2.setAttribute("class", "tagline");
        span2.textContent = tagline;
        const span3 = document.createElement('span');
        span3.setAttribute("class", "price");
        span3.textContent = `${data.price}€` + "/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(span1);
        article.appendChild(span2);
        article.appendChild(span3);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}