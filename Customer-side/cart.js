// Get all delete buttons
const deleteButtons = document.querySelectorAll(".delete-icon");

// Add click event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the parent row of the clicked delete button
    const row = button.parentElement.parentElement;

    // Remove the parent row from the table
    row.remove();
  });
});
