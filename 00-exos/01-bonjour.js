//Scripts pour la page 01-bonjour.html

let sonPrenom = prompt('Entrez votre prénom');
let sonNom = prompt('Entrez votre nom');

console.info(sonNom, sonPrenom);

alert("Bonjour " + sonPrenom  + ' ' + sonNom );

document.getElementById('idUser').innerHTML = sonPrenom + ' ' + sonNom + ' est ton identité.';

