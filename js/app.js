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
    while (opcion !== '3') {
        alert('Bienvenido al calculador de promedios. \nUsted puede calcular la nota trimestral o la nota anual de su alumno.');
        opcion = prompt('Presioná 1 para calcular la nota trimestral, 2 para calcular la nota anual, o 3 para salir del programa.');
        if (opcion === '1') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let notaExamen;
            do {
                notaExamen = parseFloat(prompt('Ingrese la nota del examen:'));
            } while (isNaN(notaExamen) || notaExamen < 1 || notaExamen > 10);
            alert("Nota cargada.");
            let notaTrabajoPractico;
            do {
                notaTrabajoPractico = parseFloat(prompt('Ingrese la nota del trabajo práctico:'));
            } while (isNaN(notaTrabajoPractico) || notaTrabajoPractico < 1 || notaTrabajoPractico > 10);
            alert("Nota cargada.");
            let notaTrabajoEnClase;
            do {
                notaTrabajoEnClase = parseFloat(prompt('Ingrese la nota del trabajo en clase:'));
            } while (isNaN(notaTrabajoEnClase) || notaTrabajoEnClase < 1 || notaTrabajoEnClase > 10);
            alert("Nota cargada.");
            let resultado = calcularPromedios(nombre, notaExamen, notaTrabajoPractico, notaTrabajoEnClase);
            alert(`El promedio del trimestre de ${nombre} es de ${redondearDecimal(resultado)}`);
            console.log(`El promedio del trimestre de ${nombre} es de ${redondearDecimal(resultado)}`);
            break;
        } else if (opcion === '2') {
            let nombre = prompt('Ingrese el nombre completo del alumno:');
            let primerTrimestre;
            do {
                primerTrimestre = parseInt(prompt('Ingrese la nota del primer trimestre:'));
            } while (isNaN(primerTrimestre) || primerTrimestre < 1 || primerTrimestre > 10);
            alert('Nota cargada.');
            let segundoTrimestre;
            do {
                segundoTrimestre = parseInt(prompt('Ingrese la nota del segundo trimestre:'));
            } while (isNaN(segundoTrimestre) || segundoTrimestre < 1 || segundoTrimestre > 10);
            alert('Nota cargada.');
            let ultimoTrimestre;
            do {
                ultimoTrimestre = parseInt(prompt('Ingrese la nota del último trimestre:'));
            } while (isNaN(ultimoTrimestre) || ultimoTrimestre < 1 || ultimoTrimestre > 10);
            alert('Nota cargada.');
            let resultado = calcularTrimestres(nombre, primerTrimestre, segundoTrimestre, ultimoTrimestre);
            alert(`El promedio anual de ${nombre} es de ${redondearDecimal(resultado)}`);
            console.log(`El promedio anual de ${nombre} es de ${redondearDecimal(resultado)}`);
            break;
        } else if (opcion === '3') {
            alert('Gracias por usar el calculador de promedios, hasta luego.');
        } else {
            alert('Opción inválida, por favor presioná 1, 2 o 3.');
        }
    }
}

calcular();