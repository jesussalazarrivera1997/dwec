function juegoAdivinaNumero() {
    var numero1 = parseInt(prompt("jugador 1 dame el numero a adivinar"));
    var numero2 = parseInt(prompt("intenta adivinar el numero anterior"));
    while (numero1 != numero2) {
        if (numero1>numero2) {
            numero2 = parseInt(prompt("numero mas ALTO"));
        } else {
            numero2 = parseInt(prompt("numero mas VAJO"));
        }
    };
    alert(" despues de tu arduo trabajo consegiste acertar !!!!!");
}
juegoAdivinaNumero();
