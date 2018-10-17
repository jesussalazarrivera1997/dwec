/*5. 
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function paresImpares() {
    let lista = [[], []];
    for (i = 0; i < 100; i++) {
        numero = x => { Math.floor(Math.random() * 1000 + 1) }
        if (numero % 2 == 0) {
            lista[0].push(numero);
        } else {
            lista[1].push(numero);
        }
    }
    return lista;
};