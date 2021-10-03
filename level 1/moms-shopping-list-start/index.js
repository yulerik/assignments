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
function editItem(event) {
    var change = prompt('what would you like to change the item to?', '')
    var current = event.target.parentElement.children;
    if (change === null || change === '')  {
        alert('no change')
    } else {
        current[0].textContent = change;
    } 

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
        editItems[i].addEventListener('click', editItem)
    }
}
document.getElementById('list').addEventListener('mouseover', hoverOverList)

