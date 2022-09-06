let num1 = Number(prompt("enter first number:"));
if (isNaN(num1)) {
  alert("First Num is Not a Number");
} else {
  let operator = prompt("Enter a math operation");
  let num2 = Number(prompt("Enter second Number:"));
  if (isNaN(num2)) {
    alert("Second Num is Not a Number");
  } else {
    let finalResult;
    if (operator == "+") {
      finalResult = num1 + num2;
    } else if (operator == "-") {
      finalResult = num1 - num2;
    } else if (operator == "*") {
      finalResult = num1 * num2;
    } else if (operator == "/") {
      finalResult = num1 / num2;
    }
    alert(finalResult);
  }
}
