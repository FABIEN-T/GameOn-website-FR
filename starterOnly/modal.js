function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//*********************************************************************
//********* lancement de la Modal avec le bouton je m'inscris *********
//*********************************************************************

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgThanks = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const closeModalCrossThanks = document.querySelector(".closeThanks");
const closeModalBtnThanks = document.querySelector(".btn-closeThanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
* Mon Travail
*/

//************************************************************
//********* Ouverture de le Fenêtre de remerciements *********
//************************************************************

function launchModalThanks() {
  modalbgThanks.style.display = "block";
}

//******************************************************
//********* Fermeture de la Modal par la croix *********
//******************************************************

// close modal event
closeModalBtn.addEventListener("click", () => {
  console.log("event closemodal");
});
closeModalBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
function closeModalThanks() {
  modalbgThanks.style.display = "none";
}


//**************************************************
// Les données doivent être saisies correctement
//**************************************************

const constForm = document.querySelector("form");
const inputsType = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"], input[type="radio"], input[type="checkbox"]'
);

// variables de validation du submit
let firstNameValue,
  lastNameValue,
  emailValue,
  birthDateValue,
  quantityValue,
  radioButtonValue,
  useCheckValue;

// MESSAGE D'ERREUR
const constErrorMessage = (tag, message, valid) => {
  const constClass = document.querySelector("." + tag);
  const constSpan = document.querySelector("." + tag + "> span");
  if (!valid) {
    constClass.classList.add("error");
    constSpan.textContent = message;
  } else {
    constClass.classList.remove("error");
    constSpan.textContent = message;
  }
};

// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// Contrôle du PRENOM
const firstNameChecker = (value) => {
  if (value === undefined || value === null) {
    constErrorMessage("firstName", "Le champ Prénom doit être rempli");
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    constErrorMessage(
      "firstName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ du prénom."
    );
    firstNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/)) {
    constErrorMessage(
      "firstName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    firstNameValue = null;
  } else {
    constErrorMessage("firstName", "", true);
    firstNameValue = value.trim();
  }
  console.log("First", firstNameValue);
};

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// Contrôle du NOM
const lastNameChecker = (value) => {
  if (value === undefined || value === null) {
    constErrorMessage("lastName", "Le champ Nom doit être rempli");
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    constErrorMessage(
      "lastName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ du nom."
    );
    lastNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/)) {
    constErrorMessage (
      "lastName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    lastNameValue = null;
  } else {
    constErrorMessage("lastName", "", true);
    lastNameValue = value.trim();
  }
  console.log("Last", lastNameValue);
};

//(3) L'adresse électronique est valide.
// Contrôle de l'Email
const mailChecker = (value) => {
  if (value === undefined || value === null) {
    constErrorMessage("address", "Le champ Email doit être rempli");
  } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)) {
    console.log("non valide");
    constErrorMessage(
      "address",
      "L'adresse du courriel n'est pas valide (ne pas mettre pas d'espace)."
    );
    emailValue = null;
  } else {
    constErrorMessage("address", "", true);
    emailValue = value.trim();
  }
  console.log("Email", emailValue);
};

// Contrôle de la date de naissance
const birthChecker = (value) => {
  // const constBirth = document.querySelector('.birth');
  if (value === undefined || value === null) {
    constErrorMessage("birth", "Le champ date de naissance doit être rempli");
  } else if (!value.match(/[0-9]/)) {
    console.log("la date est vide", value);
    constErrorMessage("birth", "Vous devez entrer votre date de naissance.");
    birthDateValue = null;
  } else {
    console.log("date", value);
    constErrorMessage("birth", "", true);
    birthDateValue = value;
  }
};

// Contrôle de la quantité
const quantityChecker = (value) => {
  if (value === undefined || value === null) {
    constErrorMessage("number", "Le champ nombre de trournoi doit être rempli");
  } else if (!value.match(/^[0-9][0-9]?$/)) {
    console.log("bad quantity", value);
    constErrorMessage("number", "Le chiffre doit être compris entre 1 et 99.");
    quantityValue = null;
  } else {
    console.log("good quantity", value);
    constErrorMessage("number", "", true);
    quantityValue = value;
  }
};

