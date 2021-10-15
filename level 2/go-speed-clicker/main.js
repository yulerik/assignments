

document.getElementById('count').addEventListener('click', function(event) {
    document.getElementById('total').textContent++
    localStorage.clicked = document.getElementById('total').textContent
})

document.getElementById('total').textContent = localStorage.clicked
