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


// Validate functions 

function firstValidate () {
    let firstNameValue = firstName.value.trim();
    if (firstNameValue.length < 2) {
        return false
    }
    else {
        return true
    }
}
function nameValidate () {
    let lastNameValue = lastName.value.trim();
    if (lastNameValue.length < 2) {
        return false
    }
    else {
        return true
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
    if (messageValue.length <2) {
        return false
    }
    else {
        return true
    }
}
// function message d'erreurs et de succès 

function setError (input,message) {
    let formData = input.parentElement;
    let errorElement = document.querySelector("small");
    errorElement.innerText= message;
    errorElement.style.color= "red";
    formData.classList.add("error");
    formData.classList.remove("success");
    
}
function setSucess (input) {
    let formData = input.parentElement;
    let errorElement = document.querySelector("small");
    errorElement.style.visibility= "hidden";
    formData.classList.add("success");
    formData.classList.remove("error");

}

// form add event listener 
formData.addEventListener("input", function (e){
    e.preventDefault();
    firstValidate();
    nameValidate();
    emailValidate();
    messageValidate();

});

// function qui valide tous les inputs en meme temps 
function globalValidate () {
    if (firstValidate ()){
        setSucess(firstName);
    }
    else {
        setError(firstName, "Vous devez entrer au moins deux caractères pour le prénom");
    }
    if (nameValidate()){
        setSucess(lastName);
    }
    else {
        setError(lastName, "Vous devez entrer au moins deux caractères pour le nom");
    }
    if (emailValidate()){
        setSucess(email);
    }
    else {
        setError(email, "Merci d'entrer un email valide");
    }
    if (messageValidate()){
        setSucess(message);
    }
    else {
        setError(message, "Merci de bien entrer au moins caractères");
    }
    if (firstValidate() && nameValidate () && emailValidate () && messageValidate){

    }
}


// add event listener submit 

formData.addEventListener("submit", function (e){
    e.preventDefault();
    globalValidate();
})
// message succès

function successMessage () {
    
}
