// Js pour la page exercice des triangle 17 

console.log('Le triangle avec une boucle for');

let hashtag = '';

console.log(typeof hashtag, hashtag);

for (let i = 1; i < 11; i++) {
    hashtag += '#'
    console.log(hashtag)
}

// Correction Baroude 
for(i=0; i <=7; i++){
    console.log("#".repeat(i)); //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
}

// AVEC WHILE
console.log('Le triangle avec une boucle while')
let hashtag2 = '';
let w1 = 1;

// while(w1 <= 10) {
//     hashtag2 += '#';
//     console.log(hashtag2);
//     w1++;
// }

while(w1 <= 10) {
    // hashtag2 += '#';
    hashtag2 = hashtag2 + '#+';
    console.log(hashtag2);
    w1++;
}






