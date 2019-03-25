/*9. Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura: 
*/
function escribirFigura(){
    var figura ="HOLA";
    figura=figura.split();
    var longit=figura.length;
    var cadena="<table>"
    for (i=0;i<longit;i++){
        cadena=cadena+"<tr>";
        if (i==0){
            for (x=0;x<longit;x++){
                cadena=cadena+"<td>"+figura[x]+"</td>";
            }
        }
        else if((i>=1)&&(i<(longit-2))){
            for (x=0;x<longit;x++){
                if (i==0){
                    cadena=cadena+"<td>"+figura[i]+"</td>"
                }
                else if((x>=1)&&(x<(longit-2))){
                    cadena=cadena+"<td></td>"
                }
                else if(x==(longit-1)){
                    cadena=cadena+"<td>"+figura[-i]+"</td>"
                }
            }
        }
        else if(i==(longit-1)){
            for (x=0;x<longit;x++){
                cadena=cadena+"<td>"+figura[-x]+"</td>";
            }
        }
        cadena=cadena+"</tr>"
        
    }
    cadena=cadena+"</table>"
    document.getElementById("tabla").innerHTML=cadena
}