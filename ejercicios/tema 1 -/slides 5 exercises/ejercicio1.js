/*1.
Write a function that can take in any number of arguments,
 and returns the sum of all of the arguments.
 */
function sumOfArg(...arg){
    var longitud=arg.length;
    var sumaTotal=0;
    for (i=0;i<longitud;i++){
        document.write(arg[i])
        sumaTotal+=arg[i]
    }
    return sumaTotal;
}
/*
Write a function called addOnlyNums that can take in any 
number of arguments (including numbers or strings), 
and returns the sum of only the numbers.
*/
function addOnlyNums(...arg){
    var longitud=arg.length;
    var sumaTotal=0;
    for (i=0;i<longitud;i++){
        if (typeof(arg[i])=='number'){sumaTotal+=arg[i]};
    }
    return sumaTotal;
}
/*
Write a function called combineTwoArrays that takes in two arrays as arguments, 
and returns a single array that combines both (using the spread operator).
*/
function combineTwoArrays(arg1,arg2){return arr2=[...arg1,...arg2];};
/*
Write a function called 
sumEveryOther that takes in any amount of arguments, 
and returns the sum of every other argument.
*/
function sumEveryOther(...arg){
    var longitud=arg.length;
    var sumaTotal=0;
    var contador=1;
    for (i=0;i<longitud;i++){
        if (contador %2!=0){
            sumaTotal+=arg[i];
        };
        contador++;
    };
    return sumaTotal;
};
/*
Write a function called
 onlyUniques that can take in any number of arguments,
  and returns an array of only the unique arguments.
*/
function contains(...a, obj) {
    for (var i = 0; i <= a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


Array.prototype.removeItem = function (a) {
 for (var i = 0; i < this.length; i++) {
  if (this[i] == a) {
   for (var i2 = i; i2 < this.length - 1; i2++) {
    this[i2] = this[i2 + 1];
   }
   this.length = this.length - 1;
   return;
  }
 }
};
function onlyUniques(...arg){
    var longitud=arg.length;
    var argumentos=[];
    for (i=0;i<longitud;i++){
        if (!contains(argumentos,i)){
            argumentos.push(arg[i])
        }
    };
    for (i in argumentos){ 
        arg.removeItem[i];
    }
    return arg;
}
/*
Write a function called
combineAllArrays that takes in any number of arrays
 as arguments and combines all of them into one array.
*/
function combineAllArrays(...arg){
    var longitud=arg.length;
    var sumatotal=[];
    for (i=0;i<longitud;i++){
        argumento=arg[0]
        sumatotal=[...sumatotal,...argumento];
    }
}
/*
Write a function called squareAndSum 
that takes in any number of arguments,
 squares them, then sums all of the squares.
*/
function sumEveryOther(...arg){
    var longitud=arg.length;
    var sumaTotal=0;
    for (i=0;i<longitud;i++){
        sumaTotal+=(arg[i]*arg[i])
    };
    return sumaTotal;
};

