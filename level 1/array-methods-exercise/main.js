var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
function arrayMethods(fruits, vegetables) {
    // remove last item from vegetables array
    vegetables.pop();
    console.log('fruits: ', fruits);
    console.log('vegetables: ', vegetables);
    // remove the first item from fruit
    fruits.shift();
    console.log('fruits: ', fruits);
    console.log('vegetables: ', vegetables);
    // index location of orange
    var orangePos = fruits.indexOf('orange');
    console.log('orange is located: ', orangePos);
    console.log('fruits: ', fruits);
    console.log('vegetables: ', vegetables);
    // add orange index to end of fruits
    fruits.push(orangePos);
    console.log('fruits: ', fruits);
    console.log('vegetables: ', vegetables);
    // length of the vegetalbles
    var vegLength = vegetables.length;
    console.log('there are ', vegLength, ' vegetables');
    // add length to the end of the vegetables
    vegetables.push(vegLength);
    console.log('fruits: ', fruits);
    console.log('vegetables: ', vegetables);
    // concat both arrays
    var food = fruits.concat(vegetables);
    console.log(food);
    food.splice(4, 2);
    console.log(food);
    food.reverse();
    console.log(food);
    return food.join(',');
}
console.log(arrayMethods(fruits, vegetables));
