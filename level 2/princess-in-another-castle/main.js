class Player {
    constructor(name, totalCoins, status, hasStar = false, gameActive = true) {
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }
    
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        // const playerStatus = ['Powered Up', 'Big', 'Small', 'Dead'];
        if (this.status === 'Powered Up') {
            if (this.hasStar) {
                console.log(`Your star has protected you!`);
                this.hasStar = false;
                this.print();
            }
            else {
                this.status = 'Big';
            }
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else if (this.status === 'Small') {
            this.status = 'Dead'
            this.gameActive = false;
            console.log(`You lost the game! You died!`)
            this.print();
            stopTimer();
            return
        }
        this.print();
    }
    gotPowerup() {
        if (this.status === 'Powered Up') {
            this.hasStar = true;
            console.log(`Congratulations! You got a star!`);
        } else if (this.status === 'Big') {
            this.status = 'Powered Up';
        } else if (this.status === 'Small') {
            this.status = 'Big';
        }
        this.print()
    }
    addCoin() {
        this.totalCoins++;
        this.print();
    }
    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`);
    }
}
// first Object player is created.
const firstPlayer = new Player('Mario', 0, 'Big')
console.log(firstPlayer)
function randomRange() {
    let number = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (number === 0) {
        firstPlayer.gotHit();
    } else if (number === 1) {
        firstPlayer.gotPowerup()
    } else if (number === 2) {
        firstPlayer.addCoin()
    }
}
// call randomRange every half second
const timer = setInterval(randomRange, 500);
// stopTimer is called when randomRange calls hit() while status is 'Small';
// stopTimer clears timer interval and displays final coin count
function stopTimer() {
    if (firstPlayer.gameActive === false) {
        clearInterval(timer)
        console.log(`Your final Score was ${firstPlayer.totalCoins}`);
    }
}