// Détection de l'input radio de classe "checkbox-input" (choix de la ville)
const radioChecker = (value) => {
  const constRadioClass = document.querySelector(".radioBtn");
  const constRadioSpan = document.querySelector(".radioBtn > span");
  console.log("VALUE", value);

  if (value === undefined || value === null) {
    constRadioClass.classList.add("error");
    constRadioSpan.textContent = "Vous devez choisir une ville.";
    radioButtonValue = null;
    console.log("radiochecker NO", value);
  } else {
    constRadioClass.classList.remove("error");
    constRadioSpan.textContent = "";
    radioButtonValue = value;
    console.log("radiochecker OK", value);
  }
};

// Contrôle coche Conditions d'utilisation
const useChecker = (value) => {
  if (value === undefined || value === null) {
    constErrorMessage(
      "checkboxOne",
      "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    );
  } else if (!document.getElementById("checkbox1").checked) {
    console.log("décoché");
    constErrorMessage(
      "checkboxOne",
      "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    );
    useCheckValue = null;
  } else {
    console.log("coché");
    constErrorMessage("checkboxOne", "", true);
    useCheckValue = value;
    console.log("useCheckValue", useCheckValue);
  }
};

// Détection des input Prénom/Nom/Email/Date de naisssance/Nombre de tournois et renvoi vers la fonction adéquate
inputsType.forEach((inputVar) => {
  inputVar.addEventListener("input", (e) => {
    // console.log("input", e.target.value);

    switch (e.target.id) {
      case "first":
        firstNameChecker(e.target.value);
        break;
      case "last":
        lastNameChecker(e.target.value);
        break;
      case "email":
        mailChecker(e.target.value);
        break;
      case "birthdate":
        birthChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "location1":
        radioChecker(e.target.value);
        break;
      case "location2":
        radioChecker(e.target.value);
        break;
      case "location3":
        radioChecker(e.target.value);
        break;
      case "location4":
        radioChecker(e.target.value);
        break;
      case "location5":
        radioChecker(e.target.value);
        break;
      case "location6":
        radioChecker(e.target.value);
        break;
      case "checkbox1":
        useChecker(e.target.value);
        break;
      default:
        console.log("pas de réaction");
    }
  });
});


//***************************************************************************************
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit" ("C'est parti")
//***************************************************************************************

// Message d'erreur à la Validation
const constErrorValidation = (message) => {
  const constClassValidation = document.querySelector(".spanValidation");
  const constSpanValidation = document.querySelector(".spanValidation > span");
  constClassValidation.classList.add("error");
  constSpanValidation.textContent = message;
};

// Vérification de tous les champs et Validation du formulaire le cas échéant
constForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('SUBMIT!!!')
  const constClassValidation = document.querySelector(".spanValidation");
  const constSpanValidation = document.querySelector(".spanValidation > span");
  const constEmptyField =
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    birthDateValue &&
    quantityValue &&
    radioButtonValue &&
    useCheckValue;

  console.log(
    "SUBMIT",
    firstNameValue,
    lastNameValue,
    emailValue,
    birthDateValue,
    quantityValue,
    radioButtonValue,
    useCheckValue
  );

  if (firstNameValue === undefined || firstNameValue === null) {
    console.log("Validation", firstNameValue);
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    firstNameChecker(firstNameValue);
  }
  if (lastNameValue === undefined || lastNameValue === null) {
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    lastNameChecker(lastNameValue);
  }
  if (emailValue === undefined || emailValue === null) {
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    mailChecker(emailValue);
  }
  if (birthDateValue === undefined || birthDateValue === null) {
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    birthChecker(birthDateValue);
  }
  if (quantityValue === undefined || quantityValue === null) {
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    quantityChecker(quantityValue);
  }
  if (radioButtonValue === undefined || radioButtonValue === null) {
    constErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    radioChecker(radioButtonValue);
  }
  if (useCheckValue === undefined || useCheckValue === null) {
    useChecker(useCheckValue);
  } else if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    birthDateValue &&
    quantityValue &&
    radioButtonValue &&
    useCheckValue
  ) {
    console.log("tous les champs OK");

    console.log(
      "nouvel état",
      firstNameValue,
      lastNameValue,
      emailValue,
      birthDateValue,
      quantityValue,
      radioButtonValue,
      useCheckValue
    );
    firstNameValue = null;
    lastNameValue = null;
    emailValue = null;
    birthDateValue = null;
    quantityValue = null;
    radioButtonValue = null;
    useCheckValue = null;
    document.getElementById("form").reset();
    constClassValidation.classList.add("error");
    constSpanValidation.textContent = "";
    closeModal();
    launchModalThanks();
    closeModalCrossThanks.addEventListener("click", closeModalThanks);
    closeModalBtnThanks.addEventListener("click", closeModalThanks);
  }
});

