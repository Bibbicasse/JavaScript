//Les fonctions introduction

//exemple la fonction random()"aléatoire"

document.getElementById('p1').innerHTML = Math.random();//ici on exécute le code "caché" derière la fonction, on l'appele la fonction ou on l'invoque

// replace()
let discours1 = "Bonjour, je suis Donald Trump, et j'ai pas gagné ! ";
//console.log(discours1);

let discours2 = discours1.replace('Donald Trump','Kamala Harris');//Le nom  d'une fonction est syuvu d'un couple de parenthèse qui contienne les plus souvent des arguments.
document.getElementById('p2').innerHTML = discours2;


// Création de fonction
//1 - Multiplier le resultat de random() par 100
function randomX100() {
    return Math.random() *100;
}

// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

// 2 - Une simple multiplication

function multiplier(nbr1, nbr2) {
    return ('multiplions' + nbr1 + 'x' + nbr2 + ' = ' + (nbr1* nbr2));
}
// console.log(multiplier(2.6));
document.getElementById('p4').innerHTML = multiplier(145,9);

console.log(10, 6);
//soustraction
function soustraction(nbr1, nbr2) {
    return ('Soustrayons ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1- nbr2));
}
//division
function division(nbr1, nbr2) {
    return ('Divisons ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
//addition
function addition(nbr1, nbr2) {
    return ('Additionnons ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1+ nbr2));
}
//modulo

function modulo(nbr1, nbr2) {
    return ('Le reste de la division euclidienne ou le modulo en JS de ' + nbr1 + ' par ' + nbr2 + ' est égal à ' + (nbr1%nbr2));
}
console.log(soustraction(15,3))
console.log(division(30,3))
console.log(addition(17,3))
console.log(modulo(10,3))

