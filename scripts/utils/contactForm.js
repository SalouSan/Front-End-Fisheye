function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// DOM elements 
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("mail");
let message = document.getElementById("message");
let formData = document.querySelector(".formData");
let form = document.querySelector("form");


// Validate functions 

function firstValidate () {
    let firstNameValue = firstName.value.trim();
    if (firstNameValue.length>2) {
        return true
    }
    else {
        return false
    }
}
function nameValidate () {
    let lastNameValue = lastName.value.trim();
    if (lastNameValue.length>2) {
        return true
    }
    else {
        return false
    }
}
function emailValidate () {
    let emailValue = email.value.trim();
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (emailValue.match(regx)) {
        return true
    }
    else {
        return false
    }
}
function messageValidate () {
    let messageValue = message.value.trim();
    if (messageValue.length>2) {
        return true
    }
    else {
        return false
    }
}
// function message d'erreurs et de succès 

function setError (input,message) {
    let formData = input.parentElement;
    let errorElement = document.querySelector("small");
    errorElement.innerText= message;
    errorElement.style.color="red";
    formData.classList.add("error");
    formData.classList.remove("success");
    
}
function setSuccess (input) {
    let formData = input.parentElement;
    let errorElement = document.querySelector("small");
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
    }
    else {
        setError(firstName, "Vous devez entrer au moins deux caractères pour le prénom");
    }
    if (nameValidate ()) {
        setSuccess(lastName);
    }
    else {
        setError(lastName, "Vous devez");
    }
    if (messageValidate()){
        setSuccess(message);
    }
    else{
        setError(message, "Vous devez ecrire quelque chose");
    }
    if (firstValidate() && nameValidate () && messageValidate ()){
        successMessage();
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
