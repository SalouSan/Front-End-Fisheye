console.log("displaySort");
import {Media} from "../factories/MediaFactory.js"
import {media, article } from "../pages/photographer.js"    
export function displaySort  () {
  

    titre.addEventListener("click", function Title(e){
        titre.classList.toggle("border");
        const listMedias = media.map((element)=> new Media (element));
        const photographer = listMedias
        .sort((a,b)=> a.title.localeCompare(b.title))
        .filter((artist)=> artist.photographerId === idPhotographer)
        .map((element)=>{
        return element.display();
        }).join('');
        article.innerHTML = photographer;   
        likes();
        
        
    });

    date.addEventListener("click", function Date (e){
        date.classList.toggle("border");
        const listMedias = media.map((element)=> new Media (element));
        const photographer = listMedias
        .filter((artist)=> artist.photographerId === idPhotographer)
        .sort((a,b)=> a.date - b.date)
        .map((element)=>{
        return element.display();
        }).join('');
        article.innerHTML = photographer;
        e.preventDefault(); 
        likes();               
       
    });
}

