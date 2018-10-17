function creaTables(ancho,alto,numfilas,numcolum) {
    var totalAcho=ancho*numcolum;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\""+totalAcho+"\" >");
    for( i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\""+alto+"\" >");
        for (y = 0; y < numcolum; y++){
            document.write("<td bgcolor=\"white\" width=\""+alto+"\" >&nbsp;</td>");
        };
        document.write("</tr>");
    };
    document.write("</table>");
}
creaTables(50,50,4,4);