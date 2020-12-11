
// JS pour la page exercice triangle bis (sapin) 


              //////////////////////////////
             //  Inscrit dans la console //
            //////////////////////////////

let nbrLigne = 10;

for (let ligne = 0; ligne < nbrLigne; ligne++) {
    let etoiles = ''; //Les variable sont vides
    let espaces = ''; //Les variable sont vides

    //1 - FOR POUR LES ESPACE AU DEBUT DE LA LIGNE//
    //sur la 1ère (qui aura une étoile) je place 6 espace à gauche de l'étoile, 1ère opération le nbr de ligne - l'étoile placée
    for(let col = 0; col < nbrLigne - (ligne + 1); col++) {
        espaces += ' ';
    }
    //2 - FOR POUR LES ETOILES
    for (let col = 0; col <2 * ligne + 1; col++) {
        etoiles += '*';
    }
    console.log(espaces + etoiles);
}


              ///////////////////////////
             //  Inscrit dans le HTML //
            ///////////////////////////

for (let ligne = 0; ligne < nbrLigne; ligne++) {
    let etoile = '';
    let espaces = '';
    for(let col = 0; col < nbrLigne - (ligne + 1); col++) {
        espaces += ' ';
    }
    for (let col = 0; col <2 * ligne + 1; col++) {
        etoile += '*';
    }
    document.getElementById('resultat').innerHTML += espaces + etoile + '<br>';
}
for (var s=1; s<=2; s++) {
    document.getElementById('resultat').innerHTML += '|';
}
