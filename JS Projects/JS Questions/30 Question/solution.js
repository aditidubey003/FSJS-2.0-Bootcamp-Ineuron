/*30. Create a simple calculator program in JavaScript which can perform the addition,
 substraction, multiplication and division on given numbers.*/

let number1 = +prompt("enter first number");
let number2 = +prompt("enter second number");
let operation = prompt("enter the operation out of (Add, Sub, Mul, Div)");

switch (operation){
  case "Add":
    alert (`The sum of ${number1} and ${number2} is ${number1 + number2}`);
    break;
  case "Sub":
    alert (`The subtraction of ${number1} and ${number2} is ${number1 - number2}`);
    break;
  case "Mul":
    alert (`The multiplication of ${number1} and ${number2} is ${number1 * number2}`);
    break;
  case "Div":
    alert (`The division of ${number1} and ${number2} is ${number1 / number2}`);
    break;
  default:
    alert("Enter a valid input");
}
