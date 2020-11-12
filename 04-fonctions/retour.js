//JS pour la page retour

function division(a,b) {//Les paramètre (a,b)
    if (b == 0) {
        return 'Division par 0 Impossible !';
    } else {
        // alert('Attends je calcule !')
        return a / b ; // /!\ après le return aucun bloc de code ne s'affichera et/ou exécutera ! /!\

    }//fin de if else

}//fin de function

division(5,0);

console.log(division(50,0));

let nbr1 = prompt('Entrer un premier nombre à diviser');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier')

console.log(nbr1, nbr2);

let resultatDivision = division(nbr1, nbr2); // On utilise les variable en arguments
document.getElementById('p1').innerHTML = 'Le resulat de ' + nbr1 + '/' + nbr2 + ' = ' + resultatDivision;

