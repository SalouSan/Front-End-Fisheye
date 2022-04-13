function photographerFactory(data) {
    const { id } = data;

    function getID () {
        let a = document.createElement('a');
        a.setAttribute("href", "photographer.html");
        a.setAttribute("id","photographer_link");
        a.textContent = "lien";
        article.appendChild(a);
        a.href+=`?id=${id}`;
    }
    getID();
    
    return { id }
}
