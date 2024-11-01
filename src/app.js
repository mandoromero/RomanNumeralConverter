/* eslint-disable */
import "bootstrap";
import "./style.css";

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clear-btn");

convertBtn.addEventListener("click", function() {
  const numberInputValue = numberInput.value.trim();

  // Reset output visibility and content
  output.style.display = "block";
  clearBtn.style.display = "block";
  // Convert the input value to an integer
  const parsedNumber = parseInt(numberInputValue);

  // Check if the input is empty
  if (numberInputValue === "") {
    output.textContent = "Please enter a valid number";
    return;
  }

  // Validate the input
  if (isNaN(parsedNumber) || parsedNumber < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (parsedNumber >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  // Convert the number to Roman numerals
  output.textContent = convertToRoman(parsedNumber);
});

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
  let result = "";

  // Convert the number to a Roman numeral
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}
clearBtn.addEventListener("click", function() {
  numberInput.value = " ";
  output.style.display = "none";
  clearBtn.style.display = "none";
});
