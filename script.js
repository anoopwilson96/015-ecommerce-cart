// Get a reference to the form element
let form = document.forms["one"];

// Check if the form exists
if (form) {
  // Get a reference to the select element using its ID
  let quantityEl = document.getElementById("quantity1");

  // Check if the select element exists
  if (quantityEl) {
    // Get the value of the selected option
    let selectedValue = quantityEl.value;

    console.log("Selected value:", selectedValue);

    // Now you can use the selectedValue variable in your JavaScript code
  } else {
    console.error("Select element with ID 'quantity1' not found.");
  }
} else {
  console.error("Form element named 'one' not found.");
}
//     quantityEl.addEventListener('change', (event) => {
// Update the selectedValue when the selection changes
selectedValue = event.target.value;
console.log("Updated selected value:", selectedValue);
