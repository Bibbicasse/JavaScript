// Le JS pour la page exercice nombre de jours 

// alert('test');

//montrer comment dans un prompt() mettre du texte

var mois = parseInt(prompt('Quel mois choisissez-vous', 'n° du mois, entre 1 et 12'));
var moisNom = ['janvier','février','mars','avril','mai', 'juin','juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',]

console.log(mois);
console.info(moisNom.length);
var numMois = moisNom.indexOf('mai');

console.log(numMois);
// if (mois == 1 ) { /* mois de janvier */
//     document.getElementById('resultat').innerHTML = 'Le premier mois est janvier et il contient 31 jours';
// } else if ( mois == 2) {/* mois de février */
//     document.getElementById('resultat').innerHTML = 'Le deuxième mois est février et il contient 28 jours';
// } else if ( mois == 3) {/* mois de mars */
//     document.getElementById('resultat').innerHTML = 'Le troisième mois est mars et il contient 31 jours';
// } else if ( mois == 4) {/* mois de avril */
//     document.getElementById('resultat').innerHTML = 'Le quatrième mois est avril et il contient 30 jours';
// } else if ( mois == 5) {/* mois de mai */
//     document.getElementById('resultat').innerHTML = 'Le cinquième mois est mai et il contient 31 jours';
// } else if ( mois == 6) {/* mois de juin */
//     document.getElementById('resultat').innerHTML = 'Le sixième mois est juin et il contient 30 jours';
// } else if ( mois == 7) {/* mois de juillet  */
//     document.getElementById('resultat').innerHTML = 'Le septième mois est juillet et il contient 31 jours';
// } else if ( mois == 8) {/* mois de  aout */
//     document.getElementById('resultat').innerHTML = 'Le huitième mois est août et il contient 31 jours';
// } else if ( mois == 9) {/* mois de septembre */
//     document.getElementById('resultat').innerHTML = 'Le neuvième mois est septembre et il contient 30 jours';
// } else if ( mois == 10) {/* mois de octobre  */
//     document.getElementById('resultat').innerHTML = 'Le dixième mois est octobre et il contient 31 jours';
// } else if ( mois == 11) {/* mois de novembre  */
//     document.getElementById('resultat').innerHTML = 'Le onzième mois est novembre et il contient 30 jours';
// } else if ( mois == 12) {/* mois de décembre */
//     document.getElementById('resultat').innerHTML = 'Le douzième mois est décembre et il contient 31 jours'; 
// } else if ( (!isNaN(mois)) ) { /* Si aucun des mois n'est saisie */
// document.getElementById('resultat').innerHTML = 'La saisie tapé ne correspond pas à un chiffre demandé.';
// } else {  /* Si une string est saisie */
//     document.getElementById('resultat').innerHTML = 'La saisie ne fait pas partie du calendrier';
// }

// CODE DE KATIA 1 

// if(!isNaN(mois)){ // est-ce bien un nombre ?
//     if(mois >= 1 && mois <= 12){ // si le chiffre est entre 1 et 12, on exécute le bloc de code suivant
//         if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){ 
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
//         }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
//         }else{
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
//         }
//     }else{ // sinon, on exécute ce code
//         document.getElementById('p1').innerHTML = 'Il n\' y a que 12 mois dans l\'année !';
//     }
// }else{ // si mois n'est pas un nombre (isNan), on exécute ce code
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// } //fin de la condition


// CODE PATRICK

if (isNaN(mois)) {
    document.getElementById('p1').innerHTML='Votre choix n\'est pas un chiffre';
} else {
    if(mois === 2) {
        document.getElementById('p1').innerHTML='Le mois numéro ' + mois + ' ' + moisNom[mois - 1] + ' fait 28 jours';
        
    } else if ((mois === 4) || (mois ===6) || (mois ===9) || (mois ===11)) {
        document.getElementById('p1').innerHTML='Le mois numéro ' + mois + ' ' + moisNom[mois - 1] +  ' fait 30 jours';

    } else if ((mois === 3) || (mois ===5) || (mois ===7) || (mois ===8)|| (mois ===10) || (mois ===10)) {
        document.getElementById('p1').innerHTML='Le mois numéro ' + mois + ' ' + moisNom[mois - 1] + '  fait 31 jours';

    } else {
        document.getElementById('p1').innerHTML='Votre choix de numéro, le ' + mois + 'n\'est pas dans le calendrier';
    }
}//fin du if else principal 
