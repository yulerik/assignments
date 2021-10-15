function fiveAndGreaterOnly(arr) {
    return arr.filter(number => number >= 5)
}

let testOne = [3, 6, 8, 2]
console.log(fiveAndGreaterOnly(testOne));

function evensOnly(arr) {
    return arr.filter(number => number % 2 === 0)
}

console.log(evensOnly(testOne));

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(word => word.length <= 5);
}

let testTwo = ["dog", "wolf", "by", "family", "eaten", "camping"];
console.log(fiveCharactersOrFewerOnly(testTwo));

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(person => person.member)
}

let testThree = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
console.log(peopleWhoBelongToTheIlluminati(testThree));

function ofAge(arr) {
    return arr.filter(person => person.age >= 18);
}

let testFour = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];
console.log(ofAge(testFour))