let testOne = [1, 3, 5, 2, 90, 20];
testOne.sort((a, b) => a - b);
console.log(testOne)

testOne.sort((a, b) => b - a);
console.log(testOne)

let testTwo = ["dog", "wolf", "by", "family", "eaten"];
testTwo.sort((a, b) => a.length - b.length);
console.log(testTwo)

testTwo.sort();
console.log(testTwo)

let testThree = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];
testThree.sort((a, b) => a.age - b.age);
console.log(testThree)