const todo = document.todo;
// GET call to api, call showList to refresh page with updated list items
function mainList() {
    axios.get("https://api.vschool.io/yuleriksorensen/todo")
        .then(response => showList(response.data))
        .catch(error => console.log(error))
}
// puts data from GET call onto the screen
function showList(data) {   
    // document.getElementById('main').innerHTML = '';
    // clear old data from page
    clearMain()
    // empty form inputs
    clearForm()
    // for loop for each data id for the list
    for (let i = 0; i < data.length; i++) {
        // create div to wrap buttons and list items, current id
        // parent div for edit div and list items div
        const eachListItem = document.createElement('div');
        eachListItem.id = data[i]['_id'];
        eachListItem.className = 'item'

        // list items from database
        // div for title, price, desc, img
        const listItem = document.createElement('div');
        listItem.className = 'listItems';
        // title of list item
        const h1 = document.createElement('h1');
        h1.textContent = data[i].title
        listItem.appendChild(h1);
        // price of list item
        const price = document.createElement('h6');
        price.textContent = data[i].price;
        listItem.appendChild(price);
        // description of list item
        const desc = document.createElement('p');
        desc.textContent = data[i].description;
        listItem.appendChild(desc);
        // image url, set to image tag src
        const image = document.createElement('img');
        image.src = data[i].imgUrl;
        listItem.appendChild(image);
        // append div to parent div
        eachListItem.appendChild(listItem);

        // create edit div for checkbox, delete, and edit
        // div to wrap buttons
        const edit = document.createElement('div');
        edit.className = 'editOptions';

        // form for checkbox for completeing tasks
        const completeTask = document.createElement('form');
        completeTask.name = 'complete-task';
        // checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // assign checkbox checked boolean value with 
        // current completed value from GET call
        checkbox.value = data[i]['_id'];
        checkbox.checked = data[i]["completed"];
        // strikethrough when current completed status is true
        if (checkbox.checked) {strikethrough(listItem);}
        checkbox.name = 'completed';
        completeTask.appendChild(checkbox);
        // label for checkbox
        const check = document.createElement('label');
        check.for = 'completed';
        check.textContent = 'Completed';
        completeTask.appendChild(check);
        edit.appendChild(completeTask);
        // event listener to PUT call function for completing tasks
        checkbox.addEventListener('click', isCompleted);

        // edit button
        const editButton = document.createElement('button');
        editButton.type = 'button';
        // set name to id from database for ease of access later
        // when needing to delete
        editButton.name = data[i]['_id'];
        editButton.textContent = "Edit";
        edit.appendChild(editButton);
        // event listener to call function PUT call to edit input item
        editButton.addEventListener('click', editListItem);

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        // set name to id from database for ease of access later
        // when needing to delete
        deleteButton.name = data[i]['_id'];
        deleteButton.textContent = 'DELETE';
        edit.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteListItem);
        // add edit div to parent div
        eachListItem.appendChild(edit);
        // add parent div of edit and items to main document
        document.getElementById('main').appendChild(eachListItem);

    }
}
// while loop that clears all children in main, ie clears old list items
function clearMain(){
    const mainBody = document.getElementById("main")
    while(mainBody.firstChild){
        mainBody.removeChild(mainBody.firstChild)
    }
}
// GET call to start,
mainList();
// event listener to post form to database
todo.addEventListener("submit", postForm);
// creates new list item with form input values
function postForm(event) {
    event.preventDefault();
    const newItem = {
        "title": todo.title.value,
        "description": todo.description.value,
        "price": todo.price.value,
        "imgUrl": todo.imageUrl.value
    }
    // POST call with newItem sent as argument, wait for response back
    // then call mainlist again to refresh page data
    axios.post("https://api.vschool.io/yuleriksorensen/todo", newItem)
        .then(response => mainList(response.data))
        .catch(error => console.log(error))
}
// input form fields are set to blank strings
function clearForm() {
    document.todo.title.value = '';
    document.todo.description.value = '';
    document.todo.price.value = '';
    document.todo.imageUrl.value = '';
}
// calls when edit button is clicked
function editListItem(event){
    event.preventDefault()
    // clear eventlistener for current div, to replace with save event listener
    event.target.removeEventListener('click', editListItem); 

    // _id for PUT call is the same as the name for the edit button
    const itemId = event.target.name;
    console.dir(itemId);
    // use button name for currentDiv
    const currentDiv = document.getElementById(itemId);
    // access the list items title, price, desc, imgUrl
    const listItem = currentDiv.firstChild;
    const [title, price, description, imageUrl] = listItem.children;
    
    // hide current list item, but not edit button
    currentDiv.children[0].style.display = 'none';
    // change edit button to save and add event listener for PUT call function
    // to update the form
    currentDiv.children[1].children[1].textContent = 'Save';
    currentDiv.children[1].children[1].addEventListener('click', editPutCall)

    // create form to place ontop of edit div
    const editForm = document.createElement('form');
    editForm.name = 'save';
    // create four inputs with values as old list item values
    const titleLabel = document.createElement('label');
    titleLabel.for = 'newTitle';
    titleLabel.type = 'text';
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.name = 'newTitle';
    titleInput.type = 'text';
    titleInput.value = title.textContent;
    const priceLabel = document.createElement('label');
    priceLabel.for = 'newPrice';
    priceLabel.type = 'text';
    priceLabel.textContent = 'Price';
    const priceInput = document.createElement('input');
    priceInput.name = 'newPrice';
    priceInput.value = price.textContent;
    priceInput.type = 'text';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'newDescription';
    descriptionLabel.type = 'text';
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'newDescription';
    descriptionInput.value = description.textContent;
    descriptionInput.type = 'text';
    const imageLabel = document.createElement('label');
    imageLabel.for = 'newImageUrl';
    imageLabel.type = 'text';
    imageLabel.textContent = 'Image URL';
    const imageInput = document.createElement('input');
    imageInput.name = 'newImageUrl';
    imageInput.value = imageUrl.src;
    imageInput.type = 'text';
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', editPutCall);
    editForm.appendChild(titleLabel);
    editForm.appendChild(titleInput);
    editForm.appendChild(priceLabel);
    editForm.appendChild(priceInput);
    editForm.appendChild(descriptionLabel);
    editForm.appendChild(descriptionInput);
    editForm.appendChild(imageLabel);
    editForm.appendChild(imageInput);
    editForm.appendChild(saveButton);

    currentDiv.appendChild(editForm);
}
// PUT call to edit current ID items
function editPutCall(event){
    event.preventDefault();
    // parent div id is _id for database
    const itemId = event.target.parentElement.parentElement.id;
    // get the values of the save form inputs
    const newTitle = document.save.newTitle.value;
    const newPrice = document.save.newPrice.value;
    const newDescription = document.save.newDescription.value;
    const newImageUrl = document.save.newImageUrl.value;
    // JSON to update database on PUT call
    const updateItem = {
        "title": newTitle,
        "description": newDescription,
        "price": newPrice,
        "imgUrl": newImageUrl
    }
    // PUT call with proper response recalls mainList to repopulate data to main body
    axios.put(`https://api.vschool.io/yuleriksorensen/todo/${itemId}`, updateItem)
        .then(response => mainList())
        .catch(error => console.log(error))
}

// PUT call to delete current ID from database
function deleteListItem(event){
    event.preventDefault();
    alert('this will delete item');
    console.log(event)
    // the name is the id of item in the database
    const itemId = event.target.name;
    axios.delete(`https://api.vschool.io/yuleriksorensen/todo/${itemId}`)
        .then(response => mainList())
        .catch(error => console.log(error))
}
// PUT call to update completed status of list id
function isCompleted(event) {
    console.dir(event.target.checked);
    const itemId = event.target.value;
    // set completed to current checked, value is id
    const updateComplete = {
        "completed": `${event.target.checked}`
    }
    // PUT call with updated boolean as argument, 
    // then calls mainList to update page data
    axios.put(`https://api.vschool.io/yuleriksorensen/todo/${itemId}`, updateComplete)
        .then(response => mainList())
        .catch(error => console.log(error))
}
// strikesthrough list item
function strikethrough(data) {
    console.dir(data.children)
    // loop through first three elements to strikethrough
    for (let i = 0; i < 3; i++) {
        data.children[i].style.textDecoration = 'line-through solid red .3em';
    }
    // set opacity of image lower
    data.children[3].style.opacity = .2;
}