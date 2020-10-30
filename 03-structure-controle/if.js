//.js pour la page if

let x = 4 ;
let y = 0 ;


if(x > 1) { //TEST true ? --> la condition ou le test est évalué à true
    alert('X contient une valeur supérieur à 1'); // BLOC DE CODE si c'est true on exécute ce bloc de code
}

if(x == y ){
    alert('x et y contienne la même valeur');
}

if(y){//L'alert ne s'affichera pas car la valeur de y contient 0, qui est une des valeurs qui renvoit false cf. la liste dans la page html
    alert("La valeur de 'y' est évalué à true");//puisque c'est faux on n'exute pas.
}

// INVERSION du test logique > vérifier que c'est faux

if((x > 1) == false) {//au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
    alert('x contient une valeur inférieur à 1');
}


if((x == y) == false) {
    alert('x et y ne contienne pas la même valeur');
}

//VOIR