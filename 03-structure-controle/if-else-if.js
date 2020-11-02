// JS pour if... else if ... else 

let x = 0.5;
if (x > 1) {
    alert('x contient une valeur strictement supérieure à 1');
} else if (x == 1 ) {
    alert ('x contient la valeur de 1');
} else {
    alert ('x contient une valeur strictement inférieur à 1');
}

x = -10;

if (x > 1 ) {
    alert('x contient une valeur strictement supérieure à 1')

} else if ( x == 1) {
    alert('x contient la valeur 1')
} else if (x < 1) {
    alert('x continient une valeur strictement inférieure à 1');
} else if (x < 0) {
    alert('x continient une valeur strictement inférieure à 0');
} else if (x < -2) {
    alert('x continient une valeur strictement inférieure à -2');
} else {
    alert('La valeur de x n\'a pas pu être comparé à un nombre');
}