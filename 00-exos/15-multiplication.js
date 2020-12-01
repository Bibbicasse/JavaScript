// JS pour l'exo multiplication 
// alert('test link html');

// AIDE : 
// for (/* '1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation' */) {
//     // opération
//     // bloc de code à éxécuter
// }

let numberUser = prompt('Incrivez un nombre pour afficher sa table de multiplication');
    for(var i = 1; i <= 10; i++) { //boucle de 1 a 10
        document.getElementById('table1').innerHTML += numberUser + ' x ' + i + ' = ' + numberUser*i + '<br>'; //Multiplie le nombre demander de 1 a 10
} //fin de boucle numberUser

/////////////////////////////////////////////////////////

let numberUser2 = prompt('Incrivez un nombre entre 1 et 9');
    for(var i = 1; i <= 10; i++) { //boucle de 1 a 10
        document.getElementById('table2').innerHTML += numberUser2 + ' x ' + i + ' = ' + numberUser2*i + '<br>'; //Multiplie le nombre demander de 1 a 10
} //fin de boucle numberUser2

console.log(numberUser, numberUser2);

            // AIDE EN LIGNE
// for (var i = 1; i < 11; i++) {
//     for (var j = 1; j < 11; j++) {
//         result += (i*j) + ' ';
//     }
//     result += '\n'
// }