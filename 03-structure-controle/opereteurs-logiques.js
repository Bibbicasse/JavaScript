// Opérateurs logiques 

// exemple
let x = 5;
let y = -20;


//getElementById nous sert à accéder à un id présent dans la page HTML et à inserer avec .innerHTML, le texte renseigné après l'opérateur d'affectation
if(x >= 0 && x <= 10) {
    document.getElementById('p1').innerHTML = ' x vaut ' + x + ' et est une valeur comprise entre 0 et 10';
};

//||OU

if (y < -10 || y > 10) {
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' et est une valeur plus petite que -10 ou plus grande que 10'
};



//! NO
//dans notre exemple x = 5
//opérateur inversé ; ce n'est pas vrai, 5 n'est pas inférieur ou égale à 2, autrement dit si le test est false l'opérateur inversé (la négation) renvoie true donc on exécute le code
if (! (x <= 2)) {//NO
    document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieure à 2'
}