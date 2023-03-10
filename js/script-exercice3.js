/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExercicesXP Exercise 3 : Find The Numbers Divisible By 23
 */

//1-Create a function call isDivisible() that takes no parameter.
function isDivisible() {
    //2-In the function, loop through numbers 0 to 500.
    let outcome = "";
    let sum = 0;
    for (let i = 0; i < 500; i++) {
        //3-Console.log all the numbers divisible by 23.
        //4-At the end, console.log the sum of all numbers that are divisible by 23.
        if (i % 23 == 0) {
            sum += i;
            outcome += i + " ";
        }
    }
    console.log("Outcom: " + outcome);
    console.log("Sum: " + sum);
}

isDivisible();

//5-Bonus: Add a parameter divisor to the function.
function isDivisible(divisor) {
    let outcome = "";
    let sum = 0;
    for (let i = 0; i < 500; i++) {
        if (i % divisor == 0) {
            sum += i;
            outcome += i + " ";
        }
    }
    console.log("Outcom: " + outcome + " sont divisibles par " + divisor + " et leur somme est " + sum);
}

isDivisible(3);
isDivisible(45);