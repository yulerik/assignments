var header = document.getElementById('header');
var newHeader = document.createElement('h1');
newHeader.textContent = 'JavaScript Made This!!';
header.appendChild(newHeader);
header.style.textAlign = 'center';
var headerPara = document.createElement('p');
headerPara.innerHTML = '<span id="name">Forrest</span> wrote this JavaScript';
header.appendChild(headerPara);