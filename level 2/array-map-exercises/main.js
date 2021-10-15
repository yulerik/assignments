// array doubles the input array
function doubleNumbers(arr) {
    
    return arr.map(item => item * 2);
}

let testOne = [2, 5, 100];
console.log(doubleNumbers(testOne));

function stringItUp(arr) {
    return arr.map(item => item.toString())
}

console.log(stringItUp(testOne))

function capitalizeNames(arr) {
    return arr.map(item => {
        let letters = item.split('');
        letters[0] = letters[0].toUpperCase()
        for (let i = 1; i < letters.length; i++) {
            letters[i] = letters[i].toLowerCase();
        }
        return letters.join('')
    })
}

let testTwo = ["john", "JACOB", "jinGleHeimer", "schmidt"];
console.log(capitalizeNames(testTwo))

function namesOnly(arr) {
    return arr.map(item => item.name)
}

let testThree = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
console.log(namesOnly(testThree));

function makeStrings(arr) {
    return arr.map(item => {
        if (item.age >= 18) {
            return `${item.name} can go to The Matrix`
        } else {
            return `${item.name} is under age!!`
        }
    })
}

console.log(makeStrings(testThree))

function readyToPutInTheDom(arr) {
    return arr.map(item => {
        // no html file connected, so create element wont work
        // until connected to an html file.
        // let hOne = document.createElement('h1');
        // hOne.textContent = item.name
        // let hTwo = document.createElement('h2');
        // hTwo.textContent = item.age
        let hOne = `<h1>${item.name}</h1>`;
        let hTwo = `<h2>${item.age}</h2>`;
        return `${hOne}${hTwo}`
    })
}

console.log(readyToPutInTheDom(testThree))