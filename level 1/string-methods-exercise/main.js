function upperLower(string) {
    var upper = string.toUpperCase();
    var lower = string.toLowerCase();
    return upper + lower;
}
console.log(upperLower('HelLo'));

function findMiddleIndex(string) {
    var halved = Math.floor(string.length / 2);
    return halved; 
}
console.log(findMiddleIndex('Hello'));
console.log(findMiddleIndex('Hello World'));

function returnFirstHalf(string) {
    var middle = findMiddleIndex(string);
    var firstHalf = string.slice(0, middle);
    return firstHalf;
}
console.log(returnFirstHalf('hello'));
console.log(returnFirstHalf('hello world'));

function upperAndLower(string) {
    var firstHalf = returnFirstHalf(string);

    var middle = findMiddleIndex(string);
    var secondHalf = string.slice(middle);

    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}
console.log(upperAndLower('Hello'));
console.log(upperAndLower('Hello World'));

function capitalize(string) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        var current = words[i];
        var letters = current.split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    }
    return words.join(' ')
}
console.log(capitalize('hey friends! practice practice practice!'))