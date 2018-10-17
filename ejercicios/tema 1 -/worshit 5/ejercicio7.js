function juegoAdivinaNumero() {
    var numero1 = parseInt(prompt("Jugador 1 pasa un numero"));
    var numero2 = parseInt(prompt("Jugador 2 pasa un numero"));
    if (numero1 != numero2) {
        do {
            if (numero1 > numero2) {
                numero2 = parseInt(prompt("numero mas ALTO"));
            } else {
                numero2 = parseInt(prompt("numero mas VAJO"));
            }
        } while (numero1 != numero2);
    }
    alert(" despues de tu arduo trabajo consegiste acertar !!!!!");
}
juegoAdivinaNumero();
