/* script.js */

// JavaScript Algorithm
function calculateSum() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const number = parseInt(numberInput.value);
  
    if (isNaN(number) || number < 1) {
      resultElement.innerText = "Please enter a valid positive number.";
    } else {
      let sum = 0;
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      resultElement.innerText = "The sum of numbers from 1 to " + number + " is: " + sum;
    }
  }
  
  // JavaScript Event Listener
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateSum);
  