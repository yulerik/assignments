function collectAnimals(...animals) {
    return animals;
}

console.log(collectAnimals('dog', 'cat', 'mouse', 'jackoplope', 'platypus'));

// function combineFruit(fruits, sweets, vegetables) {
//     return {fruit: fruits, 'sweets': sweets, 'vegetables': vegetables};
// }
const combineFruits = (fruits, sweets, vegetables) => ({fruits, sweets, vegetables});


console.log(combineFruits(['apple', 'pear'], ['cake', 'pie'], ['carrot']));

function parseSentence({location, duration}) {
    return `We're going to have a good time in ${location} for ${duration}`
}

const vacation = {
    location: 'Burly Idaho',
    duration: '2 weeks' 
}

const {location, duration} = vacation;

console.log(parseSentence({location, duration}));

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

function returnFirst(items) {
    const [firstItem] = items;
    return firstItem
}

console.log(returnFirst([1, 2, 3]));


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activites are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));


function combineAnimals(...arr) {
    return arr.reduce((first, next) => [...first, ...next]); 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const another = ['wolf'];

let test = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, another);
console.log(test);

// ["dog", "cat", "mouse", "jackolope", "platypus"]



// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

const product = (...numbers) => numbers.reduce((acc, number) => acc * number);

console.log(product(1, 2, 3, 4, 5))


// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// const unshift = (...array) => array.reduce(function(final, index) {
//     return [...final, ...index]
// }, []);
const unshift = (...array) => array.reduce((final, index) => [...final, ...index], []);
console.log(unshift([1, 2], 'a', 'c'));

function populatePeople(names) {
    return names.map(function(name) {
        name = name.split(' ');
        // your code
        let [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(['Frank Peterson', 'Suzy Degual', 'Liza Jones']))

