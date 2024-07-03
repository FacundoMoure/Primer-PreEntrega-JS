function calcularPromedios(nombre, notaExamen, notaTrabajoPractico, notaTrabajoEnClase) {
    return (notaExamen + notaTrabajoPractico + notaTrabajoEnClase) / 3;
}

function calcularTrimestres(nombre, primerTrimestre, segundoTrimestre, ultimoTrimestre) {
    return (primerTrimestre + segundoTrimestre + ultimoTrimestre) / 3;
}

function redondearDecimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcular() {
    let opcion = null;
    do {
        opcion = prompt('Bienvenido al calculador de promedios. \nUsted puede calcular la Nota Trimestral o la Nota Anual de su alumno. \nPresione: \n1) Para calcular la Nota Trimestral. \n2) Para calcular la Nota Anual. \n3) Para Salir.');
        if (opcion === '1') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let notaExamen;
            do {
                notaExamen = parseFloat(prompt('Ingrese la Nota del Examen (del 1 al 10):'));
            } while (isNaN(notaExamen) || notaExamen < 1 || notaExamen > 10);
            alert("Nota cargada.");
            let notaTrabajoPractico;
            do {
                notaTrabajoPractico = parseFloat(prompt('Ingrese la nota del Trabajo Práctico (del 1 al 10):'));
            } while (isNaN(notaTrabajoPractico) || notaTrabajoPractico < 1 || notaTrabajoPractico > 10);
            alert("Nota cargada.");
            let notaTrabajoEnClase;
            do {
                notaTrabajoEnClase = parseFloat(prompt('Ingrese la nota del Trabajo en Clase (del 1 al 10):'));
            } while (isNaN(notaTrabajoEnClase) || notaTrabajoEnClase < 1 || notaTrabajoEnClase > 10);
            alert("Nota cargada.");
            let resultado = calcularPromedios(nombre, notaExamen, notaTrabajoPractico, notaTrabajoEnClase);
            alert(`La Nota Trimestral de ${nombre} es ${redondearDecimal(resultado)}`);
            console.log(`La Nota Trimestral de ${nombre} es ${redondearDecimal(resultado)}`);
        } else if (opcion === '2') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let primerTrimestre;
            do {
                primerTrimestre = parseInt(prompt('Ingrese la nota del Primer Trimestre (del 1 al 10):'));
            } while (isNaN(primerTrimestre) || primerTrimestre < 1 || primerTrimestre > 10);
            alert('Nota cargada.');
            let segundoTrimestre;
            do {
                segundoTrimestre = parseInt(prompt('Ingrese la nota del Segundo Trimestre (del 1 al 10):'));
            } while (isNaN(segundoTrimestre) || segundoTrimestre < 1 || segundoTrimestre > 10);
            alert('Nota cargada.');
            let ultimoTrimestre;
            do {
                ultimoTrimestre = parseInt(prompt('Ingrese la nota del Último Trimestre (del 1 al 10):'));
            } while (isNaN(ultimoTrimestre) || ultimoTrimestre < 1 || ultimoTrimestre > 10);
            alert('Nota cargada.');
            let resultado = calcularTrimestres(nombre, primerTrimestre, segundoTrimestre, ultimoTrimestre);
            alert(`La Nota Anual de ${nombre} es ${redondearDecimal(resultado)}`);
            console.log(`La Nota Anual de ${nombre} es ${redondearDecimal(resultado)}`);
        } else if (opcion === '3') {
            alert('Gracias por usar el calculador de promedios, hasta luego.');
            break;
        } else {
            alert('Opción inválida, por favor presioná 1, 2 o 3.');
        } opcion = prompt('¿Desea calcular las notas de otro alumno? \nPresione: \n1) Para Continuar. \n3) Para Salir.');
    } while (opcion === '1');
}

calcular();