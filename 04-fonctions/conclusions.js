// JS pour la page de conclusion 04 

//On va créer une fonction anonyme

// function () {
//     alert('Alerte exécutée par une fonction anonyme')
// }

// ????? Comment appeler ma fonction

let alerte = function () {
    alert('Alerte exécutée par une fonction anonyme')
}
//toujours "appeler" la fontion anonyme sinon erreur dans la poursuite du script
alert();

//auto-invocation d'une fonction anonyme
// celaa ne fonctionnera pas 
(function () {
    alert("Alerte !!!!! Seconde exécution d'une fonction anonyme");
    }
)();

// (On met la fonction dans ce couple de parenthèse)(); suivie d'un couple de parenthèse 

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

// au déclenchement d'un évènement

// function (){
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1 ! ');
// }

let paragraphe1 = document.getElementById('p1') ;

paragraphe1.addEventListener('click', function (){
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
});

let paragraphe2 = document.getElementById('p2') ;

paragraphe2.addEventListener('click', function (){
    alert('Tu viens de cliquer sur le paragraphe 2 ! ');
});



// fonction recursive 

function decompte(t) {
    if(t > 0 ) {
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 1);
    } else { 
        return t;

    }//fin de else
}//fin de function décompte

decompte(15);