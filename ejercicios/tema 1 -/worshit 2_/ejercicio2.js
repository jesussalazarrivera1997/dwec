/*2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".*/
var actual_age = 21;
var estimated_age = 80;
var consumo = 2;

var consumo_total = (estimated_age - actual_age) * (consumo * 365);
document.write("el consumo total de chocolatinas para el resto de la vida es " + consumo_total + "");