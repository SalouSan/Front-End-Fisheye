// eslint-disable-next-line no-unused-vars
function displayModal2() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}


function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}
closeModal();

// DOM elements inputs et bouton submit
let firstName = document.querySelector("#first");
let form = document.querySelector("form");

firstName.innerText = "Messi";

function firstValidate () {
	let firstNameValue = firstName.value.trim();
	if (firstNameValue.length < 2) {
		console.log("Non");
		return false;
		
	}
	else {
		console.log("Oui");
		return true;
        
	}
}
firstValidate();

form.addEventListener("submit",(e) => {
	e.preventDefault();
	firstValidate();
});
