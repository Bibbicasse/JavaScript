// JS pour la page exercice valeurs finales 

var nb1 = parseInt(prompt("Entrez une valeur pour nb1"));
var nb2 = parseInt(prompt("Entrez une valeur pour nb2"));
var nb3 = parseInt(prompt("Entrez une valeur pour nb3"));

console.log(nb1, nb2, nb3);
if (nb1 > nb2) {
    nb1 = nb3 * 2;

} else  {
    nb1++; /* nb1 = 8 */
    if (nb2 > nb3) { /*  */
        nb1 = nb1 + nb3 * 3;

    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}

console.info(nb1, nb2, nb3);

document.getElementById('nb1').innerHTML = nb1;
document.getElementById('nb2').innerHTML = nb2;
document.getElementById('nb3').innerHTML = nb3;
