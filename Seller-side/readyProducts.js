// Function to display the prediction modal
function showPredictionModal() {
  var modal = document.getElementById("predictionModal");
  modal.style.display = "block";
  var btn = document.getElementById("magic-btn");
  btn.style.background = "";
  btn.style.backgroundColor = "grey"; // Change background color to grey
  //   document.body.style.filter = "blur(5px)";
}

// Function to hide the prediction modal
function hidePredictionModal() {
  var modal = document.getElementById("predictionModal");
  modal.style.display = "none";
  var btn = document.getElementById("magic-btn");
  btn.style.backgroundColor = ""; // Reset background color to default
}
