const xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.vschool.io/pokemon", true);
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data.objects[0].pokemon);
        const pokemonData = data.objects[0].pokemon;
        showData(pokemonData); 
    }
}
// creates an element and adds the name of the pokemon to a new
// h1 tag and appends it to the body. creating a list of all pokemon
function showData(data) {
    for (let i = 0; i < data.length; i++) {
        let current = data[i];
        let name = document.createElement('h1');
        name.textContent = current.name;
        document.body.appendChild(name)
    }
}