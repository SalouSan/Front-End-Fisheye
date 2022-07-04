// eslint-disable-next-line no-unused-vars
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


// DOM elements inputs et bouton submit
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("mail");
let message = document.getElementById("message");
let form = document.querySelector("form");
let btnSubmit = document.querySelector("#btn_submit");


// Validate functions 

function firstValidate () {
	let firstNameValue = firstName.value.trim();
	if (firstNameValue.length < 2) {

		return false;
		
	}
	else {
		return true;
	}
}
function nameValidate () {
	let lastNameValue = lastName.value.trim();
	if (lastNameValue.length < 2) {
		return false;
	}
	else {
		return true;
	}
}
function emailValidate () {
	let emailValue = email.value.trim();
	let regx = /^([a-zA-Z0-9\\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
	if (!emailValue.match(regx)) {
		return false;
	}
	else if (emailValue.length <2){
		return false;
	}
	else {
		return true;
	}
}
function messageValidate () {
	let messageValue = message.value.trim();
	if (messageValue.length < 2) {
		return false;
	}
	else {
		return true;
	}
}
// function message d'erreurs et de succès 

function setError (input,message) {
	let formData = input.parentElement;
	let errorElement = formData.querySelector("small");
	errorElement.innerText= message;
	errorElement.style.color="red";
	formData.classList.add("error");
	formData.classList.remove("success");
    
}
function setSuccess (input) {
	let formData = input.parentElement;
	let errorElement = formData.querySelector("small");
	errorElement.style.visibility= "hidden";
	formData.classList.add("success");
	formData.classList.remove("error");

}


// form add event listener 
form.addEventListener("input", function (e){
	e.preventDefault();
	globalValidate();   

});

// function qui valide tous les inputs en meme temps 
function globalValidate () {
	if (firstValidate()){
		setSuccess(firstName);
	} else {
		setError(firstName, "Vous devez entrer au moins deux caractères pour le prénom");
	}
	if (nameValidate()){
		setSuccess(lastName);
	} else {
		setError (lastName, "Vous devez entrer au moins deux caractères pour le nom");
	}
	if (emailValidate()){
		setSuccess(email);
	}
	else {
		setError(email, "Merci d'entrer un email valide");
	}
	if (messageValidate()){
		setSuccess(message);
	}
	else {
		setError(message, "Vous devez entrer au moins deux caractères");
	}
    
}

// add event listener submit 

form.addEventListener("submit", function (e){
	e.preventDefault();
	globalValidate();
});
// message confirmation

function successMessage () {
	let h2 = document.querySelector("h2");
	h2.style.display = "none";
	form.style.display = "none";
	let span = document.querySelector("span");
	span.innerText= "Votre demande a bien été prise en compte. Merci !";    
}

// Validation du formulaire 

btnSubmit.addEventListener("click", function (e){
	if (firstValidate() && nameValidate () && emailValidate () && messageValidate ()){
		successMessage();
		e.preventDefault();
	}
} );

// Récuperer les données des utilisateurs

function saveUserData() {
	localStorage.setItem("Prénom", document.querySelector("#first").value);
	localStorage.setItem("Nom", document.querySelector("#last").value);
	localStorage.setItem("Email", document.querySelector("#mail").value);
	localStorage.setItem("Message", document.querySelector("#message").value);

}
saveUserData();
