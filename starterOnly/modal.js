/**
 * ATTRIBUTION DES CONSTANTES AUX DOM ELEMENTS
 */

// Contenant du Formulaire
const modalBg = document.querySelector(".bground");
// Bouton "Je m'inscris"
const modalBtn = document.querySelectorAll(".modal-btn");
// Croix de la fermeture de la Modale
const closeModalBtn = document.querySelector(".close");
// Contenant de le Fenêtre de remerciements
const modalBgThanks = document.querySelector(".bground-thanks");
// Croix de la fermeture de la Fenêtre de remerciements
const closeModalCrossThanks = document.querySelector(".closeThanks");
// Bouton "Fermer" de la Fenêtre de remerciements
const closeModalBtnThanks = document.querySelector(".btn-closeThanks");
// Formulaire
const constForm = document.querySelector("#form");
// Champs du formulaire
const inputsType = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"], input[type="radio"], input[type="checkbox"]'
);

/**
 * ECOUTE DES ÉVÉNEMENTS
 * ET OUVERTURE OU FERMETURE DE LA FENÊTRE DE LA MODALE
 */

// Ecoute du click sur les 2 boutons "Je M'incris" et lancement de la Modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ouverture de la Modale
function launchModal() {
  modalBg.style.display = "block";
}

// Ecoute du click sur la croix de la Modale
closeModalBtn.addEventListener("click", closeModal);

// Fermeture de la Modale
function closeModal() {
  modalBg.style.display = "none";
  document.getElementById("form").reset(); // Effacement des champs à la fermeture de la Modale
}

// Ouverture de le Fenêtre de remerciements
function launchModalThanks() {
  modalBgThanks.style.display = "block";
}

/**
 * DÉTECTION DE LA VALEUR POUR CHAQUE INPUT (champ du formulaire)
 * ET ENVOI VERS LA FONCTION TEST ASSOCIÉE A L'INPUT
 */

inputsType.forEach((inputVar) => {
  inputVar.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        e.target.value = e.target.value.replace(/[\s]+/g, " "); // remplace les espaces successifs au milieu de la chaîne par un seul espace
        e.target.value = e.target.value.replace(/[\-]+/g, "-"); // remplace de multiples tirets successifs par un seul tiret
        e.target.value = e.target.value.replace(/[\']+/g, "'"); // remplace de multiples apostrophes successifs par un seul apostrophe
        e.target.value = e.target.value.replace(/[_^]/, "");
        firstNameChecker(e.target.value);
        break;
      case "last":
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        e.target.value = e.target.value.replace(/[\s]+/g, " "); // remplace les espaces successifs au milieu de la chaîne par un seul espace
        e.target.value = e.target.value.replace(/[\-]+/g, "-"); // remplace de multiples tirets successifs par un seul tiret
        e.target.value = e.target.value.replace(/[\']+/g, "'"); // remplace de multiples apostrophes successifs par un seul apostrophe
        lastNameChecker(e.target.value);
        break;
      case "email":
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        mailChecker(e.target.value);
        break;
      case "birthdate":
        birthChecker(e.target.value);
        break;
      case "quantity":
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
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
    }
  });
});

/**
 * DÉCLARATION DES VARIABLES DE VALIDATION
 */

let firstNameValue,
  lastNameValue,
  emailValue,
  birthDateValue,
  quantityValue,
  radioButtonValue,
  useCheckValue;

/**
 * VALIDATION DU FORMULAIRE
 */

// Écoute du "click" sur le bouton "C'est parti" (submit : envoi du Formulaire)
constForm.addEventListener("submit", (e) => {
  e.preventDefault(); // empêche l'envoi du formulaire

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

  // Envoi des valeurs de chaque champ (input) vers la fonction de test et validation
  firstNameChecker(firstNameValue);
  lastNameChecker(lastNameValue);
  mailChecker(emailValue);
  birthChecker(birthDateValue);
  quantityChecker(quantityValue);
  radioChecker(radioButtonValue);
  useChecker(useCheckValue);
  // SI tous les champs sont corrects
  if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    birthDateValue &&
    quantityValue &&
    radioButtonValue &&
    useCheckValue
  ) {
    // ALORS Fermeture de la Modale
    closeModal();
    // Effacement des champs du formulaire    
    (firstNameValue = null),
      (lastNameValue = null),
      (emailValue = null),
      (birthDateValue = null),
      (quantityValue = null),
      (radioButtonValue = null),
      (useCheckValue = null);
    // Ouverture de la fenêtre de remerciements
    launchModalThanks();
    // Fermeture de la fenêtre de remerciements avec "clic" sur la Croix ou sur le Bouton "Fermer"
    closeModalCrossThanks.addEventListener("click", closeModalThanks);
    closeModalBtnThanks.addEventListener("click", closeModalThanks);
    function closeModalThanks() {
      modalBgThanks.style.display = "none";
    }
  }
});
