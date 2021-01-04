// JS pour la page "comme twitter" 

let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let afficheTotal = document.querySelector('#compteur');
console.log(afficheTotal);

//la fonction va calculer la longueur de la chaîne de caractères contenue dans le text-area
function compte() {
    let compte = 140 - textarea.value.length;
    afficheTotal.innerHTML = 'Il reste ' + compte + ' caractères';
    if (compte < 0) {
        afficheTotal.classList.remove("bg-warning");
        afficheTotal.classList.add("bg-danger", "text-white");
        afficheTotal.classList.toggle('bg-danger', "text-white")
        // afficheTotal.textContent = 'Trop de caractères ! Retirez ' + compte;
        let nbrPositif = Math.abs(compte);        
        afficheTotal.textContent = 'Trop de caractères ! Retirez ' + nbrPositif;
    } else if (compte >= 0 ) {
        afficheTotal.classList.remove('bg-danger');
        afficheTotal.classList.add('bg-warning');
    }
}//fin function

// on pose un écouteur d'évènement avec keyup sur le textarea
textarea.addEventListener('keyup', compte);

// on appel la fonction
compte();