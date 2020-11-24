//JS pour l'introduction aux objets
// alert('Teste la synchro du JS') //Un teste pour assurance des liens

// ici on a une variable-objet tout simplement 
let utilisateur = {

    // Nom age et email sont des propriétés de l'objet utilisateur
    nom : ['Victor', 'Marie', 'Hugo'], //Nous avons des propiété qui sont dans un tableau "array"
    age : 2,
    email : 'totor@hugo.com',
    adresse: 'Chez lui',

    //une méthode un peu comme une fonction
    bonjour: function() {
        alert('J\'ai ' + this.age + ' ans, et mon prénom est '+ this.nom[0] + ' ' + this.nom[2] + '.')// indice 2 pour Hugo 
    }
}
utilisateur.bonjour();
console.info(typeof (utilisateur));
