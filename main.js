
function calcTwo(event) {
  event .preventDefault();
  const num1 = document.getElementById("num1").value
  const num2 = document.getElementById("num2").value

  let sum = parseInt(num1) + parseInt(num2);
  document.getElementById("result").textContent = "Sum: " + sum;
  console.log(sum);
};

function calc(event) {
  event .preventDefault();
  const num1 = document.getElementById("num1").value
  const num2 = document.getElementById("num2").value

  let result = parseInt(num1) ** parseInt(num2);
  document.getElementById("result").textContent = "Exponent: " + result;
  console.log(result);
};

