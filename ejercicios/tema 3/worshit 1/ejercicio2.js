/*1. 
Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/
function maximoDeLosTodos(...arg) {
    let mayor = 0;
    for (num in arg) {
        num = parseInt(num);
        if (num > mayor) {
            mayor = num;
        };
    };
    return mayor
};
function pedirMasimo(x) {
    var argumentos = [];
    for (i = 0; i < x; i++) {
        argumentos.push(prompt("dame un numero"))
    }
    return maximoDeLosTodos(argumentos)
}
//pedirMasimo(4)