function tablaMultiplicar() {
    var resultado =0;
    for (i = 1; i <= 10; i++) {
        document.write("Tabla de multiplicar del " + i + "</br>");
        for (y = 0; y <= 9; y++) {
            resultado = (i * y);
            document.write("" + y + " x " + i + " = " + resultado + "</br>");
        };
    };
}
tablaMultiplicar();