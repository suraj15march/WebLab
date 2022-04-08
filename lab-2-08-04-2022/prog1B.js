var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));

// Add two numbers
var sum = num1 + num2;

// Display output
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

if (sum % 2 == 0) {
  console.log("Sum is even.");
} else {
  console.log("Sum is odd.");
}
