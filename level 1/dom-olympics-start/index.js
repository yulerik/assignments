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