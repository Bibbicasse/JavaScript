// JS pour la page 14 saisie 

// alert ('test lien');

let nombre = 0; //valeur initiale qui va nous permettre d'entrer dans la boucle
console.log(nombre + 'est la variable d\'initialisation');

//while

while ((nombre < 50) || (nombre > 100)) {//tant que : tout les nombre non compris entre 50 et 100; soit i es inférieur à 50 soit il est supérieur à 100
    nombre = Number(prompt('Entre un nombre entre 50 et 100'));
}
console.log(nombre + ' > variable récupéré');

