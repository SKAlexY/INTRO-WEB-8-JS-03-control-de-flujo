console.log("hola generation");

/*flujo de control

Cuando hablamos de flujo de control hablamos del orden natorual en el que se ejecutan las instrucciones de nuestro programa (arriba abajo izq der). Estas instrucciones pueden ser una funcion, un console.log, un ciclo, etc.

la importancia que tiene el control de flujo radica en la posibilidad de poder ekecutar cosas o instrucciones dependiendo de una condicional (un elemento o instruccion detonante).


Condicionales

Las condicionales son palabras reservadas que nos permite evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o flase.

Tengo la camisa limpia?
  si: voy a la fiesta
  no: me quedo en casa


Tengo esta variable?
  si: ejecuta la linea 57 de mi codigo 
  no: ejecuta la linea 89 de mi codigo
  


condicional if (si)

if nos sirve para validar si una condicion se cumple o no. si se cumple, entonces ejecutamos el blouqe de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada
nota: Es la condicional mas sencilla, pero la mas limitante por que sono nos da una opcion 

if (condicion) {
    //bloque de codigo que se ejecuta si la condicion es verdadesa (se cumple)
}
*/

//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limplia para poder ir 

if (camisaLimpia = false){ //siempre tiene que ser true para que se ejecute el codigo 
    console.log("felipe va a la fiesta");
}

/*
else (de otro modo, de lo contrario, si no)

if (condicion detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
} else {
    //bloque de codigo que se ejecuta si la condiciones falsa 
}
 */

if (camisaLimpia = false){
    console.log("Felipe va a la fiesta"); //true
} else {
    console.log("Felipe se queda en su casa a hacer la lloracion"); //false 
}

/*
else if

Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. Para lograr esto, vamos a unir el else con el if 


if (condicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if (condicion detonante 2){
    //loque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
} else{
    //bloque de codigo si las dos condiciones son falsas 
}


//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles verdes

if (hambre=true){
    console.log("felipe va a comer")
} else if (chilaquiles=verdes){
    console.log("felipe come chilaquiles")
} else {
    console.log("felipe no come y se pone triste")
}
*/

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:00 hrs y debera imprimir "vmaos a comer". El tercer mensaje se muestra si no se cumple nada de lo contrario debera imprimir "lo siento mi ciela, seguimos programando."

//Prompt es una forma de ingresar datos y poder hacer uso de ellos 

//alert ("Hola Generation");

let hora = prompt ("hola, dime un numero");

//let hora = 17; antes del prompt

if(hora == 13){
    console.log("vamos a descanso");
} else if (hora == 14){
    console.log("vamos a comer");
} else {
    console.log("Lo siento mi ciela, seguimos programando");
}  

/*
Switch (cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la operacion deseada (estado de la variable)

Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida general.


expresion con un valor 

switch(expresion){
    case 1:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1 break;

    case 2:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2 break;
    
    case 3:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3 break;

    default:
        //bloque de codigo que se ejecuta si ninguna opcion oincide
}

*/


//Elevador con else if
let piso = 5;

if(piso==1){
    console.log("Llegamos al piso 1");
}else if(piso==2){
    console.log("Legamos al piso 2");
}else if(piso==3){
    console.log("Legamos al piso 3");
}else if(piso==4){
    console.log("Legamos al piso 4");
}else if(piso==5){
    console.log("Legamos al piso 5");//piso de destino
} else {
    console.log("Piso no encontrado");
} 

//Elevador con switch
let pisoSwitch = prompt ("A que piso vas?");
console.log(typeof(pisoSwitchOriginal));2
pisoSwitch = parseInt(pisoSwitchOriginal);

switch(pisoSwitch){
    case 1:
        console.log("Llegaste al piso 1");
        break;
    case 2:
        console.log("Llegaste al piso 2");
        break;   
    case 3:
        console.log("Llegaste al piso 3");
        break;
    default:
        console.log("Opcion no valida");
}

//Funciones aplicables a un consultorio dental 

//Funcion calcular costo de una consulta (condicionales)

//Variables para mis datos 
let tiempoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;

function calcularCostoConsulta (tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){

    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - prmocion;

    //condicional para saber si agregar otra promocion por se cliente frecuente

    if (clienteFrecuente == true){
        costoTotal * promocionClienteFrecuente;
    }
}



//Un ejemplo mas sencillo 

function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;

    if(clienteFrecuente){
        cosotTotalConDescuento = costoTotal*.10;
    }

    return costoTotalConDescuento;
}

console.log(calcularCostoConsultaDos(45, 15, ture));

console.log("El costo total de la consulta que duro " + duracionMinutos + " con un costo por minuto de " + costoPorMinuto + " es de: " + costoTotalConDescuento);

