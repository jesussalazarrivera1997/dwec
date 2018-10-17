/*1 
numeros aleatorios entre el 0 y 1
numeros aleatorios entre 100 y 200
pide dos valores al usuario y 
genera 2 numeros aleatorios al usuario entre esos valores
 */
function aleatorios(a,b){
    return Math.round((Math.random() * (b-a) ) + a)
}
function pedirDosNumeros(){
    let num1 = parseInt(prompt("Introduzca el primer valor"));
    let num2 = parseInt(prompt("Introduzca el segundo valor"));
    if (num1<num2){
        alert(" numero aleatorio : "+aleatorios(num1,num2)+"");
    }else {
        alert("numeros no validos");
    }
    
}
//document.write(aleatorios(0,1)+"</br>");
//document.write(aleatorios(100,200));
/*ejercicio 5
resuelve ecuaciones de segundo grado.
*/
function ecuacionesSegundoGrado(){
    let a = parseInt(prompt("variable a"));
    let b = parseInt(prompt("variable b"));
    let c = parseInt(prompt("variable c"));
    var solucion1 =(-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    var solucion2 =(-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    alert("solucion 1: "+solucion1+". Solucion 2:"+solucion2+"")
}
/*ejericio 7 
cree una web que jenere 2 columnas
 1 que que tenga un numero ascendente 
 y en otra el seno de esta
*/
function SenTable(){
    n=10
    document.write("<table>")
    document.write("<tr><td>numero</td><td>seno en rad</td></tr>")
    for (i =0;i<n;i++){
        document.write("<tr><td>"+i+"</td><td>"+Math.sin(i)+"</td></tr>")
    }
    document.write("</table>")
}
/*ejercicio 9

*/