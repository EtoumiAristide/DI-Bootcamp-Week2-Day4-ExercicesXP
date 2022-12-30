/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExercicesXP Exercice 1: Information
 */

//Part I : function with no parameters

//1-Create a function called infoAboutMe() that takes no parameter.
//2-The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log("I'm ETOUMI Aristide, I'm 27 years old and I like comuter science and sport, especialy football");
}

//3-Call the function.
infoAboutMe();

//Part II : function with three parameters

//1-Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//2-The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("Your name is " + personName + " you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

//3-Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");