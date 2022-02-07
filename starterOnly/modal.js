/**
* Mis en place de l'icône fa-bars en mobile
*/
// const barsButton = document.querySelector("#bars");
// const barsButton = document.getElementById("bars");
// barsButton.addEventListener("click", editNav); 

function editNav() {
  // console.log("bars click2", barsButton.addEventListener("click", editNav));
  // console.log(barsButton);
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
* Lancement de la Modal avec le bouton Je M'inscris
*/

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBgThanks = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const closeModalCrossThanks = document.querySelector(".closeThanks");
const closeModalBtnThanks = document.querySelector(".btn-closeThanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

/**
 * Ouverture de le Fenêtre de remerciements
 */
function launchModalThanks() {
  modalBgThanks.style.display = "block";
}


/**
 * Fermeture de la Modal par la croix
 */

// close modal event
// closeModalBtn.addEventListener("click", () => {
//   console.log("event closemodal");
// });
closeModalBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalBg.style.display = "none";
  document.getElementById("form").reset();
  // const  test = document.getElementsByClassName(".formData"+"> span"); 
  // test.classList.remove("error");
}

/**
* Les données doivent être saisies correctement
*/

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
constErrorMessage = (tag, message, valid) => {
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



// Détection des input Prénom/Nom/Email/Date de naisssance/Nombre de tournois et renvoi vers la fonction adéquate
inputsType.forEach((inputVar) => {
  inputVar.addEventListener("input", (e) => {
    // console.log("input", e.target.value);

    switch (e.target.id) {
      case "first":
        e.target.value = e.target.value.replace(/[\-]+/g, "-");
        e.target.value = e.target.value.replace(/^[\s]/, ""); 
        e.target.value = e.target.value.replace(/[\s]+/g, " ");
        firstNameChecker(e.target.value);
        break;
      case "last":
        e.target.value = e.target.value.replace(/[\-]+/g, "-");
        e.target.value = e.target.value.replace(/^[\s]/, ""); 
        e.target.value = e.target.value.replace(/[\s]+/g, " ");
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

/**
 * Le formulaire doit être valide quand l'utilisateur clique sur "Submit" ("C'est parti")
 */

// Vérification de tous les champs et Validation du formulaire le cas échéant
constForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('SUBMIT!!!')
  // const constClassValidation = document.querySelector(".spanValidation");
  // const constSpanValidation = document.querySelector(".spanValidation > span");
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

  // if (!constEmptyField) {
  //   console.log("Champs vides", constEmptyField);
  //   ErrorValidation("POURRI Veuillez remplir le(s) champ(s) correctement.", false, useCheckValue,);
  // } else {
  //   ErrorValidation("", true);
  //   console.log("tous les champs OK");
  // }

  if (!firstNameValue) {
    console.log("Validation", firstNameValue);
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    firstNameChecker(firstNameValue);
  }
  if (!lastNameValue) {
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    lastNameChecker(lastNameValue);
  }
  if (!emailValue) {
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    mailChecker(emailValue);
  }
  if (!birthDateValue) {
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    birthChecker(birthDateValue);
  }
  if (!quantityValue) {
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    quantityChecker(quantityValue);
  }
  if (!radioButtonValue) {
    // ErrorValidation("Veuillez remplir le(s) champ(s) correctement.");
    radioChecker(radioButtonValue);
  }
  if (!useCheckValue) {
    useChecker(useCheckValue);
  } if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    birthDateValue &&
    quantityValue &&
    radioButtonValue &&
    useCheckValue
  ) {
    // ErrorValidation("", true);
    // console.log("tous les champs OK");
    firstNameValue = null
    lastNameValue = null,
    emailValue = null,
    birthDateValue = null,
    quantityValue = null,
    radioButtonValue = null,
    useCheckValue = null;
    launchModalThanks();
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
    document.getElementById("form").reset();
    // constClassValidation.classList.add("error");
    // constSpanValidation.textContent = "";
    closeModal();
    closeModalCrossThanks.addEventListener("click", closeModalThanks);
    closeModalBtnThanks.addEventListener("click", closeModalThanks);
    function closeModalThanks() {
      modalBgThanks.style.display = "none";
    }
  }
});
