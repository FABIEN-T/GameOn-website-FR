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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//****************************************************************************************
//********************************** Mon Travail *****************************************
//****************************************************************************************


//******************************************************
//********* Fermeture de la Modal par la croix *********
//******************************************************


// const checkboxes = document.querySelectorAll(".checkbox-input");

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => {
//   console.log('ça clique')
// }))

// CONST closemodal
const closeModalBtn = document.querySelector(".close");

// close modal event
closeModalBtn.addEventListener('click', ()=> {console.log('event closemodal')})
closeModalBtn.addEventListener('click', closeModal)

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}





// const submitBtn = document.querySelector(".btn-submit");
// submitBtn.addEventListener('click', (event) => {
//   console.log('validé !')
//   // alert('Merci ! Votre réservation a été reçue.')
//   // event.preventDefault()
// });

//**************************************************
// Les données doivent être saisies correctement
//**************************************************

const constForm = document.querySelector("form");
const inputsType = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"], input[type="radio"], input[type="checkbox"]');

// variables de validation du submit
let firstNameValue, lastNameValue, emailValue, birthDateValue, quantityValue, radioButtonValue, useCheckValue;



// Message d'erreur
const constErrorMessage = (tag, message, valid) => {
  const constClass = document.querySelector("." + tag);
  const constSpan = document.querySelector("." + tag + "> span");
  console.log(document.querySelector("." + tag));
  console.log(document.querySelector("." + tag + "> span"));
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

  if ((value.length > 0) && (value.length <2 || value.length > 40)) {
    constErrorMessage ("firstName", "Veuillez entrer entre 2 et 40 caractères pour le champ du prénom.");
    firstNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/)) { 
    constErrorMessage ("firstName", "Il ne doit pas y avoir de caractères spéciaux ou de chiffres.");
    firstNameValue = null;
  } else {
    constErrorMessage ("firstName", "", true);
    firstNameValue = value;
  }
  console.log("First", firstNameValue)
};

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// Contrôle du NOM
const lastNameChecker = (value) => {
  
  if ((value.length > 0) && (value.length <2 || value.length > 40)) {
    constErrorMessage ("lastName", "Veuillez entrer entre 2 et 40 caractères pour le champ du nom.");
    lastNameValue = null;
  // } else if (!value.match(/^[^\s]+[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.\s-]+[^\s]*$/)) {
  // } else if (!value.match(/^[^\s]+[a-zA-Zá-œÁ-Œ\s-]+[^\s]$/)) {
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/)) {  
  // } else if (!value.match(/^[^\s]+[ a-zA-Z\s\-À-ÖØ-öø-ÿ]+[^\s]$/)) {
    constErrorMessage ("lastName", "Il ne doit pas y avoir de caractères spéciaux ou de chiffres.");
    lastNameValue = null;
  } else {
    constErrorMessage ("lastName", "", true);
    lastNameValue = value;
  }
  console.log("Last", lastNameValue);
};

//(3) L'adresse électronique est valide.
// Contrôle de l'Email
//+[^áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]
//(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))+@[\w-]+\.[a-z]{2,4}$/i)
// (/^[\w-\S]+@[\w-]+\.[a-z]{2,4}$/i)
const mailChecker = (value) => {
  
  // if (!value.match(/^[\w-\S]+@[\w-]+\.[a-z]{2,4}$/i)) {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)) {  
    console.log("non valide");
    constErrorMessage ("address", "L'adresse du courriel n'est pas valide.");
    emailValue = null;
  } else {
    constErrorMessage("address", "", true);
    emailValue = value;    
  }
  console.log("Email", emailValue);
};

// Contrôle de la date de naissance
const birthChecker = (value) => {
  // const constBirth = document.querySelector('.birth');

  if (!value.match(/[0-9]/)) {
    console.log("la date est vide", value);    
    constErrorMessage ("birth", "Vous devez entrer votre date de naissance.")
    birthDateValue = null;
  } else {
    console.log("date", value);
    constErrorMessage ("birth", "", true);
    birthDateValue = value;
    // console.log (birthDateValue);
  }
};

// Contrôle de la quantité 
const quantityChecker = (value) => {
  // console.log(value);
  const constNumber = document.querySelector('.number');
  if (!value.match(/^[1-9][0-9]?$/)) {
    console.log("bad quantity", value);
    constErrorMessage ("number", "Le chiffre doit être compris entre 1 et 99.");
    quantityValue = null;
  } else {
    console.log("good quantity", value);
    constErrorMessage ("number", "", true);
    quantityValue = value;
  }
};

