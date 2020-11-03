// JS SWITCH 

let x = 8;
switch(x) {//On va switcher sur la variable
    case 2: //Un des "cas" possible ou une des "issues"
        document.getElementById('p1').innerHTML = 'x stoke la valeur 2';
        break;// le break à ne pas oubler/ il sort du switch si le cas est vrai
    case 5:
        document.getElementById('p1').innerHTML = 'x stoke la valeur 5';
        break;// le break à ne pas oubler/ il sort du switch si le cas est vrai
    case 10:
        document.getElementById('p1').innerHTML = 'x stoke la valeur 10';
        break;// le break à ne pas oubler/ il sort du switch si le cas est vrai
    case 15:
        document.getElementById('p1').innerHTML = 'x stoke la valeur 15';
        break;// le break à ne pas oubler/ il sort du switch si le cas est vrai
    case 20:
        document.getElementById('p1').innerHTML = 'x stoke la valeur 20';
        break;// le break à ne pas oubler/ il sort du switch si le cas est vrai
    default:
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20';

}