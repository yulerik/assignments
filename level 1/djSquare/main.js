// blue mouse over
// red mouse button held down
// yellow when mouse button let go
// green when mouse is double clicked
// orange when mouse is scrolled in window

// keyboard press different colors r for red

var box = document.getElementById('square');


function blue() {
    box.style.backgroundColor = 'blue';
}
function green() {
    box.style.backgroundColor = 'green';
}
function yellow() {
    box.style.backgroundColor = 'yellow';
}
function red() {
    box.style.backgroundColor = 'red';
}
function original() {
    box.style.backgroundColor = '#3c234d';
}
function orange() {
    box.style.backgroundColor = 'orange';
    setTimeout(function () {document.removeEventListener('wheel', orange)},  300);
}
function keyPress(event) { 
    var key = event.code
    if (key === 'KeyR') {
        red();
    } else if (key === 'KeyB') {
        blue();
    } else if (key === 'KeyO') {
        orange();
    } else if (key === 'KeyP') {
        original();
    } else if (key === 'KeyY') {
        yellow();
    } else if (key === 'KeyG') {
        green();
    }
}


// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });


box.addEventListener('mouseenter', blue); 
box.addEventListener('mouseout', original);
box.addEventListener('dblclick', green);
box.addEventListener('mousedown', red);
box.addEventListener('mouseup', yellow);
// document.addEventListener('wheel', orange);

document.addEventListener('wheel', orange);
document.addEventListener('keydown', keyPress);

// add time out for wheel event to change box back to orange