// Contrôle coche Conditions d'utilisation
const useChecker = (value) => {
  // console.log("function", value);
  if (!document.getElementById('checkbox1').checked) {  
    console.log("décoché");
    constErrorMessage ("checkboxOne", "Vous devez vérifier que vous acceptez les termes et conditions.");
    useCheckValue = null;
  } else {
    console.log("coché");      
    constErrorMessage ("checkboxOne", "", true);
    useCheckValue = value;
    console.log("useCheckValue", useCheckValue)
    
    // alert("Vous devez vérifier que vous acceptez les termes et conditions.");
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
      case "checkbox1":
        useChecker(e.target.value);
        console.log("e.target.value");
        break;
      default:
        console.log("pas de réaction");
        // null;
    };
  }); 
});


// Détection de l'input radio de classe "checkbox-input" (choix de la ville)
inputsType.forEach((inputVar) => {
  inputVar.addEventListener("input", (e) => {
    // console.log(e.target.value);  
    // const constRadioButton = document.querySelectorAll(".checkbox-input")
    if (e.target.className.match("checkbox-input")) {
      radioButtonValue = e.target.value;
      console.log(radioButtonValue);
    } 
    else {
    //   console.log("City NO", e.target.value);
      radioButtonValue = null;
    }
  });
});

// const checkboxes = document.querySelectorAll(".checkbox-input");

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => {
//   console.log('ça clique')
// }))



//***************************************************************************************
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit" ("C'est parti")
//***************************************************************************************

// Vérification de tous les champs et Validation du formulaire le cas échéant
constForm.addEventListener('submit', (e) => {
  console.log('SUBMIT!!!')
  e.preventDefault();
  

  console.log(firstNameValue, lastNameValue, emailValue, birthDateValue, quantityValue, radioButtonValue, useCheckValue);
  if (firstNameValue && lastNameValue && emailValue && birthDateValue && quantityValue && radioButtonValue && useCheckValue) {
    // const verifiedValue = {
    //   verifiedFirstName : firstNameValue,
    //   verifedlastName : lastNameValue,
    //   verifiedEmailValue : emailValue,
    //   verifiedBirthDateValue : birthDateValue,
    //   verifiedQuantityValue : quantityValue,
    //   verifiedRadioButtonValue : radioButtonValue,
    //   verifiedUseCheckValue : useCheckValue,
    // };
    console.log("tous les champs OK");
    firstNameValue = null;
    lastNameValue = null;
    emailValue = null;
    birthDateValue = null;
    quantityValue = null;
    radioButtonValue = null;
    useCheckValue = null;
    console.log("nouvel état", firstNameValue, lastNameValue, emailValue, birthDateValue, quantityValue, radioButtonValue, useCheckValue);
    alert("Merci ! Votre réservation a bien été reçue.");
    document.getElementById("form").reset();
    closeModal();
    
  } else {
    constErrorMessage ("checkboxOne", "Veuillez acceptez les termes et conditions.");
    console.log("Echec Validation", firstNameValue, lastNameValue, emailValue, birthDateValue, quantityValue, radioButtonValue, useCheckValue)
    // alert('Veuillez remplir les champs correctement.')

  }
});










// const errorMessage = (valid) => {
//   const container = document.querySelector(".formData");
//   if (!valid) {
//     container.classList.add('error');
//     container.innerHTML = "<span>Veuillez entrer 2 caractères ou plus pour le champ du nom</span>";
//     container.style.color = "#fe142f";
//     console.log(container.innerHTML);
//   } else {
//     container.classList.remove('error');    
//   } 
// }








// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.



// regex
// 2 lettres /[a-zA-z]{2,}/

// firstName.addEventListener('input', function(e) {
//   let value = e.target.value;
//   if (value.startsWith('[a-zA-z]{2,}')) {
//       isValid = true;
//       console.log(true);
//   } else {
//       isValid = false;
//   }
// });

// function isValid(firstname) {
//   return /^e[0-9]{3,}$/.test(value);
// }

// const firstNameChecker = (value) => {
//   console.log(value);
//   const constFirstName = document.querySelector('.firstName');
//   const constError = document.querySelector('.firstName > span');

//   if ((value.length > 0) && (value.length <2 || value.length > 35)) {
//     constFirstName.classList.add("error");
//     constError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
//   } else if (!value.match(/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.\s-]*$/)) {
//     constFirstName.classList.add("error");
//     constError.textContent = "Il ne doit pas y avoir de caractères spéciaux ou de chifres.";
//   } else {
//     constFirstName.classList.remove("error");
//     constError.textContent = "";
//   }
// };


// const mailChecker = (value) => {
//   console.log(value);
//   const constMail = document.querySelector('.address');
// };

// const birthChecker = (value) => {
//   console.log(value);
//   const constBirth = document.querySelector('.birth');
// };

// const quantityChecker = (value) => {
//   console.log(value);
//   const constNumber = document.querySelector('.number');
// };