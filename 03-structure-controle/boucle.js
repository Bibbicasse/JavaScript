//JS pour les boucles

// INTRO 
// Incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
// console.log(a,b,c,d);

//a++ va incrémenter APRES a de 1, il ajoute 1 après
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', là je vais post-incrémenter de 1, ce qui fait toujours a =' + a++ + ' et après ce qui fera a = ' + a;
console.log(a);

document.getElementById('p2').innerHTML = 'b contient la valeur ' + b + ' là je vais pré-incrémenter, ce qui fait maintenant b contient' + ++b;
console.log(b);



document.getElementById('p3').innerHTML = 'c contient la valeur ' + c + ', là je post-décrémente de 1, ce qui fait que c\'est toujours égal à ' + c-- + ' et donc après c sera = à ' + c ;

console.log(c);

document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égale à ' + --d;
console.log(d);


// Boucle while 

let w1 = 0;

while (w1 < 10){//tant que c'est vrai le test ou la condition
    //ajoute de nouveau la chaine de caractère tant que la boucle n'est pas terminé
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';
    w1++; //Incrémente la valeur de la variable de départ
}



// Dans le p while2 

let w2 = 0 ;

// boucler tant que w2 est inférieur ou égal à 10

while(w2 <=10) {
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + '.<br>';
    w2++;
}


//On va faire la même avec do... while "faire... tant que"

do {
    document.getElementById('while3').innerHTML +='w3 contient la valeur ' + w3;
    w3++
}

while (w3 < 10);