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

    for (let i = 0; i < data.length; i++) {
        const h1 = document.createElement('h1');
        h1.textContent = data[i].title
        document.getElementById('main').appendChild(h1);
        const desc = document.createElement('p');
        desc.textContent = data[i].description;
        document.getElementById('main').appendChild(desc);
        const price = document.createElement('h6');
        price.textContent = data[i].price;
        document.getElementById('main').appendChild(price);

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

function postForm(event) {
    event.preventDefault();

    const newItem = {
        "title": todo.title.value,
        "description": todo.description.value,
        "price": todo.price.value,
        "imgUrl": todo.imageUrl.value
    }

    axios.post("https://api.vschool.io/yuleriksorensen/todo", newItem)
        .then(response => mainList(response.data))
        .catch(error => console.log(error))
}