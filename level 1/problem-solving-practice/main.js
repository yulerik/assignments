function getLargest(arrayOfNumbers) {
    let max = arrayOfNumbers[0];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let current = arrayOfNumbers[i];
        if (current > max) {
            max = current;
        }
    }
    return max;
}

let testOne = [1, 2, 3, 5, 3, 1, 3, 4]; // ==> 5
console.log(getLargest(testOne));

function replaceWords(arrayOfWords, character) {
    const wordsWithCharacter = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        let current = arrayOfWords[i];
        if (current.indexOf(character) !== -1) {
            wordsWithCharacter.push(current)
        }
    }
    return wordsWithCharacter;
}

let testTwo = ['hello', 'hi', 'good morning', 'good day'];
console.log(replaceWords(testTwo, 'h'));

const isDivisible = (num1, num2) => {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(5, 2));

