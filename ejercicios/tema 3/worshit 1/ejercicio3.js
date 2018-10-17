/*2. 
Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. 
3. 
Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.

*/
function lanzamiento() {
    return Math.floor(Math.random() * 6 + 1)
};
function tiradas6000() {
    tiradas = [0, 0, 0, 0, 0, 0];
    let tir = 0
    for (i = 0; i < 6000; i++) {
        tir = lanzamiento()
        switch (tir) {
            case "1":
                tir[0]++;
                break;
            case "2":
                tir[1]++;
                break;
            case "3":
                tir[2]++;
                break;
            case "4":
                tir[3]++;
                break;
            case "5":
                tir[4]++;
                break;
            case "6":
                tir[5]++;
                break;
        }
    }
    return tiradas;
}