/*
1. Crea una página web con al menos tres párrafos de texto y dentro de ellos un número
indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
uso del DOM muestra los siguientes datos:
• Número de enlaces de la página
• Dirección a la que enlaza el penúltimo enlace
• Numero de enlaces que enlazan a google
• Número de enlaces del tercer párrafo 
*/

function numeroDeEnlaces(){
    let numero = document.getElementsByTagName('a');
    numen= numero.length //numero de enlaces de la pagina


    numepenul= numero[numen-1] //direccion del penultimo enlace 

    let contEnlaces=0
    for (i=0;i<numero.length;i++){

    }


    let t3parrafo = document.getElementsByTagName('p'); 
    let numerodeenlaces = t3parrafo[2].getElementsByTagName('a');
    numerodeenlaces= numerodeenlaces.length; // numero de enlaces en el tercer parrafo 
}


/*
4. Crea una web con una lista de elementos y un botón que cada vez que pulsemos
introduzca una entrada nueva en la lista.
*/
function introducirEnlaces(){
    function introdu(){
        document.getElementById("lista").innerHTML="<p>uno mas </p>"
    }
    document.getElementById("boton_annadidor").addEventListener("click",introdu())
}



/*
5. Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de
DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto
inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones
automáticamente aparezca otro input para elegir fichero.
*/



/*
6. Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se
mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”. Impleméntala la
funcionalidad para poder navegar entre un conjunto de imágenes que tendrás
previamente preparadas.
*/


