// JS per la pagina di confronto exo

var numero1 = prompt("Immettere un primo numero da confrontare");
var numero2 = prompt("Immettere un secondo numero da confrontare");
console.info(numero1, numero2)

if (numero1 < numero2) {
    document.getElementById('resultatCompare').innerHTML = 'Il tuo primo numero ' + numero1 + ' è minore di ' + numero2;
} else if (numero1 > numero2) {
    document.getElementById('resultatCompare').innerHTML = 'Il tuo primo numero ' + numero1 + ' è più alto di ' + numero2;
} else if (numero1 == numero2) {
    document.getElementById('resultatCompare').innerHTML = 'Il tuo primo numero ' + numero1 + ' è uguale a ' + numero2;
} else {
    document.getElementById('resultatCompare').innerHTML = 'Confronto non possibile, aggiorna i prompt';
}







//                               