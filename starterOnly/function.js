// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// Contrôle du PRENOM

function firstNameChecker(value) {
  if (!value) {
    constErrorMessage("firstName", "Le champ Prénom doit être rempli");
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    constErrorMessage(
      "firstName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Prénom."
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
}

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// Contrôle du NOM
function lastNameChecker(value) {
  if (!value) {
    constErrorMessage("lastName", "Le champ Nom doit être rempli");
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    constErrorMessage(
      "lastName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Nom."
    );
    lastNameValue = null;
  } else if (!value.match((/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/))) {
    constErrorMessage(
      "lastName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    lastNameValue = null;
  } else {
    constErrorMessage("lastName", "", true);
    lastNameValue = value.trim();
  }
  console.log("Last", lastNameValue);
}

//(3) L'adresse électronique est valide.
// Contrôle de l'Email
function mailChecker(value) {
  if (!value) {
    constErrorMessage("address", "Le champ Email doit être rempli");
  } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)) {
    console.log("non valide");
    constErrorMessage(
      "address",
      "L'adresse du courriel n'est pas valide (ne pas mettre d'espace)."
    );
    emailValue = null;
  } else {
    constErrorMessage("address", "", true);
    emailValue = value.trim();
  }
  console.log("Email", emailValue);
}

// Contrôle de la date de naissance
function birthChecker(value) {
  // const constBirth = document.querySelector('.birth');
  if (!value) {
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
}

// Contrôle de la quantité
function quantityChecker(value) {
  if (!value) {
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
}

// Détection de l'input radio de classe "checkbox-input" (choix de la ville)
function radioChecker(value) {
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
}

// Contrôle coche Conditions d'utilisation
function useChecker(value) {
  if (!value) {
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
}

function ErrorValidation(message) {
  const constClassValidation = document.querySelector(".spanValidation");
  const constSpanValidation = document.querySelector(".spanValidation > span");
  constClassValidation.classList.add("error");
  constSpanValidation.textContent = message;
}


// Message d'erreur à la Validation
// function ErrorValidation(message, valid) {
//   const constClassValidation = document.querySelector(".spanValidation");
//   const constSpanValidation = document.querySelector(".spanValidation > span");
  
//   console.log("True ou false ?", valid);
//   if (!valid) {
//     constClassValidation.classList.add("error");
//     constSpanValidation.textContent = message;
//     console.log("TEST Veuillez remplir le(s) champ(s) correctement.");
//   } else {
//     constClassValidation.classList.remove("error");
//     constSpanValidation.textContent = message;
//     console.log("OK");
//   }  
// }

