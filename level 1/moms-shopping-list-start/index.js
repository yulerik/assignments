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
        var newDelete = document.createElement('button');
        newDelete.textContent = 'X';
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
