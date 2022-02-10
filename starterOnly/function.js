/**
 * SWITCH CLASS RESPONSIVE
 * Lors du clic sur l'icône menu "fa-bars" :
 * lancement de la fonction editNav qui switch entre la classe "topnav" et "topnav.responsive"
 */
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * MESSAGE D'ERREUR APPELÉ PAR LES FONCTIONS DE VALIDATION DES CHAMPS (INPUTS)
 */
function errorMessage(tag, message, valid) {
  const constClass = document.querySelector("." + tag); // Ajout du "." avant le nom de classe
  const constSpan = document.querySelector("." + tag + "> span"); // Balise span de la classe donnée
  if (!valid) {
    // Si non valide : Ajout de la classe "error" permettant la mise en forme CSS en rouge
    constClass.classList.add("error");
    // Ecriture du message d'erreur dans la balise span du document HTML
    constSpan.textContent = message;
  } else {
    // Si valide : Suppression de la classe "error" et de la mise en forme CSS en rouge
    constClass.classList.remove("error");
    // Ecriture du message (vide) dans la balise span du document HTML
    constSpan.textContent = message;
  }
}

/**
 * FONCTIONS DE TEST ET VALIDATION DES CHAMPS (INPUTS)
 */

/**
 * CONTRÔLE DU PRENOM
 * Issues(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
 */
function firstNameChecker(value) {
  if (!value) {
    //Si la valeur n'est pas bonne, attribuer "null" à firstNameValue
    errorMessage("firstName", "Le champ Prénom doit être rempli");
    firstNameValue = null;
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    errorMessage(
      "firstName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Prénom."
    );
    firstNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    // regex exluant les caractères spéciaux et les chiffres
    errorMessage(
      "firstName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    firstNameValue = null;
    // Sinon attribuer "true" pour que errorMessage enlève la classe "error" et le message
  } else {
    errorMessage("firstName", "", true);
    firstNameValue = value.trim();
  }
}

/**
 * CONTRÔLE DU NOM
 * Issues(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
 */
function lastNameChecker(value) {
  if (!value) {
    errorMessage("lastName", "Le champ Nom doit être rempli");
    lastNameValue = null;
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    errorMessage(
      "lastName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Nom."
    );
    lastNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    errorMessage(
      "lastName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    lastNameValue = null;
  } else {
    errorMessage("lastName", "", true);
    lastNameValue = value.trim();
  }
}

/**
 * CONTRÔLE DE L'EMAIL
 * Issues(3) L'adresse électronique est valide.
 */
function mailChecker(value) {
  if (!value) {
    emailValue = null;
    errorMessage("address", "Le champ Email doit être rempli");
  } else if (!value.match(/^[\w\._-]+@[\w-]+\.[a-z]{2,4}$/g)) {
    errorMessage(
      "address",
      "L'adresse du courriel n'est pas valide (ne pas mettre d'espace ni de caractères accentués)."
    );
    emailValue = null;
  } else {
    errorMessage("address", "", true);
    emailValue = value.trim();
  }
}

/**
 * CONTRÔLE DE LA DATE DE NAISSANCE
 */
function birthChecker(value) {
  if (!value) {
    birthDateValue = null;
    errorMessage("birth", "Le champ date de naissance doit être rempli");
  } else if (!value.match(/[0-9]/)) {
    errorMessage("birth", "Vous devez entrer votre date de naissance.");
    birthDateValue = null;
  } else {
    errorMessage("birth", "", true);
    birthDateValue = value;
  }
}

/**
 * CONTRÔLE DE LA QUANTITÉ
 * Issues(4) Pour le nombre de concours, une valeur numérique est saisie.
 */
function quantityChecker(value) {
  if (!value) {
    errorMessage("number", "Le champ nombre de trournoi doit être rempli");
    quantityValue = null;
  } else if (!value.match(/^[0-9][0-9]?$/)) {
    errorMessage("number", "Le chiffre doit être compris entre 0 et 99.");
    quantityValue = null;
  } else {
    errorMessage("number", "", true);
    quantityValue = value;
  }
}

/**
 * CONTRÔLE DES BOUTONS RADIO
 * Issues(5) Un bouton radio est sélectionné.
 */
function radioChecker(value) {
  const constRadioClass = document.querySelector(".radioBtn");
  const constRadioSpan = document.querySelector(".radioBtn > span");
  if (!value) {
    // Si non valide : Ajout de la classe "error" permettant la mise en forme CSS en rouge du message
    constRadioClass.classList.add("error");
    // Ecriture du message d'erreur dans la balise span du document HTML
    constRadioSpan.textContent = "Vous devez choisir une ville.";
    radioButtonValue = null;
  } else {
    // Si valide : Suppression de la classe "error" et de la mise en forme CSS en rouge du message
    constRadioClass.classList.remove("error");
    // Ecriture du message (vide) dans la balise span du document HTML
    constRadioSpan.textContent = "";
    radioButtonValue = value;
  }
}

/**
 * CONTRÔLE DE LA COCHE DES CONDITIONS D'UTILISATION
 * Issues(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
 */
function useChecker(value) {
  if (!value) {
    errorMessage(
      "checkboxOne",
      "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    );
    useCheckValue = null;
  } else if (!document.getElementById("checkbox1").checked) {
    errorMessage(
      "checkboxOne",
      "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    );
    useCheckValue = null;
  } else {
    errorMessage("checkboxOne", "", true);
    useCheckValue = value;
  }
}
