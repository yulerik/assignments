//add new list item to shopping list
function newListItem(event) {
    event.preventDefault();
    if (document.addItem.title.value.length === 0) {
        alert('nothing to input to list');
    } else {
        // list item input value
        var itemName = document.addItem.title.value;
        // new list element
        var newItem = document.createElement('li');
        // new div, input value as text, append to list element
        var newDiv = document.createElement('div');
        newDiv.textContent = itemName;
        newItem.appendChild(newDiv);    
        // new edit and delete button, append to list element
        var newButton = document.createElement('button');
        newButton.textContent = 'edit';
        newButton.setAttribute('class', 'edit');
        var newDelete = document.createElement('button');
        newDelete.textContent = 'X';
        newDelete.setAttribute('class', 'delete');
        newItem.appendChild(newButton);
        newItem.appendChild(newDelete);
        // append list item and children to list
        document.getElementById('list').append(newItem);
        // clear input value
        document.addItem.title.value = '';
    }
}
// when input form is submitted
document.addItem.addEventListener('submit', newListItem);

// when X button is pressed, delete that item from list
function deleteThis(event) {
    alert('will delete this item');
    var listItem = event.target.parentElement
    document.getElementById('list').removeChild(listItem);
}
// adds new input value to div. deletes save button. adds edit button,
// deletes form input.
function addNewValueTwo(event, deleteButton, oldEditButton, saveButton) {
    event.preventDefault();
    var newValue = event.target[0].value;
    var currentDiv = event.target.parentElement.parentElement;
    currentDiv.removeChild(event.target.parentElement);
    currentDiv.removeChild(saveButton);
    var newDiv = document.createElement('div');
    newDiv.textContent = newValue;
    currentDiv.append(newDiv);
    currentDiv.append(oldEditButton);
    currentDiv.append(deleteButton);
}
// creates form within list item div. deletes edit button. adds a 
// save button for the form.
function editTwo(event) {
    console.dir(event)
    // old edit button
    var oldEditButton = event.target;
    // div item to be edited
    var listItem = event.target.previousElementSibling;
    // new form
    var form = document.createElement('form');
    form.setAttribute('name', 'editing');
    form.setAttribute('id', 'editing');
    // new input and button
    var newInput = document.createElement('input');
    newInput.setAttribute('name', 'newInput');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('value', listItem.textContent);
    var saveButton = document.createElement('button');
    saveButton.setAttribute('type', 'submit');
    saveButton.setAttribute('id', 'editing');
    saveButton.setAttribute('form', 'editing');
    saveButton.textContent = 'save';
    // empty old values and replace with form
    console.dir(event)
    event.target.previousElementSibling.textContent = '';
    var deleteButton = event.target.parentElement.removeChild(event.target.parentElement.lastElementChild);
    event.target.parentElement.appendChild(saveButton);
    event.target.parentElement.appendChild(deleteButton);
    event.target.parentElement.removeChild(oldEditButton);
    form.appendChild(newInput);
    listItem.appendChild(form);
    document.editing.addEventListener('submit', e => addNewValueTwo(e, deleteButton, oldEditButton, saveButton));
    saveButton.addEventListener('submit', e => addNewValueTwo(e, deleteButton, oldEditButton, saveButton));



}
// while inside of list div, delete item and edit item query updates
// adds event listeners to each element.
function hoverOverList() {
    var deleteItems = document.querySelectorAll('.delete');
    deleteItems.forEach(item => {
        item.addEventListener('click', deleteThis)
    })
    var editItems = document.querySelectorAll('.edit')
    for(var i = 0; i < editItems.length; i++) {
        editItems[i].addEventListener('click', editTwo)
    }
}
document.getElementById('list').addEventListener('mouseover', hoverOverList)

// change edit button to save button.
// take div input, make it the value of a new input box under a form.
// when save button is clicked. update form back to div with input value
// from form as the div textContent.
// function addNewValue(event) {
//     event.preventDefault();
//     var newValue = document.editing.newInput.value;
//     var newButton = document.createElement('button');
//     newButton.setAttribute('class', 'edit');
//     newButton.textContent = 'edit';
//     var currentDiv = event.path[1];
//     currentDiv.textContent = newValue;
//     var deleteButton = currentDiv.parentElement.removeChild(currentDiv.parentElement.lastElementChild);
//     currentDiv.parentElement.appendChild(newButton)
//     currentDiv.parentElement.appendChild(deleteButton)
// }

// takes new input value assigns it to div content, deletes save button, 
// adds edit button, removes form input

// works except for when hitting save button. works wnen hitting enter button.
// function edit(event) {
//     event.target.textContent = 'SAVE';
//     event.target.setAttribute('type', 'button')
//     event.target.removeAttribute('class', 'edit')
//     var oldValue = event.target.previousElementSibling.textContent;
//     event.target.previousElementSibling.textContent = '';
//     var currentDiv = event.target.previousElementSibling;
//     var current = event.target.parentElement.children[0];
//     var newForm = document.createElement('form');
//     newForm.setAttribute('name', 'editing');
//     var newInput = document.createElement('input');
//     newInput.setAttribute('name', 'newInput');
//     newInput.setAttribute('type', 'text');
//     newInput.setAttribute('value', oldValue);
//     newForm.appendChild(newInput);
//     currentDiv.appendChild(newForm);
//     var save = event.target.parentElement.removeChild(event.target)
//     document.editing.appendChild(save)
//     document.editing.addEventListener('submit', addNewValue)
//     event.target.addEventListener('click', addNewValue)
// }

