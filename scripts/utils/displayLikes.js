export function handleLikes() {
	function likes(e){
		let counter = e.target.closest(".content__items").querySelector(".content__items--like");
		counter.innerHTML = parseInt(counter.innerHTML)+1;
		let counterTotal = document.querySelector(".counter_content .counter");
		counterTotal.innerHTML = parseInt(counterTotal.innerHTML)+1;	
	}
	let heart = document.querySelectorAll(".content__items--heart");
	for (let i of heart){
		i.addEventListener("click", (e) =>{
			likes(e);

		});
		i.addEventListener("keyup", (e) =>{
			if (e.key == "Enter") {
				likes(e);	
			}
		});
	}
}