function calcularPromedios(nombre, notaExamen, notaTrabajoPráctico, notaTrabajoEnClase) {
    return (notaExamen + notaTrabajoPráctico + notaTrabajoEnClase) / 3;
}

function calcularTrimestres(nombre, primerTrimestre, segundoTrimestre, tercerTrimestre) {
    return (primerTrimestre + segundoTrimestre + tercerTrimestre) / 3;
}

function redondearDecimal(número) {
    return número.toLocaleString('es-AR', { minimumFractionDigits: 2 , maximumFractionDigits: 2 });
}

function calcular() {
    let opción = null;

    while (opción !== '3') {
        alert('Bienvenido al calculador de promedios. \nUsted puede calcular la nota trimestral o la nota anual de su alumno.');

        opción = prompt('Presioná 1 para calcular la nota trimestral, 2 para calcular la nota anual, o 3 para salir del programa.');

        if (opción === '1') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let notaExamen = parseInt(prompt('Ingrese la nota del examen:'));
            let notaTrabajoPráctico = parseInt(prompt('Ingrese la nota del trabajo práctico:'));
            let notaTrabajoEnClase = parseInt(prompt('Ingrese la nota del trabajo en clase:'));
            let resultado = calcularPromedios(nombre, notaExamen, notaTrabajoPráctico, notaTrabajoEnClase);
            alert(`El promedio del trimestre de ${nombre} es de ${redondearDecimal(resultado)}`);
            console.log(`El promedio del trimestre de ${nombre} es de ${redondearDecimal(resultado)}`);
            break;
        } else if (opción === '2') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let primerTrimestre = parseFloat(prompt('Ingrese la nota del primer trimestre:'));
            let segundoTrimestre = parseFloat(prompt('Ingrese la nota del segundo trimestre:'));
            let tercerTrimestre = parseFloat(prompt('Ingrese la nota del tercer trimestre:'));
            let resultado = calcularTrimestres(nombre, primerTrimestre, segundoTrimestre, tercerTrimestre);
            alert(`El promedio anual de ${nombre} es de ${redondearDecimal(resultado)}`);
            console.log(`El promedio anual de ${nombre} es de ${redondearDecimal(resultado)}`);
            break;
        } else if (opción === '3') {
            alert('Gracias por usar el calculador de promedios, hasta luego.');
        } else {
            alert('Opción inválida, por favor presioná 1, 2 o 3.');
        }
    }
}

calcular();