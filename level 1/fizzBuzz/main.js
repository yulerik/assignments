function fizzBuzz() {
    // create an array with numbers 1-100
    const fizz = [];
    let flatLineFizz = '';
    // iterate until 100, pushing number to array
    for (var i = 1; i <= 100; i++) {
        // if i is divisible by 3 
            // push fizz instead of number
        // if i is divisible by 5
            // push buzz instead of number
        // if number is divisible by both 3/5
            // push fizzbuzz instead of number
        if (i % 3 === 0 && i % 5 !== 0) {
            fizz.push('fizz');
            flatLineFizz+= 'fizz\n';    
        } else if (i % 5 === 0 && i % 3 !== 0) {
            fizz.push('buzz');
            flatLineFizz+= 'buzz\n'
        } else if (i % 3 === 0 && i % 5 === 0) {
            fizz.push('fizzbuzz');
            flatLineFizz+= 'fizzbuzz\n'
        } else {
            fizz.push(i);
            flatLineFizz+= `${i}\n`
        }
    }
    console.log(flatLineFizz);
    return fizz;
}

const oneToOneHundred = fizzBuzz();
console.log(oneToOneHundred);

function countFizzes(array) {
    let fizz = 0;
    let buzz = 0;
    let both = 0;
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current === 'fizz') {
            fizz++
        } else if (current === 'buzz') {
            buzz++
        } else if (current === 'fizzbuzz') {
            both++
        }
    }
    const count = {
        'fizzbuzz': both,
        'fizz': fizz,
        'buzz': buzz
    };
    return count;
}

console.log(countFizzes(oneToOneHundred));