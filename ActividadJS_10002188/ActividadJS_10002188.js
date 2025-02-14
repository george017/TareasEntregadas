var dia = prompt("Ingrese día de su cumpleaños: ");
var mes = prompt("Ingrese mes de su cumpleaños (número): ");

// Comprobar el signo según mes y día
if (mes == 3) { // Marzo
    if (dia >= 21) {
        alert("Entonces es Aries");
    } else {
        alert("Entonces es Piscis");
    }
} else if (mes == 4) { // Abril
    if (dia >= 21) {
        alert("Entonces es Tauro");
    } else {
        alert("Entonces es Aries");
    }
} else if (mes == 5) { // Mayo
    if (dia >= 21) {
        alert("Entonces es Géminis");
    } else {
        alert("Entonces es Tauro");
    }
} else if (mes == 6) { // Junio
    if (dia >= 21) {
        alert("Entonces es Cáncer");
    } else {
        alert("Entonces es Géminis");
    }
} else if (mes == 7) { // Julio
    if (dia >= 23) {
        alert("Entonces es Leo");
    } else {
        alert("Entonces es Cáncer");
    }
} else if (mes == 8) { // Agosto
    if (dia >= 23) {
        alert("Entonces es Virgo");
    } else {
        alert("Entonces es Leo");
    }
} else if (mes == 9) { // Septiembre
    if (dia >= 23) {
        alert("Entonces es Libra");
    } else {
        alert("Entonces es Virgo");
    }
} else if (mes == 10) { // Octubre
    if (dia >= 24) {
        alert("Entonces es Escorpio");
    } else {
        alert("Entonces es Libra");
    }
} else if (mes == 11) { // Noviembre
    if (dia >= 23) {
        alert("Entonces es Sagitario");
    } else {
        alert("Entonces es Escorpio");
    }
} else if (mes == 12) { // Diciembre
    if (dia >= 22) {
        alert("Entonces es Capricornio");
    } else {
        alert("Entonces es Sagitario");
    }
} else if (mes == 1) { // Enero
    if (dia >= 21) {
        alert("Entonces es Acuario");
    } else {
        alert("Entonces es Capricornio");
    }
} else if (mes == 2) { // Febrero
    if (dia >= 20) {
        alert("Entonces es Piscis");
    } else {
        alert("Entonces es Acuario");
    }
} else {
    alert("Mes no reconocido. Por favor ingresa un mes válido.");
}