const readlineSync = require('readline-sync');

var name = readlineSync.question('What is your name?\n');
console.log('Hello ', name)


if (readlineSync.keyInYN('Would you like to play a game? Press "y" to enter the escape room')) {
    // 'Y' key was pressed.
    console.log('\nPick from one of the options below, be careful');
    // door does not open unless hasKey is true
    var doorOpen = false;
    // when key has been found change to true
    var hasKey = false;
    while (doorOpen === false) {
        var questions = ['Put hand in hole', 'Find the key', 'Open the door'];
        var answer = readlineSync.keyInSelect(questions, 'Which option will you choose?');
        if (answer === 0) {
            console.log('Dont do that, your character has died');
            console.log('starting fresh');
            hasKey = false;
        } else if (answer === 1) {
            console.log('congrats you have a key');
            hasKey = true;
        } else if (answer === 2) {
            if (hasKey === true) {
                doorOpen = true;
            } else {
                console.log('door did not open. try again.')
            }
        } else if (answer === -1) {
            console.log('thanks for playing')
            process.exit()
        }
    }
    console.log('congrats ' + name + ' you escaped')
} else {
    console.log('okay thank you');
}
  
