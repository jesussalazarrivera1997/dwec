/*
1. Realiza una pagina que cree un objeto de tipo Date y muestre en la
pagina la siguiente informacion (cada una en una linea): 
• El año actual 
• El mes actual
• El dia actual 
• La hora actual
• Los minutos actuales
• Los segundos actuales
*/
function dateAlCompleto() {
    let fecha = new Date();
    document.write("el año actual es " + fecha.getFullYear() + "");
    document.write("el mes actual es " + fecha.getMonth() + "");
    document.write("el dica actual es " + fecha.getDay() + "");
    document.write("la hora actual es " + fecha.getHours() + "");
    document.write(" el minuto actual es " + fecha.getMinutes() + "");
    document.write("el segundo actual es " + fecha.getSeconds() + "");
}
/*
2. Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la  resta de fecha85 - fecha187 y 
observa lo que obtienes
*/

/*
    var fechaHoy = new Date ;
    var fecha85 =  new Date;
    fecha85.setDate(+85);
    var fecha187 =  new Date;
    fecha187.setDate(-187);
    var sum2fech85= new Date;
    sum2fech85.setDate(+85);
    sum2fech85.setFullYear(-2);
    var rest24fech187 = new Date(fecha187);
    rest24fech187.setHours(-24);
    var fechaResto = fecha85 - fecha187;
    document.write(fechaHoy)
*/

/*
cuenta atras  desde sesenta
*/
function cuentaAtras(x) {
    var Id = setInterval(intervalo, 1000);
    function intervalo() {
        if (x < 0) {

        } else {
            document.getElementById("contador").innerHTML = "" + x + "";
            x--;
        }
    }
}

//cuentaAtras(60);

/*ejercicio5
usando el objeto date con sus metodos get.hours,
 getMinutes y getSeconfs y el comando set timetout 
 crea un reloj , (es imposible repetir set time out por lo 
    que vamos a usar set interval que es mucho masfacil) 
*/

function relojConDate() {
    var reloje = setInterval(intervalo2, 1000);
    function intervalo2() {
        if (parar) {
            clearInterval(reloje);
        } else {
            var fecha = new Date;
            horas = fecha.getHours();
            min = fecha.getMinutes();
            sec = fecha.getSeconds();
            document.getElementById("reloj").innerHTML = ("" + horas + " / " + min + " / " + sec + "");
        }

    };
};
parar = false;
relojConDate();
