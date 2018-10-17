/*7. 
Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/
function factorial(x) {
    numero = 1
    while (x > 0) {
        numero = numero * x
        x--
    }
    return numero
}
function mostrarFactorialDe10() {
    document.write("<table>")
    for (i = 1; i < 11; i++) {
        document.write("<tr>" + i + " = " + factorial(i) + "</tr>")
    }
    document.write("</table>")
}   