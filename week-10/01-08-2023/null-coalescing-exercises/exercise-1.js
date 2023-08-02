let employeesArr = [
    {name: "Joey", id: 1, age: 26},
    {name: "Lily", id: null, age: 24},
    {name: "Alice", id: 7, age: null},
    {name: "Sam", id: 8, age: 24},
    {name: "Ray", id: null, age: null}
];

const employeesWithMissingData = employeesArr.filter(
    employee => (employee.id === null || employee.age === null) ?? employee.name
);

const namesOfEmployeesWithMissingData = employeesWithMissingData.map(
    employee => employee.name
);

console.log("Employees with missing data:", namesOfEmployeesWithMissingData);
