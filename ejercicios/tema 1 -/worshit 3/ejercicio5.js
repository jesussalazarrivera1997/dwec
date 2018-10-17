/*5. The Temperature Converter
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/
var cel = 77
function celtofa(cels) {
    var faren = cels * 1.8 + 32;
    document.write(cels + " celsius son " + faren + "farenhigt")
}

var fa = 50;
function fatocel(faren) {
    var cels = (faren - 32) / 1.8;
    document.write(faren + " farenhigt son " + cels + "celsius");

}
fatocel(fa);
celtofa(cel);