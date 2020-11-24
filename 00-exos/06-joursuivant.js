// JS pour la page exercice de joursuivant.js 

var jourJ = prompt("Quel jour sommes nous aujourd'hui? (fonction avec if-else)" );
// console.log(jourJ);
document.getElementById('jourJ').innerHTML ='Nous sommes ' + jourJ;

// EXERCICE AVEC IF ELSE 

if (jourJ == 'lundi' || 'Lundi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons mardi';
} else if (jourJ == 'mardi' || 'Mardi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons mercredi';
} else if (jourJ == 'mercredi' || 'Mercredi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons jeudi';
} else if (jourJ == 'jeudi' || 'Jeudi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons vendredi';
} else if (jourJ == 'vendredi' || 'Vendredi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons samedi';
} else if (jourJ == 'samedi' || 'Samedi') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons dimanche';
} else if (jourJ == 'dimanche' || 'Dimanche') {
    document.getElementById('jourSuivant').innerHTML = 'Demain nous serons lundi';
} else {
    document.getElementById('jourSuivant').innerHTML = 'Ce jour n\'existe pas, une erreur de frappe peut-être ? ';
}

// EXERCICE AVEC SWITCH 

var jourSwitch = prompt("Quel jour sommes nous aujourd'hui? (fonction avec switch");
switch(jourSwitch) {//On va switcher sur la variable
    case 'lundi': //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons mardi ';
    break; //Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    case 'mardi' : //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons mercredi ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    case 'mercredi' : //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons jeudi ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    case 'jeudi' : //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons vendredi ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes
    
    case 'vendredi' : //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons samedi ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    case 'samedi': //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons dimanche ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    case 'dimanche' : //Un des "cas" possible ou une des "issues"
        document.getElementById('jourSuivantSwitch').innerHTML = 'Demain nous serons lundi ';
    break;//Si c'est vrai, le Switch s'arrêtera et ignora les suivantes

    default :
        document.getElementById('jourSuivantSwitch').innerHTML = 'Ce jour n\'existe pas';
}