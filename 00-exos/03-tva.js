// JS pour la page exercice TV 03 

let prixHT = prompt('Montant du virement');
let prixTTC = prixHT * 1.2 ;

// console.log(prixTTC);

alert('Vous avez décidez de virer ' + prixHT +  ' € \nVotre virement sera de ' + ' ' + prixTTC + ' € TTC');

document.getElementById('resultat').innerHTML = 'Votre montant initial est de ' + prixHT + '€ <br> Avec une taxe de 20% <br>Le montant total sera de ' + prixTTC + ' €';

