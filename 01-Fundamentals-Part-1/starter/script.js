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

// VARIABLE DECLARATION: LET, CONST & VAR
// LET - Used to declare variables that can be changed later
let age = 23;
age = 25; // This can be called re-assignment or mutation of the value of a variable

// CONST - Used to decaler values that cannot be changed later
const birthYear = 2002;
birthYear = 2003; // This will throw an error because we cannot change the value of a constant variable

// VAR - The old way of declaring a variable before ES6. It is function-scoped and can lead to issues with variable hoisting.
var job = "Developer";
job = "Blockchain Developer"; 

// JavaScript Operators

// Mathematical Operators
const now = 2025;
const ageManny = now - 2002;
const ageJohnson = ageMa
nny - 2;
console.log(ageManny, ageJohnson);

console.log(ageManny * 2, ageJohnson / 7, 2 ** 3);
// 2 ** 3 means 2 * 2 * 2

const firstName = "Manny";
const lastName = "Johnson";
console.log(firstName + " " + lastName); // This is called concatenation
// Typeof Operator has been used earlier in the code
console.log(typeof(firstName));
// Asignment Operators
let x = 20 + 5; // 25
x += 25 // x = x + 25 = 50
x *= 2 // x = x * 2 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators
console.log(ageManny > ageJohnson); // >, <, >=, <=
console.log(ageJohnson >= 18);

console.log(now - 2002 > now - 2004); 

// Operators Precedence
const now = 2025;
const ageManny = now - 2002;
const ageJohnson = now - 2004;

console.log(now - 2002 > now - 2004); // Most comparison operators uses the left-to-right method
// MDN is a good resource to check Operators Precedence
// Most math operators uses the left-to-right method except for the exponentiation operator which uses the right-to-left method
console.log(25 - 10 - 5); // Left-to-right
console.log(2 ** 3 ** 2); // Right-to-left = 2 ** 9 = 512
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
//  The operator with the highest precedence is the grouping operator ( ) which can be used to change the order of operations
const averageAge = (ageManny + ageJohnson) / 2;
console.log(ageManny, ageJohnson, averageAge);

// Coding Challenge #1
let weightMark_1 = 78;
let heightMark_1 = 1.69;

let weightMark_2 = 95;
let heightMark_2 = 1.88;


let weightJohn_1 = 92;
let heightJohn_1 = 1.95;

let weightJohn_2 = 85;
let heightJohn_2 = 1.76;

const BMI_Mark_1 = weightMark_1 / (heightMark_1 ** 2);
console.log("Mark's first BMI:", BMI_Mark_1)

const BMI_Mark_2 = weightMark_2 / (heightMark_2 ** 2);
console.log("Mark's second BMI:", BMI_Mark_2 )

const BMI_John_1 = weightJohn_1 / (heightJohn_1 ** 2);
console.log("John's first BMI:", BMI_John_1 );

const BMI_John_2 = weightJohn_2 / (heightJohn_2 ** 2);
console.log("John's second BMI:", BMI_John_2);



// IF-ELSE STATEMENT for the FIRST CHALLENGE
if (BMI_Mark_1 > BMI_John_1) {
    console.log("Mark has a higher BIM in the first round");
} else if (BMI_John_1 > BMI_Mark_1) {
    console.log("John has a higher BMI than Mark in the first round");
} else {
    console.log("They are equal");
};


if (BMI_Mark_2 > BMI_John_2) {
    console.log("Mark has a higher BIM in the second round");
} else if (BMI_John_2 > BMI_Mark_2) {
    console.log("John has a higher BMI than Mark in the second round");
} else {
    console.log("They are equal");
}; 

//STRINGS & TEMPLATE LITERALS

const firstName = "Manny";
const job = "Blockchain Developer";
const birthYear = 2002;
const currentYear = 2025

const manny = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(manny);
// The above method is quite stressfull in writing strings but in ES-6, there's a better way to write strings and it's called TEMPLATE LITERALS
// To use the Template Literals, the whole string is always written in backticks and variable names are written inside ${}... even for expressions
const mannyNew = `I'm ${firstName}, a ${ currentYear - birthYear} years old ${job}!`; // This is Template Literal feature in ES-6
console.log(mannyNew);

console.log(`Just testing the use of backticks`);
console.log('String with \n\
new \n\
lines'); // Old method of writing

console.log(`Multi-line
with
backticks`) 

// Taking Decisions: If / Else Statements

const age = 15;

if(age >= 18) {
    console.log(`Manny can start driving 👌`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Manny is not old enough to start driving and needs ${yearsLeft} year(s) to start driving 👍`)
}

// Coding Challenge #2
let weightMark_1 = 78;
let heightMark_1 = 1.69;

let weightMark_2 = 95;
let heightMark_2 = 1.88;


let weightJohn_1 = 92;
let heightJohn_1 = 1.95;

let weightJohn_2 = 85;
let heightJohn_2 = 1.76;

const BMI_Mark_1 = weightMark_1 / (heightMark_1 ** 2);
console.log("Mark's first BMI:", BMI_Mark_1)

const BMI_Mark_2 = weightMark_2 / (heightMark_2 ** 2);
console.log("Mark's second BMI:", BMI_Mark_2 )

const BMI_John_1 = weightJohn_1 / (heightJohn_1 ** 2);
console.log("John's first BMI:", BMI_John_1 );

const BMI_John_2 = weightJohn_2 / (heightJohn_2 ** 2);
console.log("John's second BMI:", BMI_John_2);



// IF-ELSE STATEMENT for the FIRST CHALLENGE
if (BMI_Mark_1 > BMI_John_1) {
    console.log(`Mark has a higher BMI of ${BMI_Mark_1 - BMI_John_1} than John`);
} else {
    console.log(`John has a higher BMI of ${BMI_John_1 - BMI_Mark_1} than Mark`);
};

if (BMI_Mark_2 > BMI_John_2) {
    console.log(`Mark has a higher BMI of ${BMI_Mark_2 - BMI_John_2} than John`);
} else {
    console.log(`John has a higher BMI of ${BMI_John_2 - BMI_Mark_2} than Mark`);
} 


// Type Conversion and Coercion
// Type Conversion = When we manually convert from one type to another
// Type Coercion is when JS automatically does the conversion behind the scenes

// TYPE CONVERSION
const inputYear = '1991'; // The number "1991" here is a string
console.log(Number(inputYear), inputYear); // The number has been converted back to a number using the function in the console.log
console.log(inputYear + 18); // The original inputYear variable is still a string, so the result is concatenated as a string
console.log(Number(inputYear) + 18); // The inputYear varible is now considered a number and treated as such
console.log(Number(`Manny`)); // Returns NaN = Invalid number
console.log(typeof NaN);
console.log(String(1234), 1234); // The first is a string, and the second is a number

// TYPE COERCION : This happens when an operator is dealing with two values that have different types, JS automatically converts one of the values to match the other so the operation can be executed
console.log("I am " + 23 + " years old"); // The + operator coverted the number to a string and that's JS working behind the scenes
console.log("23" - "10" - 3); // With the - operator, strings are converted to numbers
console.log("23" * "2"); // 
console.log("46" / "2"); // 

let n = "1" + 1;
n = n -1 ;
console.log(n); */

// TRUTHY and FALSY values

// Falsy values in JS are: 0, ""(empty string), undefined, null, NaN : These values are not false initially but becomes false when converted to a boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Manny"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 200;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}
console.log(typeof(money)); // money is considered a number

let height = 156;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Heigth is UNDEFINED");
}

// Making decisions with EQUALITY Operators