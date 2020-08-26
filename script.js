
//ES5
var nombre5="Maria Perez"; /*variable que me permite cambiar el valor*/
nombre5="Maria Sanchez";
console.log (nombre5);
//ES6
let nombre6="Laura Martinez";/*let puede ser modificado*/
nombrelet="Laura Perez";
console.log (nombrelet);

//const nombre6="Pedro Sanchez"; /*no puede ser modificado, da error en el navegador*/
//nombre6="Pedro Garcia";
//console.log (nombre6);

/*Alcance Global - Alcance Local*/
/* GLOBAL - se puede modificar en cualquier seccion del codigo
hasta afuera del bloque de codigo*/
var global=0;
function varGlobal(){
    for (var i = 0; i<5; i++) {
        global=i;/*en cada vuelta el valor de la variable i se le va asignar a la global*/
    }
}
varGlobal();
console.log (global); /*imprime 4*/

/*LOCAL*/

function varLocal(){
    var local="Hola mundo!!!" /*esto es una variable local*/
}

/*
varLocal();
console.log (local)
esto dara error ya que es una variable local 
que se llama desde afuera
*/


function varPrueba(){
    var x=70; // se le va valor de 70
    if (true) { // siempre se cumple la funcion por el true
        var x= 50; // se redeclara a 50
        console.log(x);//aqui aparece 50
    }
    console.log(x); // 50
}

function letPrueba() {
    let y=30;
    if (false) {
        let y= (30*2);/* variable diferente, 
        solo se queda en sus llaves*/
        console.log("La multiplicacion dio:" + y) // me imprime 60
    }
    console.log("El valor inicial es : " + y) // me imprime 30
}




/*function*/
function soyUnaFuncion(num1, num2){
    //retorna un valor o resultado del proceso
    //finaliza la ejecucion del function
    return num1+num2;
}

console.log(soyUnaFuncion(5,3)); // arroja la estructura de la funcion

/*funcion anonima*/

//funciones que se utilizan directamente sin nombre
//coo la funcion flecha
let sumar=(a,b)=> a+b;
console.log(sumar(10,15));

//tambien funciones tradicionales pueden ser anonimas como por ejemplo
let hola= function () {
    return "Hola como estas?"
} 

console.log (hola());

/*Condicionales*/

let color= prompt("Ingrese un color en ingles");

if (color == "red"){
    document.write("<h1 style='color red'> si el color es red-rojo</h1>")
}else{
    document.write("<h1 style=' color: " + color + " '> No, el color no es Red, el color escogido fue " + color + "</h1>")
} 
// en el else se utilizan coillas simples y dobles para poder coloar el style de css y tener el color del texto


/*Operadores de comparacion*/

/*=es asignacion (esto es ____)
== es igual, igualdad
===estrictamente igual (mismo tipo de dato)

!= diferente o distinto
!== no identico (hasta el tipo de dato debe ser diferente)

< menor que
<= menor o igual que
> mayor que
>= mayor o igual que 
*/

let year=2021;
if (year!=2020) { //es diferente a 2020
document.write ("El año es diferente a 2020")
} else {
    //si es igual
    document.write("Si es el año 2020")
}

/*Operadores logicos
&& AND -- Y
|| OR -- O
! NOT -- negacion que no se cumpla algo*/

let nota=3.7

if (nota >=4.5 && nota <=5) {//creamos el rango de nota entre 4.5 y 5
document.write ("<br>Felicidades has ganado la beca!!!")
}else if(nota < 4.5 && nota >=0){  //es un si (if) anidado, se crea u rango entre 4.499999 y 0
document.write ("<br>Vuelve a intentarlo")
}else{
    document.write("Ingrese un numero entre 0 y 5")
}

/* OR- al enos una condicion se cumple para ejecutar el bloque de codigo*/

let pais= "peru";

if (pais== "colombia" || pais=="peru" || pais=="mexico"){
    document.write("<br> El pais pertenece a America latina")
}else{
    document.write("<br> A donde pertenece ese pais?")
}
 

//calculadora

let operacion= prompt("Escoja una operacion: suma, resta, multiplicacion, division")// la variable que se evalua
let num1=parseFloat(prompt("Ingrese un numero"))
let num2=parseFloat(prompt("Ingrese el segundo numero"))
//parseFloat -parseIn: metodo que me permite modificar la tipologia de un dato
//convirtiendolos a enteros o decimales
switch (operacion) {
    case "suma":
    document.write ("<br> El resultado de la suma es: " + (num1+num2));
    break;// se rompe la ejecucion del bloque de codigo y no sigue evaluando mas casos

    case "resta":
    document.write ("<br> El resultado de la resta es: " + (num1-num2))
    break;

    case "multiplicacion":
        document.write ("<br> El resultado de la multiplicacion es: " + (num1*num2))
    break;

    case "division":
        document.write ("<br> El resultado de la division es: " + (num1/num2))
    break;
    default: // si ninguno de los casos se cumple
        document.write ("<br>Esta operacion no existe")
        break;
}
