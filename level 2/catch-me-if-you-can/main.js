function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'argument is not a number';
    } else {
        return x +  y;
    }
}

try {
    let test = sum(1, 2);
    console.log(test)
    let number = sum('1', '2');
    console.log(number);
} catch(err) {
    console.log(err)
} finally {
    console.log('runs at the end')
}

const user = {
    username: 'sam',
    password: '123abc'
};
function login(username, password) {
    if (username !== user['username'] || password !== user['password']) {
        throw 'username or password does not match'
    } else {
        return 'login successful!'
    }
}

try {
    let loginTest = login(user.username, user.password);
    console.log(loginTest);
    let testTwo = login('sam', '321');
    console.log(testTwo)
} catch(err) {
    console.log(err)
}