// : is a type annotation
var var1 = 42; // var1 is of type number
var var2 = "Hello, TypeScript!"; // var2 is of type string
var var3 = true; // var3 is of type boolean
var var4 = [1, 2, 3, 4, 5]; // var4 is an array of numbers
var var5 = ["apple", "banana", "cherry"]; // var5 is an array of strings
// or 
var var6 = ["apple", "banana", "cherry"]; // var6 is an array of strings
// Tuples
var var7 = [1, "apple"]; // var7 is a tuple of number and string
// in objects
var var8 = { name: "Alice", age: 30 }; // var8 is an object with name and age properties
// Functions
function add(a, b) {
    return a + b; // The function takes two numbers and returns a number
}
// void return
function logMessage(message) {
    console.log(message); // The function does not return anything
}
//arrow funtion 
var var9 = function (x, y) {
    return x * y; // var9 is a function that takes two numbers and returns a number
};
console.log(add(5, 10));
