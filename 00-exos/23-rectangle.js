// JS pour la page exercice 23 rectangle 
let bouton = document.getElementById('cacheRectangle');
let rectangle = document.querySelector('.cache');
    console.log(rectangle);

function cliqueBouton() {
    rectangle.classList.toggle('cache');
}

bouton.addEventListener('click', cliqueBouton);

document.querySelector('.rectangle').addEventListener('mouseover', 
function(){
    this.style.backgroundColor="firebrick";
});
document.querySelector('.rectangle').addEventListener('mouseout', 
function(){
    this.style.backgroundColor="royalblue";
});
document.querySelector('.rectangle').addEventListener('dblclick', 
function(){
    this.style.backgroundColor="limegreen";
});



//CORRECTION JUSTINE

// let rectangle = document.querySelector('.rectangle'); // 
// let bouton = document.querySelector('#toggle-rectangle')
// bouton.addEventListener('click', function() {
//     rectangle.classList.toggle('cache');
// }); // balance entre la classe cache et l'affichage normal
// rectangle.addEventListener('dblclick', function(){
//     rectangle.classList.add('good');
//     rectangle.classList.remove('important');
//     // rectangle.classList.toggle('good', 'important'); comment ça fonctionne ??
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('good');
// });
// rectangle.addEventListener('mouseover', function(){
//     rectangle.classList.remove('good');
//     rectangle.classList.add('important');
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('important');
// });

//