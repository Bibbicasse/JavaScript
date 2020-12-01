// JS pour l'exercice 13 parite 

// for (var i = 1; i <=20; i++) {
//     if (i % 2 === 0) {
//     console.log(i + ' est paire'); 
//     }
// }

// for(var i = 1; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i + ' pair');
//     } else {
//         console.log(i + ' impair');
//     }
// }

let nbrParite = parseInt(prompt('Entrez un chiffre à partir duquel vous voulez commancer la Parité'));
console.log(typeof nbrParite, nbrParite);

let nbrPariteMax = (nbrParite + 10) ;
console.log(typeof nbrPariteMax, nbrPariteMax);

for(var i = nbrParite; i <= nbrPariteMax; i++) {
    if(i % 2 === 0) {
        console.log(i + ' pair');
    } else {
        console.log(i + ' impair');
    }
}

//////////////////

var tagada = Number(prompt('EXO 3 : Combien de tagada veux tu ? (While)'));
console.log(tagada);

var tagadaMax = (tagada + 10);
console.log(tagadaMax);

while (tagada <= tagadaMax) { 
    if (tagada % 2 === 0) {
    document.write(tagada + 'est pair <br>');
    } else { (tagada % 2 === 0)
    document.write(tagada + 'est impair <br>');

    }
    tagada++
}

