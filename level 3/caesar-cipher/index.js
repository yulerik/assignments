const readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? ')
const shift = parseInt(readline.question('How many letters would you like to shift? '))

function shiftLetters(phrase, moveRight) {
    // split phrase into words, then letters
    let words = phrase.split(' ')
    // map over each character in the word and put into an array all charCodes
    const charCodes = words.map(each => {
        const allCharCodes = []
        for (let i = 0; i < each.length; i++) {
            allCharCodes.push(each.charCodeAt(i))
        }
        return allCharCodes
    })
    // map over each words and split into letters to change the charCode
    // call move function to move the correct amount
    const newCodes = charCodes.map(index => {
        let newLetterCode = index.map(each => move(each, moveRight))
        return [...newLetterCode]
    })
    // take newCodes and create a string fromCharCodes
    const cipherPhrase = newCodes.map(each => {
        let newWord = each.map(index => String.fromCharCode(index))
        return newWord.join('')
    })
    // join the words to for the new cipher phrase
    return cipherPhrase.join(' ')
}
// takes in a character code and how many places to move, case sensitive
// returns a new character code, if its not a letter returns the same code.
function move(charCode, movement) {
    // lowercase movement
    if (charCode >= 97 && charCode <= 122) {
        let next = charCode + movement
        // if charCode doesnt overlap return next charCode
        // else get the diff of numbers to wrap back to 'a'
        if (next <= 122) {
            return next
        } else {
            let diff = 123 - charCode
            let newMovement = movement - diff
            next = 97 + newMovement
            return next
        }
    } 
    // uppercase letters
    // also wraps charCode if greater than 'Z'
    else if (charCode >= 65 && charCode <= 90) {
        let next = charCode + movement
        if (next <= 90) {
            return next
        } else {
            let diff = 91 - charCode
            let newMovement = movement - diff
            next = 65 + newMovement
            return next
        }
    } 
    // if the character isnt a letter dont do anything to it
    else {
        return charCode
    }
}

const cipher = shiftLetters(input, shift)

console.log(cipher)