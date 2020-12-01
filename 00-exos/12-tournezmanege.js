// JS pour l'exercice tour de manège 

// let whileManege = 0;

// while (whileManege < 10){//tant que c'est vrai le test ou la condition
//     //ajoute de nouveau la chaine de caractère tant que la boucle n'est pas terminé
//     document.getElementById('manegeWhile').innerHTML += 'Avec while : c\'est le tour n°' + whileManege++ +'<br>' ; //Incrémente la valeur de la variable de départ
// }

let whileManege2 = 0;/* AVEC WHILE*/

while (whileManege2 < 10){ //tant que c'est vrai le test ou la condition
    whileManege2++;
    document.getElementById('manegeWhile').innerHTML += 'Avec while : c\'est le tour n°' + whileManege2 +'<br>' ; //Incrémente la valeur de la variable de départ
}

for (var i = 1; i <= 10; i++) {//AVEC FOR
    document.getElementById('manegeFor').innerHTML += 'Avec For : c\'est le tour n°' + i +'<br>' ;
}



let nbrTour = Number(prompt('Combien de tour de manège voulez-vous faire ? (While)'));
let whileManege3 = 1; /* AVEC WHILE*/

    while (whileManege3 <= nbrTour) { //AVEC WHILE ET PROMPT
        document.getElementById('manegeWhilePrompt').innerHTML += 'Avec while prompt : c\'est le tour n°' + whileManege3 +'<br>' ; //Incrémente la valeur de la variable de départ
        whileManege3++;
    } 

let nbrTour2 = Number(prompt('Combien de tour de manège voulez-vous faire ? (For)'));
    for (var i = 1; i <= nbrTour2; i++) {//AVEC FOR
        document.getElementById('manegeForPrompt').innerHTML += 'Avec For : c\'est le tour n°' + i +'<br>' ;
    }


