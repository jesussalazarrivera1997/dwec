/*3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
 */

function consumovida(actual_age, estimated_age, consumo); {
    var consumo_total = (estimated_age - actual_age) * (consumo * 365);
    consumo_total = Math.round(consumo_total);
    document.write("el consumo total de chocolatinas para el resto de la vida es " + consumo_total + "");
}
consumovida(21, 81, 2);
