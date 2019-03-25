/*
este va a ser un juego vasico en el que en el escenaripo abra un enemif¡go que atacara al jugador 
y viceversa en la que solo abra un enemigo y cada vez que se acabe con el reaparecera y
 se aumentara el contador de los puntos en uno , uno tiene que sobrevivir el maximo tiempo posibre.
 */
var puntosUsuario=0;
class juego{
    constructor(idTablero=construirTblero()){
        this.tablero=document.getElementById(idTablero);
        
    }

    nuevoMonstruoCoor(){
        let result=[]
        let comp=0
        while (comp!=0){
            crx=this.tablero.getAttribute("lenght");
            cry=this.tablero.getAttribute("hight");
            result.push
        }
    }
    
    construirTblero(){
        
    }

    annadirPersonaje(personaje){this.personaje=personaje}

    annadiMonstruo(){this.monster=new performance(nuevoMonstruoCoor())}

}


class personaje{
    //clase tanto del usuario como de la maquina para los personajes la diferencia es los parametros de cada 
    constructor(corxy=[0,0],vida=50,rango=5){
        this.vida=vida;
        this.corxy=corxy;
        this.rango=rango;
    }
    espadaAtk(){
    //representa tanto el ataque del usuario como el de la maquina 
    }

}

var personajeUser=new personaje(200);
function juego(){


    //termina al morir el personaje 
    if (personajeUser.vida<=0){
        final();
    }
}
function final(){
    clearInterval(j)
}

var j = setInterval(juego,1000);