/*9.
Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón)
*/
function creaTables(ancho, alto, numfilas, numcolum) {
    var totalAcho = ancho * numcolum;
    contador=0;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"" + totalAcho + "\" >");
    for (i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\"" + alto + "\" >");
        for (y = 0; y < numcolum; y++) {
            if (contador % 2 == 0) {
                document.write("<td bgcolor=\"white\" width=\"50\" id=\""+contador+"\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\" >&nbsp;</td>");
            } else {
                document.write("<td bgcolor=\"black\" width=\"50\" id=\""+contador+"\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">&nbsp;</td>");
            };
            contador++;
        };
        document.write("</tr>");
        if (numcolum%2==0){contador++;};
    };
    document.write("</table>");
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
creaTables(50, 50, 8, 8);
