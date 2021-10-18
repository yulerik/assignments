const customerInfo = document.travelInfo

function getInfo(event) {
    event.preventDefault();
    console.dir(customerInfo)
    const firstName = customerInfo.firstName.value;
    console.log(firstName)
    const lastName = customerInfo.lastName.value;
    const age = customerInfo.age.value;
    const gender = customerInfo.gender.value;
    const location = customerInfo.location;
    const destinations = [];
    for (let i = 0; i < location.length; i++) {
        if (location[i].checked) {
            destinations.push(` ${location[i].value}`);
        }
    }
    const diet = customerInfo.diet;
    const restrictions = [];
    for (let i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            restrictions.push(` ${diet[i].value}`);
        }
    }
    alert(`First name: ${firstName}\nLast name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation(s): ${destinations}\nDietary restrictions: ${restrictions}`)
    
}

customerInfo.addEventListener('submit', getInfo)