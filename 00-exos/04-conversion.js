// JS pour la page EXERCICE des conversions - Salvatore Giovinetti

let Celsius = prompt('Degré Celsius à convertir en Farhenheit ?');
let Farhenheit = (Celsius * 1.8) + 32;
// let Kelvin = Celsius + 273.15; (Erreur à corriger)

// console.log(Celsius, Farhenheit);


document.getElementById('p1').innerHTML = 1 + '°C (Celsius)' + ' = ' + 33.8 + '°F (Farhenheit)'; 
/* Exemple sur la base de 1°C vers les °F */

document.getElementById('p2').innerHTML = Celsius + '°C (Celsius)' + ' = ' + Farhenheit + '°F (Farhenheit)'; 
/* Resultat du prompt du °C en °F */

document.getElementById('p3').innerHTML = 1 + '°F (Farhenheit)' + ' = ' + -17.22 + '°C (Celsius)';
/* Exemple sur la base de 1°F vers les °C */

document.getElementById('p4').innerHTML = Farhenheit + '°F (Farhenheit)' + ' = ' + Celsius + '°C (Celsius)';
/* Resultat du prompt du °F en °C */

// document.getElementById('p5').innerHTML = Celsius + '°C' + ' = ' + Kelvin + '°K'; (Tests à approfondir)




