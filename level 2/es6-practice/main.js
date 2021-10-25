// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

const name = 'John';
let age = 101;

const runForLoop = (pets) => {
    const petObjects = [];
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i]};
        let name;
        if (pets[i] === 'cat') {
            name = 'fluffy'; 
        } else {
            name = 'spot';
        }
        console.log(`pet name: ${name}`);
        pet.name = name; petObjects.push(pet);
    }
    console.log(`man name: ${name}`)
}

runForLoop(['cat', 'dog']);

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

function mapVegetables(arr) { 
    return arr.map(carrot => ({type: 'carrot', name: carrot}))
}
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly);
}

console.log(filterForFriendly(people));

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b;

console.log(doMathSum(1, 2));
console.log(produceProduct(2, 4));

const printString = (fName, lName, age) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`;
console.log(printString('Forrest', 'Snow', 30));

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

const filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);

console.log(filterForDogs(animals));

const templateLiterals = (location, name) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
console.log(templateLiterals('Colorado', 'Forrest'));