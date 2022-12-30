/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExercicesXP Exercice 2: Tips
 */

//1-Create a function named calculateTip() that takes no parameter.
function calculateTip() {
    //-Inside the function, use prompt to ask John for the amount of the bill.
    let montantFacture = prompt("Veuillez ntrer le montant du ticket svp!");

    //3-Here are the rules
    //If the bill is less than $50, tip 20%.
    //If the bill is between $50 and $200, tip 15%.
    //If the bill is more than $200, tip 10%.
    if (!isNaN(montantFacture)) {
        montantFacture = parseFloat(montantFacture);
        let tip;
        if (montantFacture < 50) {
            tip = 0.2;
        } else if (montantFacture >= 50 && montantFacture <= 200) {
            tip = 0.15;
        } else {
            tip = 0.1;
        }

        //4- Console.log the tip amount and the final bill (bill + tip).
        console.log("Montant " + montantFacture + " : Facture totale " + (montantFacture + (tip * montantFacture)));
    }
}

//5- Call the calculateTip() function.
calculateTip();