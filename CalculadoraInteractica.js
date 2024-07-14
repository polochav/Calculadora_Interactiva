let pantalla = document.getElementById('pantalla');
let numeroActual = '';
let numeroAnterior = '';
let operacion = null;

function agregarNumero(numero) {
    numeroActual += numero;
    pantalla.value = numeroActual;
}

function establecerOperacion(op) {
    if (numeroActual === '') return;
    if (numeroAnterior !== '') {
        calcular();
    }
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = '';
}

function calcular() {
    if (numeroActual === '' || numeroAnterior === '') return;
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);
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

function limpiarPantalla() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    pantalla.value = '';
}
