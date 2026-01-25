// : is a type annotation

// Explicity, you are declaring the type of the variable
// implicitly, TypeScript infers the type based on the assigned value


let var1: number = 42; // var1 is of type number
let var2: string = "Hello, TypeScript!"; // var2 is of type string
let var3: boolean = true; // var3 is of type boolean


let var4: number[] = [1, 2, 3, 4, 5]; // var4 is an array of numbers
let var5: Array<string> = ["apple", "banana", "cherry"]; // var5 is an array of strings
// or 
let var6: string[] = ["apple", "banana", "cherry"]; // var6 is an array of strings

// Tuples
let var7: [number, string] = [1, "apple"]; // var7 is a tuple of number and string

// in objects


let var8: { name: string; age: number } = { name: "Alice", age: 30 }; // var8 is an object with name and age properties

// Functions
function add(a: number, b: number): number {
  return a + b; // The function takes two numbers and returns a number
}

// void return

function logMessage(message: string): void {
  console.log(message); // The function does not return anything
}

//arrow funtion 
const var9 = (x: number, y: number): number => {
  return x * y; // var9 is a function that takes two numbers and returns a number
}

console.log(add(5, 10)); 