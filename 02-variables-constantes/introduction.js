//les scripts pour l'intro sur les variables
// Mon second fichier JS
//création de 3 variable, cependant elles ne stockent pas de valeurs

// let prenom;
// let monAge;

// var ville;

//On déclare une variable et on l'initialise en même temps
let prenom = 'Jean'; //une chaîne de caractères


// Pour initialiser une variable on utilise l'opérateur =  CE N'EST LE SIGNE EGAL !!!

// Autre moyen d'initialiser une varible

let monAge;
monAge = 2020; //un chiffre ! pas besoin de ''

console.log(prenom);
console.log(monAge);

prenom = 'Salvatore';
monAge = 25;

console.log(monAge);

//ceci fonctionne 

nom = 'Giovinetti';
var nom;

console.log(nom)

///ceci ne fonctionne pas car "let" est déclarer après

// ville = 'Suresnes';
// let ville;

let ville;
ville = 'Suresnes';
console.log(ville);


// Avec prompt() on a pas une fenêtre avec un champs de saisie
//prompt();

// Redéclaration des variable
var chien ='Medor';
var chien ='Max';

console.log(chien)

// Ceci ne fonctionnera pas 
// let chat ='Minou'
// let chat ='Obi-Wan'

