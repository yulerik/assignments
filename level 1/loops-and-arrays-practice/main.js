var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

function howManyComputers(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        if (current === 'computer') {
            count++;
        }
    }
    return count;
}

var test = howManyComputers(officeItems);
console.log(test);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    }, {
      name: "Madeline",
      age: 80,
      gender: "female"
    }, {
      name: "Cheryl",
      age: 22,
      gender: "female"
    }, {
      name: "Sam",
      age: 30,
      gender: "male"
    }, {
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

function ageOverEighteen(arrayOfObjects) {
    var over = 0
    var under = 0;
    for (var i = 0; i < arrayOfObjects.length; i++) {
        var current = arrayOfObjects[i];
        var age = current.age;
        if (age >= 18) {
            over++;
            if (current.gender === 'male') {
                console.log(current.name + ' is old enough. He is good to see the movie.')
            } else {
                console.log(current.name + ' is old enough. She is good to see the movie.')
            }  
        } else {
            under++
            if (current.gender === 'male') {
                console.log(current.name + ' is not old enough to see the movie, dont let him in.');
            } else {
                console.log(current.name + ' is not old enough to see the movie, dont let her in.');
            }
        }
    }
    return over + ' amount of people were over 18, and ' + under + ' were under 18.';
}

var testTwo = ageOverEighteen(peopleWhoWantToSeeMadMaxFuryRoad);
console.log(testTwo);
 
var one = [2, 5, 435, 4, 3]; // "The light is on"
var two = [1, 1, 1, 1, 3];   // "The light is on"
var three = [9, 3, 4, 2];      // "The light is off"

function toggle(array) {
    var lightOn = false;
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        if (current % 2 === 1) {
            lightOn = !lightOn;
        }
    }
    if (lightOn) {
        return 'The light is on';
    } else {
        return 'The light is off';
    }
}

console.log(toggle(one));
console.log(toggle(two));
console.log(toggle(three));
