/*DECLARACIÓN E INICIALIZACIÓN DE VARIABLES Y DOM */
let pantalla = document.getElementById('pantalla')
let numeroActual = ''
let numeroAnterior = ''
let operacion = null

/*FUNCION PARA AGREGAR NUMEROS EN LA PANTALLA CUANDO SE HACE CLICK EN LOS BOTONES*/
function agregarNumero(numero) {
    numeroActual += numero;
    pantalla.value = numeroActual;
}

/*FUNCION PARA CUANDO SE HACE CLICK EN LOS BOTONES DE OPERACIÓN */
function establecerOperacion(op) {
    if (numeroActual === '') return;
    if (numeroAnterior !== '') {
        calcular();
    }
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = '';
}

/*FUNCION QUE REALIZA LAS OPERACIONES DE LOS NÚMEROS ANTERIOR Y ACTUAL CUANDO APRETAMOS EL 
BOTON DE '=', DEPENDIENDO EL SWITCH CASE CON LA VARIABLE OPERACIÓN EN DONDE SE GUARDA 
LA OP QUE APRETAMOS, CUANDO TERMINA LA OPERCIÓN VUELVE A REASIGNAR EL NÚMERO ANTERIOR Y NUMERO 
ACTUAL PARA ASÍ VOLVER A HACER INFINIDAD DE OPERACINES, MUESTRA EN LA PANTALLA EL RESULTADO*/
function calcular() {
    if (numeroActual === '' || numeroAnterior === '') return;
    let resultado;
    const anterior = parseFloat(numeroAnterior); //CONVIERTE LOS STRING A FLOATS
    const actual = parseFloat(numeroActual); //CONVIERTE LOS STRINGS A FLOATS
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            return;
    }
    numeroActual = resultado;
    operacion = null;
    numeroAnterior = '';
    pantalla.value = numeroActual;
}

/* REASIGNA LOS VALORES DE NÚMERO ANTERIOR, NÚMERO ACTUAL Y OPERACIÓN, PARA ASÍ VOLVER A 
ESCOGER LOS VALORES A OPERAR JUNTO CON LA OPERACIÓN A REALIZAR*/
function limpiarPantalla() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    pantalla.value = '';
}
