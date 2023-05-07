function calc(event) {
  event .preventDefault();
  const valueOne = document.getElementById("valueOne").value
  const valueTwo = document.getElementById("valueTwo").value

  let result = valueOne ** valueTwo;
  console.log(result);
}
