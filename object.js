"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee1;
employee1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    jobTitle: "Software Engineer"
};
// Read only
var employee2;
employee2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    jobTitle: "Software Engineer"
};
console.log(employee2); // Output the employee2 object, but its properties cannot be modified
// Partial you can use Partial to make all properties of a type optional.
var employee3;
employee3 = {
    firstName: "Jane"
};
console.log(employee3); // Output the employee3 object with only firstName property
// Required you can use Required to make all properties of a type required.
var employee4;
employee4 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    jobTitle: "Product Manager"
};
console.log(employee4); // Output the employee4 object with all properties required
// Loop through the properties of employee4
for (var _i = 0, _a = Object.entries(employee4); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log("".concat(key, ": ").concat(value));
}
//  Pick you can use Pick to create a new type by selecting specific properties from an existing type.
var employee5;
employee5 = {
    firstName: "Bob",
    jobTitle: "Designer"
};
console.log(employee5); // Output the employee5 object with only firstName and jobTitle properties
// Omit you can use Omit to create a new type by excluding specific properties from an existing type.
var employee6;
employee6 = {
    firstName: "Charlie",
    jobTitle: "Developer"
};
console.log(employee6); // Output the employee6 object with only firstName and jobTitle properties
