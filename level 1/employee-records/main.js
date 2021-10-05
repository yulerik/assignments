var employees = [];

function Employee(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
    this.status = 'Full Time'
}

Employee.prototype.printEmployeeForm = function(Employee) {
    console.log(JSON.stringify(this))
}

var employeeOne = new Employee('Bill', 'Owner', '$500k/yearly');
var employeeTwo = new Employee('Jill', 'Manager', '$150k/yearly');
var employeeThree = new Employee('Gill', 'Operator', '$300/hourly');

employeeThree.status = 'Contract';
employeeOne.printEmployeeForm();
employeeTwo.printEmployeeForm();
employeeThree.printEmployeeForm();

employees.push(employeeOne);
employees.push(employeeTwo);
employees.push(employeeThree);

console.log(employees);

