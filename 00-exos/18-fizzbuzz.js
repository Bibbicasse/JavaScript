// Js pour la page FizzBuzz 

let abc = 0; //valeur initiale qui va nous permettre d'entrer dans la boucle

        //SOLUTION ALEXANDRE
// for (var i = 1; i <=100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if ((i % 5 === 0 ) && !(i % 3 === 0)) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     if ((i % 5 === 0 && i % 3 === 0)) { //le nombre et divisible par 3 et 5
//         console.log("FizzBuzz");
//     } //fin if
// }//fin for


//VERSION PATRICK
for (var i = 1; i <=100; i++) {
    if ((i % 5 === 0 && i % 3 === 0)) { //le nombre et divisible par 3 et 5
        console.log("FizzBuzz");
    } else if (i % 3 === 0 ) {
        console.log('Fizzz')

    } else if (i % 5 === 0 ) {
        console.log('Buzzzz');
    } else {
        console.log(i)
    } //fin if else
}//fin for


//VERSION JUSTINE
for(var i = 1; i <= 100; i++){
    if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
         document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
     }else if(i % 3 === 0){
         document.getElementById('p1').innerHTML += 'Fizz <br>';
     }else  if(i % 5 === 0){
         document.getElementById('p1').innerHTML += 'Buzz <br>';
     }else{
         document.getElementById('p1').innerHTML += i + '<br>';
     }
 } // fin de la boucle for


//VERSION MIKE

for (var nombre = 1; nombre <= 100; nombre++) {
    var message = '';//initialisation de la var message
    if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
        message +='Fizz';
        }
    if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
        message += 'Buzz';
        }
    if (message == ''){//et sinin on affiche le nombre
        message = nombre; // en mêle temps la variable va concaténer fizz+ buzzz si le nombre est un multiple de 3 et 5
        }
    console.log(message);
}//fin de for