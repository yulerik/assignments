let testOne = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

function sortedOfAge(arr) {
    const ageVerified = arr.filter(person => person.age >= 18);
    ageVerified.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else if (a.lastName > b.lastName) {
            return 1;
        } else {
            return 0;
        }
    });
    const objectToString = ageVerified.reduce((final, person) => {
        let current = `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`;
        final.push(current);
        return final
    }, [])
    return objectToString;
}

console.log(sortedOfAge(testOne));