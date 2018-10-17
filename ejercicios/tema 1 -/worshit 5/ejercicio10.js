function creaTables(ancho, alto, numfilas, numcolum) {
    var totalAcho = ancho * numcolum;
    contador=0;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"" + totalAcho + "\" >");
    for (i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\"" + alto + "\" >");
        for (y = 0; y < numcolum; y++) {
            if (contador % 2 == 0) {
                document.write("<td bgcolor=\"white\" width=\"50\" >&nbsp;</td>");
            } else {
                document.write("<td bgcolor=\"black\" width=\"50\" >&nbsp;</td>");
            };
            contador++;
        };
        document.write("</tr>");
        if (numcolum%2==0){contador++;};
    };
    document.write("</table>");
}
creaTables(50, 50, 8, 8);
creaTables(50, 50, 9, 9);