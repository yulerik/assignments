const plus = document['add'];
const minus = document['subtract'];
const times = document['multiply'];

plus.addEventListener('submit', function(event) {
    event.preventDefault();
    const numOne = Number(plus['first-number'].value);
    const numTwo = Number(plus['second-number'].value);
    const sum = numOne + numTwo;
    document.getElementById('addEquals').textContent = sum;
    plus['first-number'].value = '';
    plus['second-number'].value = '';
})

minus.addEventListener('submit', function(event) {
    event.preventDefault();
    const numOne = Number(minus['first-number'].value);
    const numTwo = Number(minus['second-number'].value);
    const subtract = numOne - numTwo;
    document.getElementById('minusEquals').textContent = subtract;
    minus['first-number'].value = '';
    minus['second-number'].value = '';
})

times.addEventListener('submit', function(event) {
    event.preventDefault();
    const numOne = Number(times['first-number'].value);
    const numTwo = Number(times['second-number'].value);
    const multiply = numOne * numTwo;
    document.getElementById('timesEquals').textContent = multiply;
    times['first-number'].value = '';
    times['second-number'].value = '';
})