var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letterArray = alphabet.toUpperCase().split('');

function forception(people, alphabet) {
    // code goes here
    var forception = [];
    for (var i = 0; i < people.length; i++) {
        var current = people[i] + ':';
        forception.push(current);
        for (var j = 0; j < alphabet.length; j++) {
            var letter = alphabet[j];
            forception.push(letter);
        }
    }
    return forception;
}

console.log(forception(people, letterArray))