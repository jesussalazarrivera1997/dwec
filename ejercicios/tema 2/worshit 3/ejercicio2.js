/*2. Definir una funci n que muestre informaci n sobre una cadena de texto que se ó ó
le pasa como argumento. A partir de la cadena que se le pasa, la funci n ó
determina si esa cadena est formada s lo por may sculas, s lo por min sculas o á ó ú ó ú
por una mezcla de ambas.
*/
var minusculas= ("qwertyuiopasdfghjklñzxcvbnm");
var mayuscilas=("QWERTYUIOPASDFGHJKLÑZXCVBNM");


function esMayuscula(letra){
    return letra === letra.toUpperCase();
}

function esMinuscula(letra){
    return letra === letra.toLowerCase();
}  

function mayusMinusAmbas(cad_arg){
    contMa=0;
    contMi=0;
    for (i in cad_arg){
        if (esMayuscula(i)){
            contMa=1;
        }else if (esMinuscula(i)){
            contMi=1;
        }
        if (conMi==1&& contMa==1){
            return "hay mayusculas i minusculas";
        }
    }
    if (contMa=1){
        return "son todas mayusculas";
    };
    if  (contMi=2){
        return "son todas minusculas";
    };
}