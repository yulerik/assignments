// Preliminaries
    // a for loop prints 0-9
    console.log('Printing 0-9:')
    for (var i = 0; i <= 9; i++) {
        console.log(i);
    }
    // for loop prints 9-0
    console.log('Printing 9-0:')
    for (var j = 9; j >= 0; j--){
        console.log(j);
    }
    // loop prints fruits to console
    const fruit = ['banana', 'orange', 'apple', 'kiwi'];
    for (var k = 0; k < fruit.length; k++) {
        var currentFruit = fruit[k];
        console.log(currentFruit);
    }
// Bronze Medal
    // for loop pushes numbers 0-9 to an array
    var numberList = [];
    console.log(numberList);
    console.log('Pushing numbers 0-9...')
    for (var a = 0; a <= 9; a++) {
        numberList.push(a);
    }
    console.log(numberList);
    // printing even numbers from 0-100 to console
    console.log('0-100 even numbers only:')
    for (var b = 0; b <= 100; b+= 2) {
        console.log(b);
    }
    // push every other fruit to new list
    const fruitTwo = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
    const newFruits =[];
    for (var c = 0; c < fruitTwo.length; c++) {
        if (c % 2 === 0) {
            newFruits.push(fruitTwo[c]);
        }
    }
    console.log(newFruits)
    // Silver Medal