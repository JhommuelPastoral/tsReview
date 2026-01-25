import e = require("cors");

type employee = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}

let employee1: employee ;

employee1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  jobTitle: "Software Engineer"
};

// Read only

let employee2: Readonly<employee>;

employee2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  jobTitle: "Software Engineer"
};

console.log(employee2); // Output the employee2 object, but its properties cannot be modified


// Partial you can use Partial to make all properties of a type optional.

let employee3: Partial<employee>;

employee3 = {
  firstName: "Jane"
};
console.log(employee3); // Output the employee3 object with only firstName property


// Required you can use Required to make all properties of a type required.
let employee4: Required<employee>;
employee4 = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  jobTitle: "Product Manager"
};

console.log(employee4); // Output the employee4 object with all properties required

// Loop through the properties of employee4
for (const [key, value] of Object.entries(employee4)) {
  console.log(`${key}: ${value}`)
}

//  Pick you can use Pick to create a new type by selecting specific properties from an existing type.
let employee5: Pick<employee, "firstName" | "jobTitle">;

employee5 = {
  firstName: "Bob",
  jobTitle: "Designer"
};

console.log(employee5); // Output the employee5 object with only firstName and jobTitle properties

// Omit you can use Omit to create a new type by excluding specific properties from an existing type.
let employee6: Omit<employee, "age" | "lastName">;
employee6 = {
  firstName: "Charlie",
  jobTitle: "Developer"
};

console.log(employee6); // Output the employee6 object with only firstName and jobTitle properties
