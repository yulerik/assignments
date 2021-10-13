const customerInfo = document.travelInfo

function getInfo(event) {
    alert('working')
    console.dir(customerInfo)
}

customerInfo.addEventListener('submit', getInfo)