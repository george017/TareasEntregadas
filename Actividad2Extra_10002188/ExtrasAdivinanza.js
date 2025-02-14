function jugarAdivinanza() {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;  // Generar un número aleatorio entre 1 y 9
    let intentos = 0;

    while (true) {
        const numero = parseInt(prompt("Ingrese el numero [1-9]: "), 10);

        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }

        if (numero < 1 || numero > 9) {
            alert("El número debe estar en el rango de 1 a 9.");
            continue;
        }

        intentos++;

        if (numero < numeroAleatorio) {
            alert("El número es más grande.");
        } else if (numero > numeroAleatorio) {
            alert("El número es más pequeño.");
        } else {
            alert(`¡Felicidades! Has adivinado el número en ${intentos} intentos.`);
            break;
        }
    }
}

// Llamar a la función para empezar el juego
jugarAdivinanza();
