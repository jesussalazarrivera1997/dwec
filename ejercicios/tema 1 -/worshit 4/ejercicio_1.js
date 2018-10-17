/*1. What number's bigger?
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
 */
function masGrande(numero1,numero2){
    if (numero1==NaN,numero2==NaN){
       return  document.write("uno no es un nomero");
    } else {
        if (numero1>numero2){
           return  document.write("el numero "+numero1+" es el mas grande ");
        }else if (numero2>numero1){
           return  document.write("el numero "+numero2+" es el mas grande ");
        }else {
            return document.write("ambos son iguales");
        }

    };
};