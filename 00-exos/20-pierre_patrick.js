//pierre feuille ciseau

//Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:
// Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

'use strict';
confirm(coucou) //confirm est identique à alert avec le bouton annuler en plus
var choixOrdinateur;
var choixJoueur = '';
var random;

// 2 - PROMPT() POUR POSER LA QUESTION A L'UTILISATEUR
//'window. est implicite'
choixJoueur = window.prompt('Que choissisez-vous ? Pierre, Feuille ou Ciseau ?').toLocaleLowerCase();//Pas de différence avec prompt() et toLocaleLowerCase()

//3 - Pour le choix de l'ordinateur on va utiliser un nombre en aléatoire et affecter à ce nombre un des mots à chosir...

random = Math.random();
console.log(typeof random, random);

//4 - On fait un if else if pour chosiir le nombre

if (random <= 0.33) {
    choixOrdinateur = 'pierre';
} else if (random <=0.66) {
    choixOrdinateur = 'feuille';
} else {
    choixOrdinateur = 'ciseau';
} // fin if else choix du mot au hasard par l'ordinateur
console.log(typeof choixUtilisateur, choixOrdinateur);

// 5 - Puis if si ils ont choisi la même chose

if (choixOrdinateur == choixJoueur) {
    document.write('égalité');
} else { //le choix est différent>>>> switch
    switch(choixOrdinateur) {
        case 'ciseau':
            if(choixJoueur == 'pierre') {
                document.write('<p>La pierre ecrase le ciseau : Vous gagnez !</p>');
            } else  {//de facto il a forcément feuille
                document.write('<p>Les ciseau coupent la feuille : Vous perdez !</p>');
            }
            break
        case 'feuille':
            if(choixJoueur == 'pierre') {
                document.write('<p>La pierre enveloppé par la feuille: Vous perdez</p>');
            } else  {//de facto il a forcément les ciseau
                document.write('<p>Les ciseau coupent la feuille : Vous gagnez !</p>');
            }
            break
        case 'feuille':
            if(choixJoueur == 'pierre') {
                document.write('<p>La pierre enveloppé par la feuille: Vous perdez</p>');
            } else  {//de facto il a forcément les ciseau
                document.write('<p>Les ciseau coupent la feuille : Vous gagnez !</p>');
            }
            break
    }
}
