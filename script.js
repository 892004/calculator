// Get references to the display and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// Function to handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    switch (buttonText) {
      case "AC":
        // Clear the display
        display.value = "";
        break;
      case "⌫":
        // Remove the last character
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        try {
          // Evaluate the expression
          display.value = eval(display.value);
        } catch (error) {
          // Handle invalid expressions
          display.value = "Error";
        }
        break;
      default:
        // Append the button text to the display
        display.value += buttonText;
    }
  });
});
