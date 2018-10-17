/*2. The Age Calculator
Forgot how old you are? Calculate it!
Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
 */
function calculateAge(thisyear, last_year) {
    var age = thisyear - last_year;
    var age2 = age - 1;
    document.write("the age of the person is " + age + " or " + age2 + "");
}
calculateAge(2018, 1997);
