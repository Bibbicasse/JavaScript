// JS pour la page objet 
// Victor EST un objet

let victor = {
    nom : ['Victor', 'Hugo'],
    age : 2,
    email : 'totor@hugo.com',

//Bonjour est une méthode de l'objet Victor

bonjour: function() {
    alert('Bonjour je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans.');
    }
}

victor.bonjour();
console.log(typeof victor);
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans';

//On modifie la valeur de age
victor.age = 80;

document.getElementById('p3').innerHTML = 'Nouvel âge : ' + victor.age + ' ans';

// victor.bonjour();
//On rajoute une propriété et une valeur associée
victor.metier = 'Écrivain, dramaturge et poète';

//Et on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans ' + this.metier + ' célèbre dans le monde entier.')
}

victor.bonjour2();


document.getElementById('p4').innerHTML = 'Bonjour je suis ' + this.nom[0] + ' ' + victor.nom[1] + '.';