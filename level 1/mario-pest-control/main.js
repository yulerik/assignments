const goomba = document.goomba;
const bobOmb = document['bob-omb'];
const cheepCheep = document['cheep-cheep'];
const clear = document.querySelectorAll('#clear');

function goombaTotal(event) {
    event.preventDefault();
    let totalGoombas = Number(document.getElementById('total').textContent) + Number(goomba.total.value);
    let totalPrice = totalGoombas * 5;
    goomba.total.value = '';
    document.getElementById('total').textContent = totalGoombas;
    document.getElementById('price').textContent = totalPrice;
}
function bobOmbTotal(event) {
    event.preventDefault();
    let currentTotals = document.querySelector('#bob-omb #total');
    let totalBobOmbs = Number(currentTotals.textContent) + Number(bobOmb.total.value);
    let totalPrice = totalBobOmbs * 7;
    bobOmb.total.value = '';
    document.querySelector('#bob-omb #total').textContent = totalBobOmbs;
    document.querySelector('#bob-omb #price').textContent = totalPrice;
}
function cheepCheepTotal(event) {
    event.preventDefault();
    let currentTotals = document.querySelector('#cheep-cheep #total');
    let totalCheepCheeps = Number(currentTotals.textContent) + Number(cheepCheep.total.value);
    let totalPrice = totalCheepCheeps * 11;
    cheepCheep.total.value = '';
    document.querySelector('#cheep-cheep #total').textContent = totalCheepCheeps;
    document.querySelector('#cheep-cheep #price').textContent = totalPrice;
}
goomba.addEventListener('submit', goombaTotal);
bobOmb.addEventListener('submit', bobOmbTotal);
cheepCheep.addEventListener('submit', cheepCheepTotal);

function clearTotals(event) {
    event.preventDefault();
    let currentDiv = event.path[1].children;
    for (let i = 0; i < currentDiv.length; i++) {
        let current = currentDiv[i];
        if (current.id === 'total' || current.id === 'price') {
            current.textContent = 0;
        }
    }
}
for (let i = 0; i < clear.length; i++) {
    let currentButton = clear[i];
    currentButton.addEventListener('click', clearTotals)
}