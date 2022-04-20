
function photographerFactory(data) {
    const id = data.photographers.map((key) => key.id);
    console.log(id);
    function getID () {
        let a = document.createElement('a');
        a.setAttribute("href", "photographer.html");
        a.setAttribute("id","photographer_link");
        a.textContent = "lien";
        a.href+=`?id=${id}`;
        console.log(id);
    }
    
    return {id, getID }
}
photographerFactory();
