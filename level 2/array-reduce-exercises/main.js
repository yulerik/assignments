function total(arr) {
    return arr.reduce(function(final, number) {
        final+= number;
        return final;
    })
}

let testOne = [1, 2, 3]
console.log(total(testOne));

function stringConcat(arr) {
    return arr.reduce(function(final, index) {
        final = `${final}${index}`;
        return final
    }, '')
}

console.log(stringConcat(testOne))
console.log(typeof stringConcat(testOne));

function totalVotes(arr) {
    return arr.reduce(function(final, index) {
        if (index.voted) {
            final++
        }
        return final;
    }, 0)
}

let testTwo = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(testTwo));

function shoppingSpree(arr) {
    return arr.reduce(function(final, object) {
        final+= object.price;
        return final
    }, 0)
}

let testThree = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(testThree));

function flatten(arr) {
    return arr.reduce(function(final, arr) {
        final.push(...arr);
        return final
    }, [])
}

let testFour = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(testFour));

function voterResults(arr) {
    return arr.reduce(function(final, voter) {
        if (voter.age >= 18 && voter.age <= 25) {
            final.numYoungPeople++
            if (voter.voted) {
                final.numYoungVotes++
            }
        } else if (voter.age >= 26 && voter.age <= 35) {
            final.numMidsPeople++
            if (voter.voted) {
                final.numMidVotesPeople++
            }
        } else if (voter.age >= 36 && voter.age <= 55) {
            final.numOldsPeople++;
            if (voter.voted) {
                final.numOldVotesPeople++
            }
        }
        return final;
    },{numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0})
}

let testFive = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(voterResults(testFive));