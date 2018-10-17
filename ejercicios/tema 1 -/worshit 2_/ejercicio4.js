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