const todo = document.todo;
// GET call to api, call showList to refresh page with updated list
function mainList() {
    axios.get("https://api.vschool.io/yuleriksorensen/todo")
        .then(response => showList(response.data))
        .catch(error => console.log(error))
}
// puts data from GET call onto the screen
function showList(data) {   
    // document.getElementById('main').innerHTML = '';
    clearMain()
    clearForm()

    for (let i = 0; i < data.length; i++) {
        // create div to wrap buttons and list items, current id
        const eachListItem = document.createElement('div');
        eachListItem.id = data[i]['_id'];
        eachListItem.className = 'item'

        // list items from database
        const listItem = document.createElement('div');
        listItem.className = 'listItems';
        // title of list item
        const h1 = document.createElement('h1');
        h1.textContent = data[i].title
        listItem.appendChild(h1);
        // price of list item
        const price = document.createElement('h6');
        price.textContent = `Price: ${data[i].price}`;
        listItem.appendChild(price);
        // description of list item
        const desc = document.createElement('p');
        desc.textContent = data[i].description;
        listItem.appendChild(desc);
        // image url, set to image tag src
        const image = document.createElement('img');
        image.src = data[i].imgUrl;
        listItem.appendChild(image);

        eachListItem.appendChild(listItem);

        // create edit div for checkbox, delete, and edit
        const edit = document.createElement('div');
        edit.className = 'editOptions';
        
        const completeTask = document.createElement('form');
        completeTask.name = 'complete-task';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = data[i]['_id'];
        // assign checkbox checked boolean with response from server data
        checkbox.checked = data[i]["completed"];
        if (checkbox.checked === true) {
            strikethrough(listItem);
        }
        // call strikethrough function for checkbox, if true strikethrough
        checkbox.name = 'completed';
        completeTask.appendChild(checkbox);
        const check = document.createElement('label');
        check.for = 'completed';
        check.textContent = 'Completed';
        completeTask.appendChild(check);
        edit.appendChild(completeTask);
        checkbox.addEventListener('click', isCompleted);

        const editButton = document.createElement('input');
        editButton.type = 'button';
        editButton.value = "Edit";
        edit.appendChild(editButton);
        editButton.addEventListener('click', editListItem);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        // set name to id from database for ease of access later
        // when needing to delete
        deleteButton.name = data[i]['_id'];
        deleteButton.textContent = 'DELETE';
        edit.appendChild(deleteButton);
        eachListItem.appendChild(edit);
        deleteButton.addEventListener('click', deleteListItem);
        // append list item wrapped div to main element
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

mainList();

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
    alert('editing')
}
// calls when delete button is clicked
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