//.js pour la page pour les opérateurs.


// OPERATEURS ARITHMETIQUE 
let x = 2;
let y = 50;
let z = 4;

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * z;
let e = y / x * z;
let f = 5 % 3;
let g = 2** 3;
// % n'est pas un pourcentage mais modulo -> 5/3 (sans la virgule) = 1 + 2 (le modulo sera de 2)

console.log(a, b, c, d, e);
console.log(f)
console.log(g)


// alert (
//       'a contient :' + a +
//     '\nb contient :' + b +
//     '\nc contient :' + c +
//     '\nd contient :' + d +
//     '\ne contient :' + e +
//     '\nf contient :' + f +
//     '\ng contient :' + g 
// );


//PRIORITE DES CALCULES
let h = 1 - 2 - 3;
console.log(h);
//Le calcul dans h se fait de gauche à droite
let k = 1 + 4 - 5;
console.log(k)
//Le calcul dans h se fait de droite à gauche
let j = 2 ** 3 ** 4;
console.log(j);

let l = 1 - (2 - 3);
console.log(l);

let m = 1 -(2 * 3);
console.log(1)

// alert (
//       'h contient :' + h +
//     '\nk contient :' + k +
//     '\nj contient :' + j +
//     '\nl contient :' + l + 
//     '\nm contient :' + m
// );


// Opérateur d'affectation dans le JS 
// var chiffre1 = 5;
let chiffre1 = 501;
let chiffre2 = 18;
let prenom= "Audrey";
let somme = chiffre1 % chiffre2;

console.log(somme)

//console.log(prenom);
//console.log(typeof chiffre1)
let n = 20;
let o = 50;
n += 15; //on ajoute 15 à la valeur stocker
console.log(n);

o += 5;
console.log(o);
