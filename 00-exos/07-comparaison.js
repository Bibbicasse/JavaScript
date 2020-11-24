// JS per la pagina di confronto exo

var nombre1 = parseInt(prompt("Premier nombre à comparer"));
var nombre2 = parseInt(prompt("Deuxième nombre à comparer"));

console.info(nombre1, nombre2)

if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
        if (nombre1 < nombre2) {// si nombre1 est inférieur
            document.getElementById('resultatCompare').innerHTML = 'Votre premier numéro ' + nombre1 + ' est plus petit que ' + nombre2;
        } else if (nombre1 > nombre2) { // si il est supérieur
            document.getElementById('resultatCompare').innerHTML = 'Votre premier numéro ' + nombre1 + ' est plus grand que ' + nombre2;
        } else {// sinon ils sont égaux
            document.getElementById('resultatCompare').innerHTML = 'Votre premier numéro ' + nombre1 + ' est égal à ' + nombre2;
        }// fin if condition comparaison
    } else {
        document.getElementById('resultatCompare').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
}; // fin if vérification que c'est un nombre