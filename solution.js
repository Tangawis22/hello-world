//1. Define the variables
let myString = "Hello, world!";
let myBoolean = true;
let myNumber = 42;

// 2. 5 comparisions

//1. Greater than
console.log(5>3); // true - 5 is greater than 3

//2. Less than
console.log(2 < 10); // true - 2 is less than 10

//3. Equality (== allows type conversion)
console.log(5 == "5"); // true - values are equal after conversion

//4. Strict equality (=== checks type too)
console.log(5 === "5"); // false - number vs string

//5. Not equal
console.log(7 != 8); // true - 7 is not equal to 8 

// 3. Output equation with template
let a = 5;
let b = 4;
let result = a * b;
console.log(`${a} * ${b} = ${result}`);

// 4. CONVERT NUMBER TO STRING
let num = 123;

//Method 1: String() function
let str1 = String(num);

// Method 2: toString() method
let str2 = num.toString();

console.log(str1, str2);

//5. BOOLEAN EXPRESSION WITH AND, OR, NOT
let expression = !(true && false) || true;
console.log(expression); // true

//6. FUNCTION: CHECK POSITIVE NUMBER
function isPositive(num) {
    return num > 0;
}

console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
console.log(isPositive(0)); // false

//7. LOOP: OUTPUT 1-10
// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// PROMPT USER FOR NUMBER
let input = prompt("Enter a number:");
let num = Number(input);

if (num === 5 || num === 13 || num % 3 === 0) {
    console.log("Your number is 5, 13, or divisible by 3!");
}

//9. FAVOURITE SEASON (IF..ELSE IF VS SWITCH)
// Using if..else if
let season = prompt("Enter your favourite season:");

if (season === "summer") {
  console.log("Hot and sunny days!");
} else if (season === "winter") {
  console.log("Cold and cozy nights!");
} else if (season === "autumn") {
  console.log("Leaves falling everywhere!");
} else if (season === "spring") {
  console.log("Flowers blooming beautifully!");
} else {
  console.log("Unknown season.");
}

// Using switch
switch (season) {
  case "summer":
    console.log("Hot and sunny days!");
    break;
  case "winter":
    console.log("Cold and cozy nights!");
    break;
  case "autumn":
    console.log("Leaves falling everywhere!");
    break;
  case "spring":
    console.log("Flowers blooming beautifully!");
    break;
  default:
    console.log("Unknown season.");
}