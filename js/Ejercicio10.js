/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)*/

let numeroRandom = parseInt(prompt('Ingrese el numero para ver si es divisible por 2, 3, 5 o 7'));

if(numeroRandom%2==0 || numeroRandom%3==0 || numeroRandom%5==0 || numeroRandom%7==0){
    document.write('Es divisible por 2, 3, 5 o 7');
}else{
    document.write('Elegir otro número');
}
