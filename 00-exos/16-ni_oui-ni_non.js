// JS pour la page exercice du jeu ni oui ni non 
var disMoi = ''; //initialisation de la variable avec une string vie, on y rentrera la réponse de l'utilisateur

console.log(typeof disMoi, disMoi);
var i = 1;

while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('On joue au ni oui ni non ?? Allez !');
    i++;
}

document.write('<p>Perdu</p>')