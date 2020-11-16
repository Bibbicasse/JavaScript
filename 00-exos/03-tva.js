// JS pour la page exercice TV 03 

let priceHT = prompt('Montant du virement');
let priceTTC = priceHT * 1.2

// console.log(priceTTC);

alert('Vous avez décidez de virez ' + priceHT +  '\nLa transaction TTC sera de' + ' ' + priceTTC)

document.getElementById('resultPriceUser').innerHTML = 'Votre montant initial est de ' + priceHT + '<br> Avec une taxe de 20% <br>Le montant total sera de ' + priceTTC;

