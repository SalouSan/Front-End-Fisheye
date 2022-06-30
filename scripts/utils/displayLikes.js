export function handleLikes() {
	let heart = document.querySelectorAll(".content__items--heart");
	for (let i of heart){
		i.addEventListener("click", function (e){
			let counter = e.target.closest(".content__items").querySelector(".content__items--like");
			counter.innerHTML = parseInt(counter.innerHTML)+1;
			let counterTotal = document.querySelector(".counter_content .counter");
			counterTotal.innerHTML = parseInt(counterTotal.innerHTML)+1;

			

		});
	}
}