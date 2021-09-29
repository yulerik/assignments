/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark
// change var capital letter, white space in/around array
var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

// typo function name change to camelCase and its paramaters
// also changed withing the function itself
// indentation changed throughout function, curly brackets changed to current lines
function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}
// added whitespace, fixed indentation, fixed var names and parameters to camelCase
for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite;
    if (i  % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

// fixed name to camelCase, typo and white space
function howAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    // subtract 1 before multiply by random number
    return Math.floor((Math.random() * (10 - 1) + 1));
}
// typo and whitespace fixed
console.log(howAttractedIsLoisLaneToMe());

// white space and assign value to superman, wrap var in 
var clarkKent = true;
var superman = false;

// fixed indentation, whitespace added
while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
