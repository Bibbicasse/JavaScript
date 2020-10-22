//mon premier fichier .js - Salvatore Colombbus
// Ce fichier est lié à la page 01-04-introduction.html

//un comentaire monoligne

/*un commentaire 
multiligne en JS */

/*un commentaire multiligne sur une seule ligne */

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('MANGGERRRRRR !!!!');
}

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragrapghe ajouté'
    document.body.appendChild(para);
} 

