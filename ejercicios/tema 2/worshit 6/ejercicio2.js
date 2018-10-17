/*2. 
Crea una p gina que contenga varios enlaces, im genes y anclas de ejemplo á á
y a ade una serie de enlaces que realicen lo siguiente: ñ
c) Muestra el n mero de imagenes del documento ú
d) Muestra el id de la primera imagen
e) Muestra el n mero de enlaces del documento ú
f) Cambia el t tulo del documento
*/
function numeroDeImagenes() {
    let list = document.getElementsByTagName("img");
    let contador = 0;
    for (i in list) {
        contador++;
    }
    return contador;
}
function cambioId() {
    let list = document.getElementsByTagName("img");
    return list[0].id;
};
function numeroDeEnlaces() {
    let list = document.getElementsByTagName("a");
    let contador = 0;
    for (i in list) {
        contador++;
    }
    return contador;
};
function cambioTitle() {
    let list = document.getElementsByTagName("  title");
    list[0][0].innerHTML = "titulo variado de el mismo sobre si miso ";
};
