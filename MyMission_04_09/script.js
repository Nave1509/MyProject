function showResult() {
  let firstNumber = Number(document.getElementById("firstNumberElement").value);
  let secondNumber = Number(
    document.getElementById("secondNumberElement").value
  );
  let operator = document.getElementById("operatorElement").value;

  if (isNaN(firstNumber)) {
    alert("הערך הראשון אינו מספר");
  } else if (isNaN(secondNumber)) {
    alert("הערך השני אינו מספר");
  } else {
    let finalResult;
    if (operator == "+") {
      finalResult = firstNumber + secondNumber;
    } else if (operator == "-") {
      finalResult = firstNumber - secondNumber;
    } else if (operator == "*") {
      finalResult = firstNumber * secondNumber;
    } else if (operator == "/") {
      finalResult = firstNumber / secondNumber;
    }

    alert(finalResult);
  }
}
