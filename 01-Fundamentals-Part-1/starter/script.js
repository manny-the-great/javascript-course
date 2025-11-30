/* let js = "amazing";
console.log(48 + 8 + 23 - 10);

console.log("Manny");
console.log(23);

//VARIABLES: A box that is used to store a value, it takes the variable name and the value assigned to the variable.
// A variable name can only take camel-casing (firstName), numbers (manny3), dollar-sign ($testing), and underscores (my_source_code).

let firstName = "Manny";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let manny_johnson = 'Manny Johnson';
let $functionCode = 27;
let PI = 3.1415; //Variable names written in uppercase are for constants that will never change

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob); 

// Data Types
// Number
let age = 23;
// Strings
let fullName = "Manny Johnson";
//Boolean = A true or false value
let isActive = true;
console.log(isActive);
// Undefined = An empty value that is not defined
let jobDescription;
console.log(typeof jobDescription);
// Null
console.log(typeof null); // This is a bug in JavaScript, it should return 'object' 
// Symbol (ES2015)
//BigInt (ES2020)
// Typeof Operator - Used to check the data type of a variable
console.log(typeof isActive);
console.log(typeof fullName);
console.log(typeof age);

// Dynamic Typing - The ability of a programming language to change data types of a variable at runtime
age = "Twenty Three";
console.log(typeof age);
jobDescription = "Blockchanin Developer";
console.log(typeof jobDescription); 

// LET, CONST & VAR
// LET - Used to declare variables that can be changed later
let age = 23;
age = 25; // This can be called re-assignment or mutation of the value of a variable

// CONST - Used to decaler values that cannot be changed later
const birthYear = 2002;
birthYear = 2003; // This will throw an error because we cannot change the value of a constant variable

// VAR - The old way of declaring a variable before ES6. It is function-scoped and can lead to issues with variable hoisting.
var job = "Developer";
job = "Blockchain Developer"; */

// JavaScript Operators
// Mathematical Operators
const now = 2025;
const ageManny = now - 2002;
const ageJohnson = ageManny - 2;
console.log(ageManny, ageJohnson);

console.log(ageManny * 2, ageJohnson / 7, 2 ** 3);
// 2 ** 3 means 2 * 2 * 2

const firstName = "Manny";
const lastName = "Johnson";
console.log(firstName + " " + lastName);