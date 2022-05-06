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
    if (firstNameValue.length === 2) {
        console.log("Vous devez entrer 2 caracteres ou plus");
    }
}
function nameValidate () {
    let lastNameValue = lastName.value.trim();
    if (lastNameValue.length === 2) {
        console.log("Vous devez entrer 2 caracteres ou plus");
    }
}
function emailValidate () {
    let emailValue = email.value.trim();
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (emailValue.match(regx)) {
        console.log("Votre adresse mail est correcte");
    }
    else {
        console.log("Veuillez bien saisir votre adresse mail");
    }
}

// form add event listener 
formData.addEventListener("input", function (e){
    e.preventDefault();
    firstValidate();
    nameValidate();
    emailValidate();

});

