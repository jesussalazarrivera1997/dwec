/*1. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
 */
function fortunaTeller(childs, parners, location, job) {
    document.write("tu seras un " + job + " en " + location + ", y estaras casado con " + parners + " y tendras " + childs + " hijos.");
}
fortunaTeller("2", "Lala", "versalles", "electricista");
fortunaTeller("19", "Lili", "Bagdag", "multimillonario");
fortunaTeller("0", "nadie", "malavida", "desempleado");
fortunaTeller("4", "Lulú", "dubai", "amo de casa");