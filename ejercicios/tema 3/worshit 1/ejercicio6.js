/*6. 
Crea una función para calcular potencias de un modo recursivo.
*/
function potencias(x,y,z){
    if (y>0){
        return x;
    }else{
        x=x*z;
        y--;
        potencias(x,y,z);
    }
}