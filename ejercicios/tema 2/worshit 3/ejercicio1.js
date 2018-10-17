/*1. 
Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrar á á
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenida á
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i. é ú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto en ó ú
min scula.
*/
function invierteCadena(cad_arg){
    let letras = cad_arg.slpit("");
    let resultado = "";
    for (i in cad_arg){
        resultado+=i;
    }
    return (resultado);
}
function inviertePalabras(cad_arg){
    let letra = cad_arg.slpit(" ");
    let resultado = "";
    for (i in cad_arg){
        resultado+=i;
    }
    return (resultado);
}
function encuentraPalabraMasLarga(cad_arg){
    let letra = cad_arg(" ");
    let resultado = "";
    for (i in cad_arg){
        if (i.lenght > resultado.length){
            resultado = i;
        }
    }
    return resultado;
}
function filtraPalabrasMasLargas(cad_arg,x){
    let letra = cad_arg(" ");
    let resultado = [];
    for (i in cad_arg){
        if (i.lenght > x){
            resultado.push(i);
        }
    }
    return resultado;
}
function cadenaBienFormada(cad_arg){
    let letra = cad_arg.slpit(" ");
    let resultado = "";
    let cont = 0;
    for (i in cad_arg){
        if (cont!=0){
            resultado=+i.toUpperCase();
        }else{
            resultado+=i.toLowerCase();}
    }
    return (resultado);
}

