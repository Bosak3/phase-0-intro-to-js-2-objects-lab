// Write your solution in this file!
// let employee = {
//     name: 'Sam',
//     streetAddress: '11 Broadway'
// }

// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newEmployee = {...employee}
//     newEmployee[key] = value;
//     return newEmployee;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee}
//     delete newEmployee.name;
//     return newEmployee;

// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee.name;
//     return employee;
// }



let employee = {
    name: 'BoJangles',
    streetAddress: '22 Jump Street',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}

