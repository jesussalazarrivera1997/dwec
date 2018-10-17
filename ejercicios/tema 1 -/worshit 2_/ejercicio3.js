/*3. The Geometrizer
Calculate properties of a circle, searching the internet for definitions if not remember.
Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/
function circunference(radio) {
    var circu = radio * 3.14;
    var area = 3.14 * radio * radio;
    document.write("la circumferencia de radio " + radio + "mide un total de" + circu + "y su area es " + area + "");
};
circunference(9);