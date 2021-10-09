var readlineSync = require('readline-sync');
// get name
console.log('Hello there.');
const name = readlineSync.question('What is your name wanderer?\n');
// ask if user wants to play
if (readlineSync.keyInYNStrict(`Hi, ${name}. Would you want to spare some time and play a game?`)) {
    console.log(`
    Okay. The game is your adventure.
    You will start by walking around.
    When you walk you gain health points.
    Whenever you encounter an enemy you have a choice
    to either fight or run. When running, you only have a 
    50% chance of being able to run away.
    When enemies are defeated, you receive their items.
    So, by entering you will be given full health
    and a backpack to collect goods.\n`)
    if (readlineSync.keyInYNStrict(`Are you sure you want to enter?`)) {
        console.log(`\nentering. Good luck ${name}`);
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
    health: 75,
    item: `Intimidating Enemy's Staff`
}
const enemyTwo = {
    name: 'A Different Enemy',
    health: 50,
    item: 'Shield of A Different Enemy'
}
const enemyThree = {
    name: 'Another Enemy',
    health: 25,
    item: `Another Enemy's Boots`
}
const enemies = [enemyOne, enemyTwo, enemyThree];

// functions
// current random enemy(from randomEnemy), inventory, and index of current enemy
function fighting(enemyObject, inventory, index) {
    // display current enemy name and health
    console.log(`${enemyObject.name}'s health is at ${enemyObject.health}`);
    // random amount of damage ranging from 10-50
    let damage = () => Math.floor(Math.random() * (50 - 10 + 1) + 10);
    // while the enemy has health, fight one turn each, then ask user
    // if they want to fight or run again. when user dies, game over
    // when enemy health is below zero exit
    while (enemyObject.health > 0) {
        let attack = damage();
        let enemyAttack = damage();
        // enemy damage is lessened by half if user as defeated atleast one enemy.
        if (inventory.items.length !== 0) {
            // Math.floor(enemyAttack/= 2);
            enemyAttack = Math.floor(enemyAttack/2);
        }
        // different messages for final hit on enemy and normal hit.
        if ((enemyObject.health - attack) <= 0) {
            console.log(`Fatal hit. ${enemyObject.name} has been defeated\n`)
            enemyObject.health-= attack;
        } else {
            enemyObject.health-= attack;
            console.log(`What a hit! Their health went down to: ${enemyObject.health}`);
        }
        // if the enemy is still alive after your hit, this way they cant hurt you after being defeated.
        if (enemyObject.health > 0) {
            console.log('\nenemy is now attacking')
            // when enemy has defeated user, health at or below zero
            // message, and return out of function.
            if ((health - enemyAttack) <= 0) {
                health-= enemyAttack
                console.log(`\nOH NO!\n${enemyObject.name} has defeated you.`)
                return
            }
            // if enemy attack does not defeat user.
            health-= enemyAttack;
            console.log(`ouch. your health was depleted down to: ${health}`);
            // after enemy has done damage, ask if user wants to run or fight again.
            let fightOrRun = readlineSync.keyIn(`\nWould you like to fight again or run?\n f: fight\n r: run\n`, {limit: 'fr'});
            // if fighting, continue while loop.
            // when running chosen, user has a 50% chance of getting away
            if (fightOrRun.toLowerCase() === 'f') {
                continue;
            } else if (fightOrRun.toLowerCase() === 'r') {
                console.log('can we escape?')
                let fiftyFifty = Math.floor(Math.random() * (100 - 0 + 1) + 0);
                if (fiftyFifty > 50) {
                    // when user gets away, return function.
                    console.log('you got away')
                    return;
                } else {
                    // when user cant get away, pause console and let them press any key to continue.
                    console.log('they are too strong.')
                    readlineSync.keyInPause(`get ready to fight again.`)
                }
            }
        }
    }
    // user can exit while loop with a 50% chance of running when chosen.
    // checks health, if 0 or below, push enemies item to inventory, delete enemy from array
    if (enemyObject.health <= 0) {
        console.log(`You have received ${enemyObject.item}.\nItem has been added to your inventory.`);
        inventory['items'].push(enemyObject.item);
        enemies.splice(index, 1);
        console.log(`\ncongrats, you have received 5 health points.`)
        health+= 5;
        console.log(`your health is now at ${health}.\nEnemies remaining: ${enemies.length}`);
        if (inventory.items.length === 1) {
            console.log(`\nNow that one enemy is defeated. Enemy attacks are half as damaging.\n`);
        }
    } 

}
function randomEnemy() {
    let max = enemies.length;
    // random number between 0 and length of the current enemies list.
    let index = (Math.floor(Math.random() * (max - 1 + 1) + 1)) - 1;
    // console.log(index)
    console.log(`${enemies[index].name} has appeared\nEnemy health: ${enemies[index].health}`)
    let fightOrRun = readlineSync.keyIn(`Would you like to fight or run?\n f: fight\n r: run\n`, {limit: 'fr'});
    if (fightOrRun.toLowerCase() === 'f') {
        console.log('fighting')
        fighting(enemies[index], inventory, index);
    } else if (fightOrRun.toLowerCase() === 'r') {
        let fiftyFifty = Math.floor(Math.random() * (100 - 0 + 1) + 0);
        if (fiftyFifty > 50) {
            console.log('you got away')
        } else {
            console.log('they are too strong.')
            readlineSync.keyInPause(`you will have to stay and fight.\n`)
            fighting(enemies[index], inventory, index);
        }
    }
}
function walk() {
    console.log('walking');
    console.log(`whats that in the bushes\n`);
    let chance = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    // console.log(chance);
    // 25% chance an enemy appears
    if (chance < 25) {
        randomEnemy();
    } else {
        console.log(`oh it was nothing, good thing we looked...\nhere is another health point for your wanders`)
        health++;
        console.log(`${health}`);
    }
}
function checkInventory() {
    readlineSync.keyInPause(`here are your items ${JSON.stringify(inventory.items)}`);
}
// while loop, when health deplets, user dies
while (health > 0) {
    if (enemies.length === 0) {
        console.log(`\nThere are no more enemies!\nCongrats on completing the adventure ${name}.\n\nFor your troubles you can keep the items you have received.\nThey are: ${inventory.items}`)
        break;
    }
    console.log(`\ncurrent health:\n${health}`)
    let walkOptions = readlineSync.keyIn(`What would you like to do?\n  w: Walk\n  i: Inventory\n`, {limit: 'wi',})
    if (walkOptions === 'w' || walkOptions === 'W') {
        walk();
    } else if (walkOptions === 'i' || walkOptions === 'I') {
        checkInventory();
    }
}

if (health <= 0) {
    console.log('your health as been depleted. better luck next time.')
    process.exit();
}