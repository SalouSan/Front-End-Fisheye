

function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}
displayModal();

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}
closeModal();






function checkForm () {
	let formInput = document.querySelectorAll("form input");
	let valid = true;
	for (let input of formInput){
		valid &=input.reportValidity();
		if (!valid) {
			break;
		}
	}
	if(valid){
		for (let input of formInput){
			console.log(input.name + ": " + input.value);
		}
		closeModal();
	}
	
}



export default {displayModal, closeModal, checkForm};