let button = document.getElementById("click");

button.addEventListener("click"),
  () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("Output");
    let weight_status = false,
      height_status = false;
  };

if (weight === "" || isNaN(weight) || weight <= 0) {
  document.getElementById("weight_error").innerHTML = "Data invalid";
} else {
  document.getElementById("whight_error").innerHTML = " ";
  weight_status = true;
}
if (height === "" || isNaN(height) || height <= 0) {
  document.getElementById("height_error").innerHTML = "Data invalid";
} else {
  document.getElementById("height_error").innerHTML = " ";
  height_status = true;
}
if (weight_status && height_status) {
  const BMI = weight / (height * 100 + height * 100);

  if (bmi < 18.6) {
    result.innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = "Normalweight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = "Overweight";
  } else {
    result.innerHTML = "Obesity";
  }
}
