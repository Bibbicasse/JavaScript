// JS pour la page For


for (let i = 0; i < 10; i++) { 
    // 1 - initialisation 
    // 2 - test ou condition de sortie 
    // 3 - incrémentation
    document.getElementById('p1').innerHTML += ' i contient la valeur ' + i + ' à chaque passage, de la boucle <br>';
}

for (let i = 0; i < 18; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td><td>passage n° ' + (i +1) + '</td></tr>';
}

// console.log(i)

// root 
// i = itérator = curseur

// if(test) {
//     bloc de Code OU instruction;
// }

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {

    if (arreteToi== 56 ) {
        break;
    } //fin du if 
    document.getElementById('p2').innerHTML += 'La variable arreteToi contient la valeur ' + arreteToi + ' à chaque passage de la boucle for. <br>';
} //fin du for



//for avec une instruction continue

for (let item= 0; item < 10; item++) {
    if ( item % 2 != 0) {//le reste de la division n'est pas égal à 0 (donc item est un chiffre impair)
        continue;
    }//fin de if
    document.getElementById('p3').innerHTML += ' la variable item contient la valeur ' + item + ' à chaque passage de la boucle. <br>';
} // fin de for
