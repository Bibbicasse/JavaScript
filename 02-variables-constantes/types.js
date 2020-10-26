// .js pour la page types de données 

// string 
//Avec les "" pas besoin de mettre \ pour les appostrophes contrairement aux '' ou là on est obliger de mettre \ pour eviter l'erreur
let presentation = "je m'appelle Salvatore";
// let presentation = 'je m\'appelle Salvatore';
let age = '25';
let age2 = 60;

console.log(typeof presentation);

//1- récupération d'un document dont l'ID est p1
//2- La propriété innerHTML permet de remplacer complétement le contenu d'un élément identifié par son attribut ID
//3- Puis on concatène une string et le resultat de la fonction typeof()
document.getElementById('p1').innerHTML = 'Type de donnée pour la variable présentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de donnée pour la variable age 1 : ' + typeof age;

document.getElementById('p3').inneHTML = 'Type de donnée pour la variable age 2 :' + typeof age2;

let phrase = "Mon film préféré est \"2000 lieues sous les mers\"."

console.log(phrase);


//2 - Number 

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z)
//2 -valeurs dans la console.log
console.log(typeof x, z)

//3 -  BOOLEEN

// let vrai = true;
// let faux = false;

let test = 8 > 4;
console.log(test, test)

//4 - Null and Undefined
let arbre;

console.log(typeof arbre)

let nul = null;
let indefini;

document.getElementById('p4').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof indefini;