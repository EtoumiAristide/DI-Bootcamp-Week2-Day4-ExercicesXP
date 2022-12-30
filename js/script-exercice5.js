/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExercicesXP - Exercise 5 : What’s In My Wallet ?
 * @param itemPrice
 * @param amountOfChange
 */

//1-Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//an item price
//and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {

    //2-In the function, determine whether or not you can afford the item.
    //If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    //If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

    return calculArgent(amountOfChange) >= itemPrice;
}

/**
 * Calcul et retourne le montant que l'user a en poche
 * @param amountOfChange 
 */
function calculArgent(amountOfChange) {
    const quarters = 0.25;
    const dimes = 0.10;
    const nickel = 0.05;
    const penny = 0.01;

    let montant = 0;
    for (let index = 0; index < amountOfChange.length; index++) {
        if (index == 0) {
            montant += amountOfChange[index] * quarters;
        }
        if (index == 1) {
            montant += amountOfChange[index] * dimes;
        }
        if (index == 2) {
            montant += amountOfChange[index] * nickel;
        }
        if (index == 3) {
            montant += amountOfChange[index] * penny;
        }
    }

    return montant;
}

//TEST
console.log(changeEnough(14.11, [2,100,0,0]));;
console.log(changeEnough(0.75, [0,0,20,5]));;