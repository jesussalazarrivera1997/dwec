/*ejercicio 1 usar un bucle for para mostrar las caveceras 
desde la h1 hasta la h6
 */
function caveceras() {
    for (var i = 1; i < 7; i++) {
        document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">")
    }
}
caveceras();