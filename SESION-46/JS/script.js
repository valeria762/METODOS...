/*let numeros =  [1,2,3,4,5,6,7,8,9,10];
let cuadrados = numeros.map(x => x*x);
console.log(cuadrados);
*/

/*let numeros = [30,31,32,34,35,36,37,38,39,40];
let cuadrados = numeros.map(n => n*3);
console.log(cuadrados);
*/
/*
let numeros = [1,2,3,4,5];
//let reducido = numeros.reduce(function(a,b){return a+b});
let reducido = numeros.reduce((acumulador, valorActual) => {return acumulador + valorActual},0);
console.log(reducido); */

/*let numeros = [4,2,10,1,3,5,400];
numeros.sort(function(a,b){return a-b});
console.log(numeros);*/

/*let numeros = [1,2,3];
numeros.reverse();
console.log(numeros);*/

/*let numeros = [5,6,7,8,9,10,11,12,13,14,15];
numeros.reverse();
console.log(numeros);*/

/*let cadena ="Hola a todas, como estan";
let diviciones = cadena.split(" ",3);
console.log(diviciones);*/

/*let cadena = "Las chicas estan cantando";
let diviciones = cadena.split(" ");
console.log(diviciones);*/

/*let estaciones = ["Verano","Primavera","Otoño","Invierno"];
let frase1 = estaciones.join();
console.log(frase1);
let frase2 = estaciones.join(" ");
console.log(frase2)
let frase3 = estaciones.join("+");
console.log(frase3);*/

let cadena = "Hoy es un buen dia";
let lista1 = cadena.split(" ");
console.log(lista1);
lista1.reverse();
console.log(lista1);
let frase = lista1.join(" ");
console.log(frase);