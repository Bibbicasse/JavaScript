// JS pour la page heure suivante exercice 

var heure = parseInt(prompt("Entrez l'Heure"));
var minute = parseInt(prompt ("Entrez les Minutes"));
var seconde = parseInt(prompt("Entrez les Secondes"));

if ((heure >= 0) && (heure <=23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <=59)) {// conditions 
    seconde++;// on incrémente les seconde
        if (seconde === 60) {
            seconde = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
                heure++;
                if (heure === 24) {
                    heure = 0;
                }
            }
        }
    console.log('il sera ' + heure + ' ' + minute + ' ' + seconde );
    document.getElementById('resultat').innerHTML = 'Dans une seconde il sera ' + heure + ' h ' + minute + ' mn ' + seconde +' s.';
} else {
    document.getElementById('resultat').innerHTML = 'Heure incorrecte';
}

