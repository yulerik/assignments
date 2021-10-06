var readlineSync = require('readline-sync');

console.log('Hello! Welcome to the adventure rpg game. ')
const name = readlineSync.question('What is your name adventurer?\n');
console.log(`Hello ${name}, lets go on an adventure.`);


const inventory = {
    'name': name,
    'health': 100
}

// while(inventory.health > 0) {
//     console.log('lets go adventuring');
//     walk();

// }

  

readlineSync.keyInPause('press "W" to walk...', {
    limit: 'w',
    // remove hit any key message, set guide to false
    guide: false
});
walk();
// const options = [walk(), fight()];

function walk() {
    const enemiesEveryFourth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 'Intimidating Enemy', 'A Different Enemy', 'Another Enemy']
    console.log('walking');
    console.log('is that something nearby?');
    // every 25% chance enemy appears
    let max = enemiesEveryFourth.length;
    let randomIndex = (Math.floor(Math.random() * (max - 1 + 1) + 1)) - 1;
    // console.log(randomIndex)
    // console.log(enemiesEveryFourth[randomIndex]);
    if (enemiesEveryFourth[randomIndex] !== 0) {
        console.log(`uh oh ${enemiesEveryFourth[randomIndex]} showed up!`)
        let walkOrRun = readlineSync.keyIn('would you like to fight or run?\nPress "F" to fight and "R" to run.\n', {
            limit: 'fr',
            limitMessage: 'Please press the "F" or "R" key to either fight or run away.'
        });
        if (walkOrRun === 'f' || walkOrRun === 'F') {
            fight()
        } else if (walkOrRun === 'r' || walkOrRun === 'R') {
            run()
        }
    } else {
        console.log('seems like it was nothing... for now...')
    }
}
function run() {
    console.log('running away...');
}

function fight() {
    console.log('FIGHTING');

}
