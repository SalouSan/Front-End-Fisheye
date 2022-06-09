class Lightbox2 {
    static activate() {
        document.body.insertAdjacentElement("beforeend", `
            <div class=lightbox" id="lightbox">
                <div class="lightbox__inner">
                    <button type="button" class="lightbox__close">
                    &times;
                    </button>
                    <div class="lightbox__content">
                    </div>

            </div>
        `);

        const Lightbox3 = document.querySelector("#lightbox");
        const btnClose = document.querySelector(".lightbox__close");
        const content = document.querySelector("#lightbox__content");

        const closeLightBox = () =>{
            Lightbox3.style.display = "none";
            content.innerHTML = "";
        }
        btnClose.addEventListener("click", ()=>{
            closeLightBox();
        })
    }
    static show (htmlOrElement) {
        const content = document.querySelector("#lightbox .lightbox__content");
    }
}