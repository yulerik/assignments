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
    const peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
    ]      
    var names = [];
    var occupations = [];
    for (var d = 0; d < peopleArray.length; d++) {
        var current = peopleArray[d];
        names.push(current.name);
        occupations.push(current.occupation);
    }
    console.log(names);
    console.log(occupations);
// Gold Medal
    // 3x3 grid of zeros
    var grid = [];
    for (var e = 0; e <= 2; e++) {
        var innerGrid = [];
        for (var f = 0; f <= 2; f++) {
            innerGrid.push(0);
        }
        console.log(innerGrid);
        grid.push(innerGrid);
    }
    var gridTwo = [];
    for (var g = 0; g <= 2; g++) {
        var innerTwo = []
        for (var h = 0; h <= 2; h++) {
            innerTwo.push(g);
        }
        console.log(innerTwo);
        gridTwo.push(innerTwo);
    }
    var gridThree = [];
    for (var l = 0; l <=2; l++) {
        var innerThree = [];
        for (var m = 0; m <= 2; m++) {
            innerThree.push(m);
        }
        console.log(innerThree);
        gridThree.push(innerThree);
    }
    // change the last three grids to all 'x' as elements
    function changeTo(arrayOfArrays) {
        for (var i = 0; i < arrayOfArrays.length; i++) {
            var inner = arrayOfArrays[i];
            for (var j = 0; j < inner.length; j++) {
                arrayOfArrays[i][j] = 'x';
            }
            console.log(inner);
        }
        return arrayOfArrays;
    }
    changeTo(grid);
    changeTo(gridTwo);
    changeTo(gridThree);
