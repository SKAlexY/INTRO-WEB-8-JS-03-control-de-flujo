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
        costoTotalConDescuento = costoTotal*.9;
    }

    return costoTotalConDescuento;
}

console.log(calcularCostoConsultaDos(45, 15, true));

/*console.log("El costo total de la consulta que duro " + duracionMinutos + " con un costo por minuto de " + costoPorMinuto + " es de: " + costoTotalConDescuento);*/



function registrarPaciente(){

}

function guardarPaciente(){

}

if (pacienteRegistrado = true){
    console.log("Paciente con registro previo")
} else {
    function guardarPaciente(){

    }
}

let usuarioPago = false; // Cambia esto a false si el usuario no ha pagado.

if (usuarioPago) {
    console.log("El usuario ha pagado.");
} else {
    console.log("El usuario no ha pagado.");
}