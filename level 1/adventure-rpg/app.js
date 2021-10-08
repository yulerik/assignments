var readlineSync = require('readline-sync');
// get name
console.log('Hello there.');
const name = readlineSync.question('What is your name wanderer?\n');
// ask if user wants to play
if (readlineSync.keyInYNStrict(`Hi, ${name}. Would you want to spare some time and play a game?`)) {
    console.log(`
    Okay. The game is your adventure.
    You will start by walking around.
    Whenever you encounter and enemy you have a 50%
    chance of being able to run away.
    So, by entering you will be given full health
    and a backpack to collect goods.\n`)
    if (readlineSync.keyInYNStrict(`Are you sure you want to enter?`)) {
        console.log('\nentering\n');
    } else {
        console.log('thanks for stopping by. GoodBye')
        process.exit();
    }
} else {
    console.log('thanks for stopping by.')
    process.exit();
}
// set user and enemy variables.
let health = 100;
const inventory = {
    health: health,
    items: []
}


const enemyOne = {
    name: 'Intimidating Enemy',
    health: 100,
    item: `Intimidating Enemy's Staff`
}
const enemyTwo = {
    name: 'A Different Enemy',
    health: 100,
    item: 'Shield of A Different Enemy'
}
const enemyThree = {
    name: 'Another Enemy',
    health: 100,
    item: `Another Enemy's Boots`
}
const enemies = [enemyOne, enemyTwo, enemyThree];

// define functions
function fighting(enemyObject, inventory, index) {
    console.log(`${enemyObject.name}'s health is at ${enemyObject.health}`);
    let damage = () => Math.floor(Math.random() * (50 - 10 + 1) + 10);
    while (enemyObject.health > 0) {
        let attack = damage();
        // enemy damage is lessened by half if user as defeated atleast one enemy.
        let enemyAttack = Math.floor(damage()/2);
        if (inventory.items.length !== 0) {
            Math.floor(enemyAttack/= 2);
        }
        enemyObject.health-= attack;
        console.log(`What a hit! Their health went down to ${enemyObject.health}`);
        if (enemyObject.health > 0) {
            console.log('enemy attacking')
            if (health - enemyAttack <= 0) {
                health-= enemyAttack
                console.log(`\nOH NO!\n${enemyObject.name} has defeated you.`)
                return
            }
            health-= enemyAttack;
            console.log(`your health was depleted down to:\n ${health}`);
            let fightOrRun = readlineSync.keyIn(`Would you like to fight or run?\n f: fight\n r: run\n`, {limit: 'fr'});
            if (fightOrRun.toLowerCase() === 'f') {
                continue;
            } else if (fightOrRun.toLowerCase() === 'r') {
                console.log('can we escape?')
                let fiftyFifty = Math.floor(Math.random() * (100 - 0 + 1) + 0);
                if (fiftyFifty > 50) {
                    console.log('you got away')
                    break;
                } else {
                    console.log('they are too strong.')
                    readlineSync.keyInPause(`get ready to fight again.`)
                }
            }
        }
    }
    if (enemyObject.health <= 0) {
        console.log(`\nyou have defeated ${enemyObject.name}`)
        console.log(`${enemyObject.item} has been added to your items.`);
        inventory['items'].push(enemyObject.item);
        enemies.splice(index, 1);
    } 

}
function randomEnemy() {
    let max = enemies.length;
    let index = (Math.floor(Math.random() * (max - 1 + 1) + 1)) - 1;
    console.log(index)
    console.log(`${enemies[index].name} has appeared`)
    let fightOrRun = readlineSync.keyIn(`Would you like to fight or run?\n f: fight\n r: run\n`, {limit: 'fr'});
    if (fightOrRun.toLowerCase() === 'f') {
        console.log('fighting')
        fighting(enemies[index], inventory, index);
    } else if (fightOrRun.toLowerCase() === 'r') {
        console.log('can we escape?')
        let fiftyFifty = Math.floor(Math.random() * (100 - 0 + 1) + 0);
        if (fiftyFifty > 50) {
            console.log('you got away')
        } else {
            console.log('they are too strong.')
            readlineSync.keyInPause(`you will have to stay and fight.`)
            fighting(enemies[index], inventory, index);
        }
    }
}
function walk() {
    console.log('walking');
    console.log('whats that in the bushes');
    let chance = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    // console.log(chance);
    if (chance > 0) {
        console.log(`an enemy has appeared`)
        randomEnemy();
    }
}
function checkInventory() {
    readlineSync.keyInPause(`here are your items ${JSON.stringify(inventory.items)}`);
}
// while loop, when health deplets, user dies
while (health > 0) {
    console.log(`\ncurrent health:\n${health}`)
    let walkOptions = readlineSync.keyIn(`What would you like to do?\n  w: Walk\n  i: Inventory\n`, {limit: 'wi',})
    if (walkOptions === 'w' || walkOptions === 'W') {
        if (enemies.length === 0) {
            console.log(`There are no more enemies!`)
            break;
        }
        walk();
    } else if (walkOptions === 'i' || walkOptions === 'I') {
        checkInventory();
    }
}

if (health <= 0) {
    console.log('your health as been depleted. better luck next time.')
    process.exit();
}