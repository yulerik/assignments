// new header
var header = document.getElementById('header');
var newHeader = document.createElement('h1');
newHeader.textContent = 'JavaScript Made This!!';
header.appendChild(newHeader);
header.style.textAlign = 'center';
var headerPara = document.createElement('p');
headerPara.innerHTML = '<span id="name">Forrest</span> wrote this JavaScript';
header.appendChild(headerPara);

// chat update and clear command                                                                                                                                                                                                                                                                                                                                                                     
var main = document.getElementById('main');
var chat = document.getElementsByClassName('messages');
var left = document.getElementsByClassName('message left');
var right = document.getElementsByClassName('message right');
var clearChat = document.getElementById('clear-button');

// iterate over every chat on left side
// change every other word to be censored
for (var i = 0; i < left.length; i++) {
    var current = left[i].innerHTML;
    var words = current.split(' ');
    for (var j = 0; j < words.length; j+= 2) {
        var letters = words[j].split('');
        for (var k = 0; k < letters.length; k++) {
            letters[k] = '*';
        }
        words[j] = letters.join('');
    }
    left[i].innerHTML = words.join(' ');
}

// iterate over every chat on right side
// change every other letter, in a word, to a pound sign
for (var i = 0; i < right.length; i++) {
    var current = right[i].innerHTML;
    var words = current.split(' ');
    for (var j = 0; j < words.length; j++) {
        var letters = words[j].split('');
        if (letters.length % 2 === 0) {
            for (var k = 0; k < letters.length; k+= 2) {
                letters[k] = '#';
            }
        } else {
            for (var k = 1; k < letters.length; k+= 2) {
                letters[k] = '#';
            }
        }
        
        words[j] = letters.join('');
    }
    right[i].innerHTML = words.join(' ');
}

// clear chat when clear button is clicked
function chatCleared() {
    alert('chat will clear');
    var oldChat = chat[0];
    while (oldChat.firstElementChild) {
        oldChat.removeChild(oldChat.firstElementChild);
    }
}

clearChat.addEventListener('click', chatCleared);

// dropdown menu style change
document.getElementById('theme-drop-down').addEventListener('change', function() {
    console.log('You selected: ', this.value);
});



var theme = document.getElementById('theme-drop-down');

theme.addEventListener('change', themeChange);

var leftChat = document.getElementsByClassName('left');

function themeChange() {
    if (theme.value === 'theme-one') {
        for (var i = 0; i < left.length; i++) {
            left[i].style.backgroundColor = 'burlywood';
            left[i].style.color = 'black';
            left[i].style.border = 'none';
        }
        for (var i = 0; i < left.length; i++) {
            right[i].style.backgroundColor = 'lightblue';
        }
    } else if (theme.value === 'theme-two') {
        for (var i = 0; i < left.length; i++) {
            left[i].style.backgroundColor = 'black';
            left[i].style.color = 'lightgrey';
            left[i].style.border = 'none';
        }
        for (var i = 0; i < left.length; i++) {
            right[i].style.backgroundColor = 'red';
        }
    } else if (theme.value === 'theme-three') {
        for (var i = 0; i < left.length; i++) {
            left[i].style.backgroundColor = 'white';
            left[i].style.color = 'black';
            left[i].style.border = '1px solid black';
        }
        for (var i = 0; i < left.length; i++) {
            right[i].style.backgroundColor = 'grey';
        }
    }
}
