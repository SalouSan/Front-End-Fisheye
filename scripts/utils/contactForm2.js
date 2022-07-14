

function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}
displayModal();

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}
closeModal();




let formInput = document.querySelectorAll("form input");

function checkForm () {
	let valid = true;
	for (let input of formInput){
		valid &=input.reportValidity();
		if (!valid) {
			break;
		}
	}
	if(valid){
		console.log("ok");
	}
	
}



export default {displayModal, closeModal, checkForm};