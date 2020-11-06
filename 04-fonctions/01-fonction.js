//Les fonctions introduction

//exemple la fonction random()"aléatoire"

document.getElementById('p1').innerHTML = Math.random();

// replace()

let discours1 = "Bonjour, je suis Donald Trump, et j'ai pas gagné ! ";

let discours2 = discours1.replace('Donald Trump','Joe Biden');

document.getElementById('p2').innerHTML = discours2